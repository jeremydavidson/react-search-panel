import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

export const VERSION_FILES = [
  "package.json",
]

const PATHS = {
  packageJson: path.join(ROOT, "package.json"),
}

export function readPackageVersion() {
  const pkg = JSON.parse(fs.readFileSync(PATHS.packageJson, "utf8"))
  if (!pkg.version) {
    throw new Error("package.json is missing a version field")
  }
  return pkg.version
}

export function bumpSemver(version, bumpType = "patch") {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/)
  if (!match) {
    throw new Error(`Invalid semver "${version}". Expected major.minor.patch`)
  }

  let major = Number(match[1])
  let minor = Number(match[2])
  let patch = Number(match[3])

  if (bumpType === "major") {
    major += 1
    minor = 0
    patch = 0
  }
  else if (bumpType === "minor") {
    minor += 1
    patch = 0
  }
  else if (bumpType === "patch") {
    patch += 1
  }
  else {
    throw new Error(`Unknown bump type "${bumpType}". Use patch, minor, or major.`)
  }

  return `${major}.${minor}.${patch}`
}

function writePackageVersion(version) {
  const pkg = JSON.parse(fs.readFileSync(PATHS.packageJson, "utf8"))
  pkg.version = version
  fs.writeFileSync(PATHS.packageJson, `${JSON.stringify(pkg, null, 2)}\n`)
}

/**
 * Syncs the package version into every tracked version file for this project.
 */
export function syncVersion(version) {
  writePackageVersion(version)
}

function run(command) {
  execSync(command, { cwd: ROOT, stdio: "inherit" })
}

function runCapture(command) {
  return execSync(command, { cwd: ROOT, encoding: "utf8" }).trim()
}

function parsePorcelainLine(line) {
  if (line.startsWith("?? ")) {
    return { status: "??", path: line.slice(3) }
  }

  if (line.length >= 3 && line[2] === " ") {
    return { status: line.slice(0, 2), path: line.slice(3) }
  }

  const match = line.match(/^([ MADRCU?!]{1,2})\s+(.*)$/)
  if (match) {
    return { status: match[1], path: match[2] }
  }

  return { status: "?", path: line }
}

function describeGitStatus(status) {
  const code = status.trim()

  if (status === "??") return "untracked"
  if (code === "M" || status === " M" || status === "M ") return "modified"
  if (code === "A" || status === "A ") return "added"
  if (code === "D" || status === " D" || status === "D ") return "deleted"
  if (code === "R") return "renamed"
  return "changed"
}

function formatChangedFiles(porcelain) {
  return porcelain
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const { status, path: filePath } = parsePorcelainLine(line)
      const label = describeGitStatus(status)
      return `  - ${filePath} (${label})`
    })
}

function failDirtyWorkingTree(porcelain) {
  const files = formatChangedFiles(porcelain)

  console.error("")
  console.error("Release cancelled: uncommitted changes in your working tree.")
  console.error("")
  console.error("Changed files:")
  console.error(files.join("\n"))
  console.error("")
  console.error("Commit or stash these changes, then run release again:")
  console.error("  git add -A && git commit -m \"your message\"")
  console.error("  git stash push -u -m \"wip\"")
  console.error("")
  process.exit(1)
}

export function ensureCleanGit(allowDirty = false) {
  const status = runCapture("git status --porcelain")
  if (!status) {
    return
  }

  if (allowDirty) {
    console.warn("Warning: working tree has uncommitted changes.")
    return
  }

  failDirtyWorkingTree(status)
}

function publishNpm({ dryRun = false, otp } = {}) {
  const args = ["npm", "publish", "--access", "public"]
  if (dryRun) {
    args.push("--dry-run")
  }
  if (otp) {
    args.push(`--otp=${otp}`)
  }
  run(args.join(" "))
}

/**
 * Bump, sync version files, commit, tag, push, and npm publish.
 *
 * @param {{
 *   bumpType?: string,
 *   push?: boolean,
 *   publish?: boolean,
 *   dryRun?: boolean,
 *   otp?: string,
 * }} options
 * @returns {{ currentVersion: string, nextVersion: string }}
 */
