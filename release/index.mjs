":" //#;exec /usr/bin/env node --input-type=module - "$@" < "$0"
"use strict";

import chalk from "chalk";
import fs from "fs/promises";
import path from "path";
import shell from "shelljs";
import prompts from "prompts";
import rimraf from "rimraf";
import commandLineArgs from "command-line-args";
import axios from "axios";

import config from "../release.config.mjs";

const { pathname: __dirname } = new URL('.', import.meta.url)

const root = path.resolve(__dirname);
const here = path.resolve(root);
const heroiconsPath = path.resolve(`${here}/../heroicons`);
const heroiconsGitRepo = "https://github.com/tailwindlabs/heroicons.git";
const optionDefinitions = [
  { name: 'version', alias: 'v', type: String },
  { name: 'updateHeroicons', alias: 'u', type: Boolean },
  { name: 'publish', alias: 'p', type: Boolean },
  { name: 'bump', alias: 'b', type: Boolean },
  { name: 'release', alias: 'r', type: Boolean },
]
const options = commandLineArgs(optionDefinitions)

const ANGULAR_VERSION = {
  "v11": "angular-v11",
  "v12": "angular-v12",
  "v13": "angular-v13",
  "v14": "angular-v14",
  "v15": "angular-v15",
  "v16": "angular-v16",
  "v17": "angular-v17",
  "v18": "angular-v18",
};

async function prompt(props, onCancel = null) {
	return await prompts(props, {
		onCancel: onCancel || (() => {
			console.log("\n🛑 Command release has been canceled.\n")

			shell.exit(1);
		})
	})
}

async function updateReadme(version) {
	const mainReadmeFile = await fs.readFile(`${here}/../README.md`);

	const angularDistFolderPath = `${here}/../dist/${version}`;

	const distExists = shell.test("-e", angularDistFolderPath);

	if (!distExists) {
		throw new Error(`Distribution folder for ${version} does not exists`);
	}

	await fs.writeFile(`${angularDistFolderPath}/README.md`, mainReadmeFile);
}

async function versionAlreadyExists(version) {
	try {
		await axios(`https://www.npmjs.com/package/@dimaslz/ng-heroicons/v/${version}`);

		return true;
	} catch (error) {
		return false
	}
}

async function bumpPackageVersion({ angularVersion, update }) {
	const publish = options.publish;
	const release = options.release;
	try {
		const distPackagePath = `${root}/../dist/${angularVersion}/package.json`;

		if ((!release && publish) || !update) {
			const packageContent = await fs.readFile(distPackagePath, { encoding: "utf-8" });
			const packageJSON = JSON.parse(packageContent);

			return {
				currentVersion: packageJSON.version,
				newVersion: packageJSON.version
			};
		}

		const packageContent = await fs.readFile(distPackagePath, { encoding: "utf-8" });
		const packageJSON = JSON.parse(packageContent);
		const versionSplit = packageJSON.version.split(".");
		const major = versionSplit.shift();
		const minor = versionSplit.shift();
		let patch = versionSplit;

		if (options.release) {
			const rcNumber = +(patch.slice(-1)) + 1;
			patch.splice(1, 1, rcNumber);
			patch = patch.shift().replace("-rc", "");

		} else if (/-rc/.test(patch.join("."))) {
			const rcNumber = +(patch.slice(-1)) + 1;
			patch.splice(1, 1, rcNumber);
			patch = patch.join(".");

		} else {
			patch = +(patch) + 1;
		}

		const newVersion = [major, minor, patch].join(".");
		packageJSON.version = newVersion;

		const { value: agreeNewVerion } = await prompts({
			type: 'confirm',
			name: 'value',
			message: `The new version is "${newVersion}", are you agree?`,
			initial: true
		});

		if (agreeNewVerion) {
			await fs.writeFile(distPackagePath, JSON.stringify(packageJSON, null, 2));

			const libPackagePath = `${root}/../packages/${ANGULAR_VERSION[angularVersion]}/projects/lib/package.json`;
			const libPackage = await fs.readFile(libPackagePath, { encoding: "utf-8" });
			const libPackageJSON = JSON.parse(libPackage);
			libPackageJSON.version = newVersion;

			await fs.writeFile(libPackagePath, JSON.stringify(libPackageJSON, null, 2));

			return {
				currentVersion: packageJSON.version,
				newVersion: libPackageJSON.version
			};
		}

		console.log("⚠️ Version is not updated")
		return {
			currentVersion: packageJSON.version,
			newVersion: libPackageJSON.version
		};
	} catch (error) {
		console.log("error", error.message)
		throw new Error("Something happen updating package version")
	}
}

function updateComponents(angularVersion) {
	console.log(`\n🕣 Update components in ${ANGULAR_VERSION[angularVersion]}\n`)
	shell.exec(`yarn update:${angularVersion}`);
	console.log(`\n${chalk.green("✔")} Update components in ${ANGULAR_VERSION[angularVersion]}\n`)
}

