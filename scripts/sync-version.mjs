#!/usr/bin/env node
/**
 * Compatibility wrapper for legacy sync-version.mjs / release scripts.
 * Delegates to @jeremydavidson/releasekit.
 */
import { spawnSync } from "node:child_process"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const argv = process.argv.slice(2)
const isRelease = argv.includes("--release")

const releasekitBin = require.resolve("@jeremydavidson/releasekit/package.json")
  .replace(/package\.json$/, "dist/cli.js")

const args = isRelease
  ? [releasekitBin, "release", "--channel", "prod", "--release", "-y"]
  : [releasekitBin, "sync", "-y"]

const result = spawnSync(process.execPath, args, { stdio: "inherit" })
process.exit(result.status ?? 1)
