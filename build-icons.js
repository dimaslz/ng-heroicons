const fs = require('fs').promises;
const dedent = require('dedent');
const camelcase = require('camelcase');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const kebabcase = require('lodash.kebabcase');

async function SVGToAngular({
  selectorName,
  template,
  className,
  type,
}) {
  const componentTpl = await fs.readFile(`${type}-component.tpl.txt`, 'utf8');
  
  return componentTpl
    .replace('{{template}}', dedent(template))
    .replace('{{className}}', className)
    .replace(/stroke-width="\d+"/g, '')
    .replace(/stroke="#.*?"/g, 'stroke="currentColor"')
    .replace(/fill="#.*?"/g, 'fill="currentColor"')
    .replace(/width="\d+" height="\d+"/, '[style]="style"')
    .replace('{{selectorName}}', selectorName);
}


function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function generateIconsComponent(icons, type) {
  const iconTpl = await fs.readFile(`icon-wrapper.tpl.txt`, 'utf8');
  const iconComponents = icons.filter(i => i).map(icon => {
    return iconTpl
      .replace('{{componentIcon}}', `<${kebabcase(icon)}-icon [size]="size" [color]="color" [class]="class" ${type === 'outline' ? '[stroke]="stroke"' : ""}></${kebabcase(icon)}-icon>`)
      .replace('{{iconName}}', kebabcase(icon).replace(type, ' ').replace(/-/g, ' '));
  }).join('\n\n');

  let iconComponentsWrapperTpl = await fs.readFile(`icons-list-component.tpl.txt`, 'utf8');
  iconComponentsWrapperTpl = iconComponentsWrapperTpl
    .replace(/\{\{type\}\}/g, jsUcfirst(type))
    .replace(/\{\{icons\}\}/g, iconComponents);
  const iconComponentsPath = `./projects/playground/src/app/icons/${type}-icons.html`;
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

  await fs.writeFile(`./projects/ng-heroicons/src/lib/heroicons/${type}/index.ts`, exportStatements);

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

console.log('Building NgHeroicons components...')
Promise.all(['outline', 'solid'].map(type => {
  console.log(`Building ${type} icons`);

  const destHeroicons = `./projects/ng-heroicons/src/lib/heroicons/${type}`;
  rimraf.sync(destHeroicons);
  mkdirp.sync(destHeroicons);
  const heroiconsPath = `./heroicons/src/${type}`;
  return fs.readdir(heroiconsPath).then((files) => {
    return Promise.all(
      files
      .filter((file) => !/Ds_Store/gi.test(file))
      .map((file) => {
        return fs
          .readFile(`${heroiconsPath}/${file}`, 'utf8')
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

  return await fs.readFile(`./ng-heroicons.module.tpl.txt`, 'utf8')
    .then(file => {
      return file
        .replace('{{componentsImports}}', moduleImports)
        .replace(/\{\{components\}\}/g, moduleComponents);
    }).then(content => {
      return fs.writeFile('./projects/ng-heroicons/src/lib/ng-heroicons.module.ts', content);
    });
});