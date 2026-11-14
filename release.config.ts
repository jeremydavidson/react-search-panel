import type { ReleaseConfigInput } from "@jeremydavidson/releasekit"

const config: ReleaseConfigInput = {
  versionStyle: {
    padPatch: false,
  },
  stamp: [
    { type: "packageJson", path: "package.json" },
  ],
  channels: {
    prod: { branch: ["main", "master"], prerelease: false },
  },
  deploy: [
    {
      id: "npm",
      command: "npm publish --access public",
      when: { flag: "release", channel: "prod" },
    },
  ],
  git: {
    commitTemplate: "chore: release {version}",
    tagTemplate: "v{version}",
    rollbackOnDeployFailure: true,
    remote: "origin",
  },
}

export default config
