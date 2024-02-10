import fs from "fs/promises";
import path from "path";
import camelcase from "camelcase";
import mkdirp from "mkdirp";
import rimraf from "rimraf";
import shell from "shelljs";
import kebabCase from "lodash.kebabcase";
import commandLineArgs from "command-line-args";
import prompts from "prompts";

const { pathname: __dirname } = new URL('.', import.meta.url)

const root = path.resolve(__dirname + "/..");
const projectsPath = path.resolve(`${root}/assets`);
const destHeroicons = `${projectsPath}`;
const here = path.resolve(`${root}/generator`);
const heroiconsPath = path.resolve(`${root}/heroicons`);
const heroiconsGitRepo = "https://github.com/tailwindlabs/heroicons.git";
const originalHeroiconsPath = path.resolve(`${root}/heroicons`);
const TYPES = ["outline", "solid"];
const VERSIONS = ["v11", "v12", "v13", "v14", "v15", "v16", "v17"];
const ANGULAR_VERSION = VERSIONS.map((version) => ({
  [version]: `angular-${version}`,
})).reduce((a, b) => ({ ...a, ...b }), {});

async function prompt(props, onCancel = null) {
	return await prompts(props, {
		onCancel: onCancel || (() => {
			console.log("\n🛑 Command release has been canceled.\n")

			shell.exit(1);
		})
	})
}

const optionDefinitions = [
  { name: 'version', alias: 'v', type: String },
  { name: 'clone', alias: 'c', type: Boolean },
  { name: 'limit', alias: 'l', type: Number },
]
const options = commandLineArgs(optionDefinitions)

let iconComponentsWrapperTpl = "";

async function getIconTpl() {
  return await fs.readFile(`${here}/icon-wrapper.tpl.txt`, "utf8");
}

async function getComponentTpl() {
  return await fs.readFile(
    `${here}/icons-list-component.tpl.txt`,
    "utf8"
  );
}

async function cloneHeroicons() {
  console.log("👨‍💻  Clonning Heroicons from git");

  if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git repo");
    shell.exit(1);
  } else {
    rimraf.sync(heroiconsPath);
    shell.exec(`git clone ${heroiconsGitRepo} ${originalHeroiconsPath}`);
    shell.exec(`mv ${heroiconsPath}/optimized/24/outline ${heroiconsPath}/`);
    shell.exec(`mv ${heroiconsPath}/optimized/24/solid ${heroiconsPath}/`);
    const heroiconsFolder = await fs.readdir(heroiconsPath);
    heroiconsFolder
      .filter((folder) => !["outline", "solid"].includes(folder))
      .forEach((folder) => {
        rimraf.sync(path.resolve(`${heroiconsPath}/${folder}`));
      });
  }

  console.log("Heroicons repo cloned! \n");
}

async function SVGToAngular({ selector, template, varName, className, type }) {
  let componentTpl = await fs.readFile(
    `${here}/${type}-component.tpl.txt`,
    "utf8"
  );

  componentTpl = componentTpl
    .replace("{{template}}", template)
    .replace("{{className}}", className)
    .replace(/<svg/, '<svg [attr.style]="style" [attr.class]="svgClass"')
    .replace("{{selector}}", selector);

  if (type === "outline") {
    componentTpl = componentTpl.replace(/stroke-width="\d+"/g, "");
  }

  return componentTpl;
}

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function setIconsInPlayground({ icons, type, iconTpl }) {
  const iconComponents = icons
    .filter((i) => i)
    .map((icon) => {
      return iconTpl
        .replace(
          "{{componentIcon}}",
          `<${icon.selector} [size]="size" [color]="color" [ngClass]="class" ${
            type === "outline" ? '[stroke]="stroke"' : ""
          }></${icon.selector}>`
        )
        .replace(
          "{{iconName}}",
          icon.selector
            .replace(new RegExp(`${type}[^$]+$`), " ")
            .replace(/-/g, " ")
            .trim()
        )
        .replace(
          "{{iconId}}",
          icon.selector
            .replace(new RegExp(`${type}[^$]+$`), " ")
            .trim()
            .replace(/^-|-$/g, "")
        );
    })
    .join("\n\n");

  const wrapperTpl = iconComponentsWrapperTpl
    .replace(/\{\{type\}\}/g, jsUcfirst(type))
    .replace(/\{\{icons\}\}/g, iconComponents);

  const iconComponentsPath = `${projectsPath}/playground/src/app/icons/${type}-icons.component.html`;
  rimraf.sync(iconComponentsPath);

  return fs.writeFile(iconComponentsPath, wrapperTpl);
}