export function releaseVersion({
  bumpType = "patch",
  push = true,
  publish = true,
  dryRun = false,
  otp,
} = {}) {
  const currentVersion = readPackageVersion()
  const nextVersion = bumpSemver(currentVersion, bumpType)
  const tag = `v${nextVersion}`

  console.log(`Releasing ${currentVersion} -> ${nextVersion} (${bumpType})`)

  if (dryRun) {
    console.log(`[dry-run] would sync ${VERSION_FILES.join(", ")}`)
    console.log(`[dry-run] would commit "chore: released ${tag}"`)
    console.log(`[dry-run] would tag ${tag}`)
    if (push) {
      console.log("[dry-run] would push branch and tags to origin")
    }
    if (publish) {
      console.log("[dry-run] would npm publish --access public")
    }
    return { currentVersion, nextVersion }
  }

  ensureCleanGit(false)

  const existingTag = runCapture(`git tag -l ${tag}`)
  if (existingTag) {
    throw new Error(`Tag ${tag} already exists.`)
  }

  syncVersion(nextVersion)

  const files = VERSION_FILES.join(" ")
  run(`git add ${files}`)

  const staged = runCapture(`git status --porcelain -- ${files}`)
  if (!staged) {
    throw new Error("Release files did not change. Aborting commit.")
  }

  run(`git commit -m "chore: released ${tag}"`)
  run(`git tag ${tag}`)

  if (push) {
    const branch = runCapture("git branch --show-current") || "main"
    run(`git push --atomic origin ${branch} ${tag}`)
    console.log(`Released ${tag} and pushed to origin/${branch}.`)
  }
  else {
    console.log(`Tagged ${tag} locally. Push with: git push && git push --tags`)
  }

  if (publish) {
    console.log(`Publishing react-search-panel@${nextVersion} to npm...`)
    publishNpm({ otp })
    console.log(`Published react-search-panel@${nextVersion}.`)
  }
  else {
    console.log("Skipped npm publish. Publish with: npm publish --access public")
  }

  return { currentVersion, nextVersion }
}

function parseBumpType(args) {
  if (args.includes("--major")) return "major"
  if (args.includes("--minor")) return "minor"
  return "patch"
}

function parseOtp(args) {
  const otpEq = args.find((arg) => arg.startsWith("--otp="))
  if (otpEq) {
    return otpEq.slice("--otp=".length)
  }

  const otpIdx = args.indexOf("--otp")
  if (otpIdx >= 0) {
    return args[otpIdx + 1]
  }

  return process.env.NPM_OTP
}

function printHelp() {
  console.log(`Usage:
  node scripts/sync-version.mjs [--patch|--minor|--major] [--dry-run]
  node scripts/sync-version.mjs --release [--patch|--minor|--major] [--no-push] [--no-publish] [--otp <code>] [--dry-run]

Updates package.json version for this npm package.

--release also commits package.json, creates git tag vX.Y.Z, pushes to origin,
and runs npm publish (prepublishOnly builds dist/).

Options:
  --patch       Bump patch version (default)
  --minor       Bump minor version
  --major       Bump major version
  --release     Commit, tag, push, and npm publish after syncing
  --no-push     With --release: commit and tag locally without pushing
  --no-publish  With --release: skip npm publish
  --otp <code>  One-time password for npm publish (or set NPM_OTP)
  --dry-run     Print the next version without writing files`)
}

function runCli() {
  const args = process.argv.slice(2)

  if (args.includes("--help") || args.includes("-h")) {
    printHelp()
    return
  }

  const dryRun = args.includes("--dry-run")
  const bumpType = parseBumpType(args)
  const isRelease = args.includes("--release")

  if (isRelease) {
    releaseVersion({
      bumpType,
      push: !args.includes("--no-push"),
      publish: !args.includes("--no-publish"),
      dryRun,
      otp: parseOtp(args),
    })
    return
  }

  const currentVersion = readPackageVersion()
  const nextVersion = bumpSemver(currentVersion, bumpType)

  console.log(`${currentVersion} -> ${nextVersion} (${bumpType})`)

  if (dryRun) {
    return
  }

  syncVersion(nextVersion)
  console.log("Synced version files.")
}

const isCli = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])

if (isCli) {
  try {
    runCli()
  }
  catch (error) {
    console.error("")
    console.error("Version sync failed:", error.message || error)
    console.error("")
    process.exit(1)
  }
}
