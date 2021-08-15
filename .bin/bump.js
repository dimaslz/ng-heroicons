const fs = require('fs');
const path = require('path');

const mainPackage = require(path.resolve(`${__dirname}/../package.json`));
const libPackage = require(path.resolve(`${__dirname}/../projects/ng-heroicons/dist/package.json`));

libPackage.version = mainPackage.version

console.log("mainPackage", mainPackage.version);
console.log("libPackage", libPackage.version);

fs.writeFileSync(
	path.resolve(
		`${__dirname}/../projects/ng-heroicons/dist/package.json`),
		JSON.stringify(libPackage, null, 2)
);

console.log("DONE")