async function writeFiles({ files, type }) {
  const exportStatements = files
    .map(({ filename }) => {
      return `export * from './${filename.replace(".ts", "")}';`;
    })
    .join("\n");

  await fs.writeFile(
    `${destHeroicons}/components/${type}/index.ts`,
    exportStatements
  );

  return files.map(({ className, filename, ...rest }) => {
    return {
      import: `import { ${className} } from './heroicons/${type}/${filename.replace(
        ".ts",
        ""
      )}';`,
      component: filename.replace(".ts", ""),
      className,
      filename,
      ...rest,
    };
  });
}

async function compressSVG(files, type) {
  console.log("🏗  Compress SVG files...");

  const icons = files
    .filter((filename) => !/Ds_Store/gi.test(filename))
    .map((filename) => {
      const filePath = `${heroiconsPath}/${type}/${filename}`;

      shell.exec(
        `./node_modules/.bin/svgo --config svgo.config.js ${filePath} -o ${filePath} >> /dev/null`
      );

      return {
        path: filePath,
        filename,
        type,
      };
    });

  console.log(`✅  ${type} SVG icons compressed`);

  return icons;
}

function getFilesData(iconFiles) {
  return iconFiles.map(({ path, filename, type }) => {
    const className = `${camelcase(filename.replace(/\.svg$/, `-${type}`), {
      pascalCase: true,
    })}IconComponent`;

    return {
      className: className,
      selector: `${filename.replace(/\.svg$/, "")}-${type}-icon`,
      filename: className.replace("Component", ".component.ts"),
      type,
      path,
    };
  });
}

async function getSVGContent(iconFilesData) {
  return await Promise.all(
    iconFilesData.map(async ({ path, selector, ...all }) => ({
      template: await fs.readFile(path, "utf8"),
      varName: `${camelcase(selector)}Svg`,
      selector: kebabCase(selector),
      ...all,
    }))
  );
}

async function getAngularComponent(contentsIcon) {
  return await Promise.all(
    contentsIcon.map(
      async ({ selector, template, className, type, varName, ...rest }) => {
        const svgToAngularData = { selector, template, className, type, varName };
        return {
          component: await SVGToAngular(svgToAngularData),
          ...svgToAngularData,
          ...rest,
        };
      }
    )
  );
}

async function writeFileIcons(angularComponents) {
  await Promise.all(
    angularComponents.map(({ component, filename, type }) => {
      return fs.writeFile(`${destHeroicons}/components/${type}/${filename}`, component);
    })
  );
}

async function generateModule(angularComponents, type) {
  let moduleComponents = [];
  let moduleImports = [];

  const contents = await writeFiles({
    files: angularComponents
      .map(({ className, filename, ...rest }) => ({
        filename,
        className,
        ...rest,
      })),
    type,
  });

  // await setIconsInPlayground({
  //   icons: contents,
  //   type,
  //   iconTpl,
  // });

  moduleComponents = moduleComponents.concat(
    contents.map((c) => c.className)
  );
  moduleImports = moduleImports.concat(
    contents
      .map(
        (c) =>
          `import { ${c.className} } from './${c.filename.replace(
            ".ts",
            ""
          )}';`
      )
  );

  await fs
    .readFile(`${here}/icon-type.module.tpl.txt`, "utf8")
    .then((file) => {
      return file
        .replace("{{componentsImports}}", moduleImports.join("\n"))
        .replace(/\{\{components\}\}/g, moduleComponents.join(",\n  "))
        .replace(/\{\{type\}\}/g, jsUcfirst(type));
    })
    .then((content) => {
      return fs.writeFile(
        `${destHeroicons}/components/${type}/module.ts`,
        content
      );
    });
}

