const fs = require("fs/promises");
const path = require("path");
const shell = require("shelljs");
const prompts = require('prompts');
const rimraf = require("rimraf");

const root = path.resolve(__dirname);
const here = path.resolve(root);
const heroiconsPath = path.resolve(`${here}/../heroicons`);
const heroiconsGitRepo = "https://github.com/tailwindlabs/heroicons.git";
const config = require("./config.json");

const ANGULAR_VERSION = {
  "v11": "angular-v11",
  "v12": "angular-v12",
  "v13": "angular-v13",
  "v14": "angular-v14",
};

async function updateReadme(version) {
	const mainReadmeFile = await fs.readFile(`${here}/../README.md`);

	const angularDistFolderPath = `${here}/../dist/${version}`;

	const distExists = shell.test("-e", angularDistFolderPath);

	if (!distExists) {
		throw new Error(`Distribution folder for ${version} does not exists`);
	}

	await fs.writeFile(`${angularDistFolderPath}/README.md`, mainReadmeFile);
};

async function updatePackageVersion(angularVersion) {
	try {
		const distPackagePath = `${here}/../dist/${angularVersion}/package.json`;
		const package = await fs.readFile(distPackagePath, { encoding: "utf-8" });
		const packageJSON = JSON.parse(package);
		const versionSplit = packageJSON.version.split(".");
		const major = versionSplit.shift();
		const minor = versionSplit.shift();
		let patch = versionSplit;

		if (/-rc/.test(patch.join("."))) {
			const rcNumber = +(patch.slice(-1)) + 1;
			patch.splice(1, 1, rcNumber);
			patch = patch.join(".");
		} else {
			patch = +(patch) + 1;
		}

		const newVersion = [ major, minor, patch ].join(".");
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
		} else {
			console.log("⚠️ Version is not updated")
		}
	} catch (error) {
		throw new Error("Something happen updating package version")
	}
}

function cloneHeroicons() {
  console.log("👨‍💻  Clonning Heroicons from git");

  if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git repo");
    shell.exit(1);
  } else {
    rimraf.sync(heroiconsPath);
    shell.exec(`git clone ${heroiconsGitRepo} ${heroiconsPath}`);
    shell.exec(`mv ${heroiconsPath}/optimized/24/outline ${heroiconsPath}/`);
    shell.exec(`mv ${heroiconsPath}/optimized/24/solid ${heroiconsPath}/`);
    const heroiconsFolder = require("fs").readdirSync(heroiconsPath);
    heroiconsFolder
      .filter((folder) => !["outline", "solid"].includes(folder))
      .forEach((folder) => {
        rimraf.sync(path.resolve(`${heroiconsPath}/${folder}`));
      });
  }

  console.log("Heroicons repo cloned! \n");
}

function updateComponents(angularVersion) {
	console.log(`\n🕣 Update components in ${ANGULAR_VERSION[angularVersion]}\n`)
	shell.exec(`yarn update:${angularVersion}`);
	console.log(`\n✔ Update components in ${ANGULAR_VERSION[angularVersion]}\n`)
}

function getAngularVersion() {
	const angularVersion = process.argv.length > 2
	? process.argv.slice(-1)[0].split("=")[1]
	: null

	if (!angularVersion) {
		throw new Error("Angular version is mandatory");
	}

	return angularVersion;
}

function buildLib(angularVersion) {
	console.log(`\n🕣 building ${ANGULAR_VERSION[angularVersion]} library\n`)
	shell.exec(`yarn --cwd=packages/${ANGULAR_VERSION[angularVersion]} build lib -c production`)
	console.log(`\n✔ building ${ANGULAR_VERSION[angularVersion]} library\n`)
}

function getCurrentBranch() {
	return shell.exec("git rev-parse --abbrev-ref HEAD");
}

async function run() {
	const angularVersion = getAngularVersion();

  if (angularVersion === "all") {
		return;
	}

	const BRANCH = getCurrentBranch();

	// update heroicons files
	if (shell.test("-e", heroiconsPath)) {
		const { value: canUpdateHeroicons } = await prompts({
			type: 'confirm',
			name: 'value',
			message: 'Heroicons files is already downloaded, do you want to update?',
			initial: true
		});

		if (canUpdateHeroicons) {
			cloneHeroicons()
		}
	}

	// install package
	const { value: canInstallPackage } = await prompts({
		type: 'confirm',
		name: 'value',
		message: `Do you want to install the package for ${angularVersion}?`,
		initial: true
	});

	if (canInstallPackage) {
		shell.exec(`yarn --cwd=packages/${ANGULAR_VERSION[angularVersion]} install`);
	}

	// update components
	updateComponents(angularVersion);

	// build library
	buildLib(angularVersion)

	// copy build to dist folder
	console.log(`\n🕣 copy new build to "/dist/${angularVersion}" package\n`);
	shell.exec(`yarn ${angularVersion}-copy-release`)
	console.log(`\n✔ copy new build to "/dist/${angularVersion}" package\n`);

	// update package.json
	const { value: canUpdatePackageVersion } = await prompts({
		type: 'confirm',
		name: 'value',
		message: 'Do you want to update the package version?',
		initial: true
	});

	if (canUpdatePackageVersion) {
		await updatePackageVersion(angularVersion);
	} else {
		console.log("⚠️ Version is not updated")
	}


	// move readme
	// if (updateReadme) {
	// 	await updateReadme(angularVersion);
	// }

	// shell.cd(`dist/${angularVersion}`);

	// do you want to commit changes?
	const { value: canCommit } = await prompts({
		type: 'confirm',
		name: 'value',
		message: 'Do you want to commit changes?',
		initial: true
	});

	if (canCommit) {
		shell.exec(`git add . && git commit -m "chore(tag): bump version to ${newVersion}"`);
	}

	// do you want to tag?
	const { value: canTag } = await prompts({
		type: 'confirm',
		name: 'value',
		message: 'Do you want to tag the package version?',
		initial: true
	});

	if (canTag) {
		shell.exec(`git add . && git tag ${angularVersion}-${newVersion} && git push -f --tags origin ${BRANCH}`);
	}

	// publish package
	// if (config.npmPublish) {
	// 	const { value: canPublishPackage } = await prompts({
	// 		type: 'confirm',
	// 		name: 'value',
	// 		message: 'Do you want to publish the package?',
	// 		initial: true
	// 	});
	// 	if (canPublishPackage) {
	// 		shell.exec("npm publish --access public");
	// 	}
	// }


};

run();