function getAngularVersion() {
	const angularVersion = options.version || null;

	if (!angularVersion) {
		throw new Error("Angular version is mandatory");
	}

	return angularVersion;
}

function buildLib(angularVersion) {
	console.log(`\n🕣 building ${ANGULAR_VERSION[angularVersion]} library\n`)
	shell.exec(`yarn build:${angularVersion}`)
	console.log(`\n${chalk.green("✔")} building ${ANGULAR_VERSION[angularVersion]} library\n`)
}

function getCurrentBranch() {
	return shell.exec("git rev-parse --abbrev-ref HEAD");
}

async function downloadHeroicons(angularVersion) {
	if (shell.test("-e", heroiconsPath)) {
		const { value: canUpdateHeroicons } = await prompt({
			type: 'confirm',
			name: 'value',
			message: 'Heroicons files is already downloaded, do you want to update?',
			initial: null
		});

		if (canUpdateHeroicons) {
			shell.echo(` run the command: ${chalk.yellow("yarn generate --v=" + angularVersion)}`);
		}
	} else {
		const { value: canUpdateHeroicons } = await prompt({
			type: 'confirm',
			name: 'value',
			message: 'Heroicons files does not exists, do you want to download?',
			initial: null
		});

		if (canUpdateHeroicons) {
			shell.echo(` run the command: ${chalk.yellow("yarn generate -v=" + angularVersion)}`);
		}
	}
}

async function commitTag({ angularVersion, newVersion, branch }) {
	const { value: canTag } = await prompt({
		type: 'confirm',
		name: 'value',
		message: 'Do you want to tag the package version?',
		initial: true
	});

	if (canTag) {
		shell.exec(`git add packages/${ANGULAR_VERSION[angularVersion]} && git tag ${angularVersion}-${newVersion} && git push -f --tags origin ${branch}`);
	}
}

async function installPackages(angularVersion) {
	const { value: canInstallPackage } = await prompt({
		type: 'confirm',
		name: 'value',
		message: `Do you want to install the package for ${angularVersion}?`,
	});

	if (canInstallPackage) {
		shell.exec(`yarn --cwd=packages/${ANGULAR_VERSION[angularVersion]} install`);
	}
}

async function commitChanges({ angularVersion, newVersion }) {
	const { value: canCommit } = await prompt({
		type: 'confirm',
		name: 'value',
		message: 'Do you want to commit changes?',
		initial: true
	});

	if (canCommit) {
		shell.exec(`git add packages/${ANGULAR_VERSION[angularVersion]} && git commit -m "chore(tag): bump version to ${newVersion}"`);
	}
}

async function publishNPM(angularVersion) {
	const { value: canPublishPackage } = await prompt({
		type: 'confirm',
		name: 'value',
		message: 'Do you want to publish the package?',
		initial: true
	});

	if (canPublishPackage) {
		shell.cd(`dist/${angularVersion}`);
		shell.exec("npm publish --access public");
		shell.cd(here);
	}
}

async function run() {
	if (!shell.which("git")) {
		shell.echo("Sorry, this script requires git repo");
		shell.exit(1);
	}

	const angularVersion = getAngularVersion();

	if (angularVersion === "all") {
		shell.exit(1);
	}

	const BRANCH = getCurrentBranch();

	// update heroicons files
	if (options.updateHeroicons) {
		await downloadHeroicons(angularVersion);
	}

	// install package
	await installPackages(angularVersion);

	// update components
	updateComponents(angularVersion);

	// build library
	buildLib(angularVersion)

	// copy build to dist folder
	console.log(`\n🕣 copy new build to "/dist/${angularVersion}" package\n`);
	shell.exec(`yarn ${angularVersion}-copy-release`)
	console.log(`\n${chalk.green("✔")} copy new build to "/dist/${angularVersion}" package\n`);

	// update package.json
	const { value: canBumpPackageVersion } = await prompt({
		type: 'confirm',
		name: 'value',
		message: 'Do you want to update the package version?',
		initial: true
	});

	const { currentVersion, newVersion } = await bumpPackageVersion({
		angularVersion,
		update: canBumpPackageVersion
	});

	const versionExists = await versionAlreadyExists(newVersion);

	if (versionExists) {
		shell.echo("🛑 version already exists in NPM");
		shell.exit(1);
	}

	// move readme
	await updateReadme(angularVersion);

	// do you want to commit changes?
	await commitChanges({ angularVersion, newVersion });

	// do you want to tag?
	await commitTag({ angularVersion, newVersion, branch: BRANCH });

	// publish package
	if (options.publish || config.npmPublish) {
		await publishNPM(angularVersion);
	}
};

run();