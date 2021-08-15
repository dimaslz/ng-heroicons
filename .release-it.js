module.exports = {
  "hooks": {
    "before:init": ["yarn test"],
    // "after:my-plugin:bump": "./bin/my-script.sh",
    "after:bump": "NODE_ENV=production yarn build ng-heroicons",
    "after:git:release": "echo After git push, before github release",
    "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
  },
  "git": {
    "commitMessage": "chore: release v${version}",
    "release": true
  },
  "npm": {
    "publish": false
  },
  "plugins": {
    "@release-it/bumper": {
      "out": ["projects/ng-heroicons/package.json", "dist/ng-heroicons/package.json"]
    },
    "@release-it/conventional-changelog": {
      "preset": "conventionalcommits",
      "infile": "CHANGELOG.md"
    }
  }
}