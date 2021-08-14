const fs = require('fs').promises;
const path = require('path');
const dedent = require('dedent');
const camelcase = require('camelcase');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const kebabcase = require('lodash.kebabcase');
const shell = require('shelljs');

const root = path.resolve(__dirname + '/..');
const projectsPath = path.resolve(`${root}/projects`);
const here = path.resolve(`${root}/generator`);
const heroiconsPath = path.resolve(`${root}/heroicons`);
const heroiconsGitRepo = 'https://github.com/tailwindlabs/heroicons.git';

function cloneHeroicons() {

  console.log('👨‍💻  Clonning Heroicons from git');
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git repo');
    shell.exit(1);
  } else {
    rimraf.sync(heroiconsPath);
    shell.exec(`git clone ${heroiconsGitRepo} ${path.resolve(`${__dirname}/../heroicons`)}`);
    shell.exec(`mv ${heroiconsPath}/src/outline ${heroiconsPath}/`);
    shell.exec(`mv ${heroiconsPath}/src/solid ${heroiconsPath}/`);
    const heroiconsFolder = require('fs').readdirSync(heroiconsPath);
    heroiconsFolder.filter(folder => !['outline', 'solid'].includes(folder)).forEach(folder => {
      rimraf.sync(path.resolve(`${heroiconsPath}/${folder}`));
    });
  }

  console.log("Heroicons repo cloned! \n");
}

async function SVGToAngular({
  selectorName,
  template,
  className,
  type,
}) {
  const componentTpl = await fs.readFile(`${here}/${type}-component.tpl.txt`, 'utf8');

  return componentTpl
    .replace('{{template}}', dedent(template))
    .replace('{{className}}', className)
    .replace(/stroke-width="\d+"/g, '')
    .replace(/stroke="#.*?"/g, 'stroke="currentColor"')
    .replace(/fill="#.*?"/g, 'fill="currentColor"')
    .replace(/width="\d+" height="\d+"/, '[style]="style" [ngClass]="class"')
    .replace('{{selectorName}}', selectorName);
}


function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function generateIconsComponent(icons, type) {
  const iconTpl = await fs.readFile(`${here}/icon-wrapper.tpl.txt`, 'utf8');
  const iconComponents = icons.filter(i => i).map(icon => {
    return iconTpl
      .replace('{{componentIcon}}', `<${kebabcase(icon)}-icon [size]="size" [color]="color" [class]="class" ${type === 'outline' ? '[stroke]="stroke"' : ""}></${kebabcase(icon)}-icon>`)
      .replace('{{iconName}}', kebabcase(icon).replace(type, ' ').replace(/-/g, ' ').trim())
      .replace('{{iconId}}', kebabcase(icon).replace(type, ' ').trim().replace(/^-|-$/g, ''));
  }).join('\n\n');

  let iconComponentsWrapperTpl = await fs.readFile(`${here}/icons-list-component.tpl.txt`, 'utf8');
  iconComponentsWrapperTpl = iconComponentsWrapperTpl
    .replace(/\{\{type\}\}/g, jsUcfirst(type))
    .replace(/\{\{icons\}\}/g, iconComponents);
  const iconComponentsPath = `${projectsPath}/playground/src/app/icons/${type}-icons.component.html`;
  rimraf.sync(iconComponentsPath);
  return fs.writeFile(iconComponentsPath, iconComponentsWrapperTpl);
}

async function writeFiles({ fileNames, type }) {
  const exportStatements = fileNames
    .map((fileName) => {
      const componentName = fileName.replace(/\.ts$/, '');
      return `export * from './${componentName}';`;
    })
    .join('\n')

  await fs.writeFile(`${projectsPath}/ng-heroicons/src/lib/heroicons/${type}/index.ts`, exportStatements);

  const moduleImports = fileNames
    .map((fileName) => {
      const componentName = fileName.replace(/\.ts$/, '');
      return `import { ${camelcase(componentName, { pascalCase: true })} } from './heroicons/${type}/${componentName}';`;
    })
    .join('\n');

  const moduleComponents = fileNames
    .map((fileName) => {
      const componentName = fileName.replace(/\.ts$/, '');
      return `${camelcase(componentName, { pascalCase: true })},`;
    })
    .join('\n');

  return {
    moduleImports,
    moduleComponents,
  };
}

cloneHeroicons();

console.log('🏗  Building NgHeroicons components...')
Promise.all(['outline', 'solid'].map(type => {
  console.log(`Building ${type} icons`);

  const destHeroicons = `${projectsPath}/ng-heroicons/src/lib/heroicons/${type}`;
  rimraf.sync(destHeroicons);
  mkdirp.sync(destHeroicons);
  return fs.readdir(`${heroiconsPath}/${type}`).then((files) => {
    return Promise.all(
      files
      .filter((file) => !/Ds_Store/gi.test(file))
      .map((file) => {
        return fs
          .readFile(`${heroiconsPath}/${type}/${file}`, 'utf8')
          .then(async (template) => {
            return await SVGToAngular({
              selectorName: `${file.replace(/\.svg$/, '')}-${type}-icon`,
              template,
              className: `${camelcase(file.replace(/\.svg$/, `-${type}`), { pascalCase: true })}Component`,
              type,
            });
          })
          .then((component) => {
            const fileName = `${camelcase(file.replace(/\.svg$/, `-${type}`), { pascalCase: true })}.component.ts`;
            return fs.writeFile(`${destHeroicons}/${fileName}`, component).then(() => fileName);
          })
      })
    );
  });
})).then(async ([outlineComponents, solidComponents]) => {
  const outlineContent = await writeFiles({
    fileNames: outlineComponents,
    type: 'outline'
  });
  const solidContent = await writeFiles({
    fileNames: solidComponents,
    type: 'solid'
  });

  const moduleImports = `${outlineContent.moduleImports}\n${solidContent.moduleImports}`;
  const moduleComponents = `${outlineContent.moduleComponents}\n${solidContent.moduleComponents}`;

  await generateIconsComponent(outlineContent.moduleComponents.split(',').map(c => c.replace('Component', '').trim()), 'outline');
  await generateIconsComponent(solidContent.moduleComponents.split(',').map(c => c.replace('Component', '').trim()), 'solid');

  return await fs.readFile(`${here}/ng-heroicons.module.tpl.txt`, 'utf8')
    .then(file => {
      return file
        .replace('{{componentsImports}}', moduleImports)
        .replace(/\{\{components\}\}/g, moduleComponents);
    }).then(content => {
      return fs.writeFile(`${projectsPath}/ng-heroicons/src/lib/ng-heroicons.module.ts`, content);
    });
});