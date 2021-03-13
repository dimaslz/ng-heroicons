module.exports = {
  "hooks": {
    // "before:init": ["npm run lint", "npm test"],
    // "after:my-plugin:bump": "./bin/my-script.sh",
    "after:bump": "yarn build --prod ng-heroicons",
    "after:git:release": "echo After git push, before github release",
    "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
  },
  "git": {
    "commitMessage": "chore: release v${version}"
  }
}