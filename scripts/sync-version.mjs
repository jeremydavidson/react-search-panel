#!/usr/bin/env node
/**
 * Compatibility wrapper — delegates to global releasekit CLI on PATH.
 */
import { runReleasekit } from "./run-releasekit.mjs"

const argv = process.argv.slice(2)
const isRelease = argv.includes("--release")

const code = isRelease
  ? runReleasekit(["release", "--channel", "prod", "-y"], "require")
  : runReleasekit(["sync"], "soft")

process.exit(code)