async function generatePlayground(components, version) {
  let iconsListComponentsTpl = await fs
    .readFile(`${here}/icons-list-components.tpl.txt`, "utf8")

  const iconsListTagNames = {}

  for (const component of components) {
    if (component.type in iconsListTagNames) {
      iconsListTagNames[component.type].push(`<${component.selector}></${component.selector}>`)
    } else {
      iconsListTagNames[component.type] = [`<${component.selector}></${component.selector}>`]
    }
  }

  iconsListComponentsTpl = iconsListComponentsTpl
    .replace("{{version}}", version)
    .replace("{{solid-icons}}", iconsListTagNames['solid'].join("\n    "))
    .replace("{{outline-icons}}", iconsListTagNames['outline'].join("\n    "))

  mkdirp.sync(`${destHeroicons}/${version}/`);
  await fs.writeFile(`${destHeroicons}/${version}/app.component.html`, iconsListComponentsTpl)
}

async function moveCommonCompoents() {
  // outline base component
  const baseOutlineComponent = await fs.readFile(`${here}/base-outline-icon.component.ts.tpl`, "utf8")

  mkdirp.sync(`${destHeroicons}/components/common`);
  await fs.writeFile(`${destHeroicons}/components/common/base-outline-icon.component.ts`, baseOutlineComponent)

  // solid base component
  const baseSolidComponent = await fs.readFile(`${here}/base-solid-icon.component.ts.tpl`, "utf8")

  mkdirp.sync(`${destHeroicons}/components/common`);
  await fs.writeFile(`${destHeroicons}/components/common/base-solid-icon.component.ts`, baseSolidComponent)
}

async function run() {
  if (!shell.which("git")) {
		shell.echo("Sorry, this script requires git repo");
		shell.exit(1);
	}

  const angularVersion = options.version || null;

  let versions;
  if (!angularVersion || angularVersion === "all") {
    versions = VERSIONS;
  } else {
    versions = [angularVersion];
  }

  if (options.clone) {
    await cloneHeroicons();
  } else if (!shell.test("-e", heroiconsPath)) {
    console.log("Heroicons folder does not exists. Cloning repo...")
    await cloneHeroicons();
  }

  rimraf.sync(`${destHeroicons}/components`);
  mkdirp.sync(`${destHeroicons}/components`);

  let allComponents = []
  for (const type of TYPES) {
    mkdirp.sync(`${destHeroicons}/components/${type}`);

    let files;
    if (options.limit) {
      files = (await fs.readdir(`${heroiconsPath}/${type}`)).slice(0, options.limit);
    } else {
      files = (await fs.readdir(`${heroiconsPath}/${type}`));
    }

    const iconFiles = await compressSVG(files, type)

    const iconFilesData = getFilesData(iconFiles);

    const contentsIcon = await getSVGContent(iconFilesData);

    const angularComponents = await getAngularComponent(contentsIcon);

    console.log("👷 creating components...");
    await writeFileIcons(angularComponents);

    await generateModule(angularComponents, type);

    await moveCommonCompoents();

    allComponents = allComponents.concat(angularComponents);
  }

  for (const version of versions) {
    shell.exec(`yarn update:${version}`);

    await generatePlayground(allComponents, version);
    const appContent = await fs.readFile(
      `${root}/assets/${version}/app.component.html`,
      { encoding: "utf-8" }
    );
    const playgroundPath = `${root}/packages/${ANGULAR_VERSION[version]}/projects/playground/src/app/app.component.html`;
    await fs.writeFile(playgroundPath, appContent)
  }

  return;
}

try {
  run();
} catch (error) {
  console.error(error.message)
}
