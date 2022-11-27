# @dimaslz/ng-heroicons
<img src='https://track.dimaslz.dev/track?name=github&url=https://ng-heroicons.dimaslz.dev&domain=ng-heroicons.dimaslz.dev&props={"readme":"main"}' width="0px" height="0px" />
NgHeroicons just it is a Angular components to use [Heroicons](https://heroicons.com) in your projects. I hope that could be useful.

If you want to know how is working Angular CLI follow this [https://cli.angular.io/](https://cli.angular.io/).

Live demo: [https://ng-heroicons.dimaslz.dev](https://ng-heroicons.dimaslz.dev)

## How to install in your project
This package has compatibility with Angular version from 11 to 14.

| angular version | package version ||
|-|-|-|
| 11.x.x | `^11` ||
| 12.x.x | `^12` ||
| 13.x.x | `^13` ||
| 14.x.x | `^14` | default |

`$ yarn add @dimaslz/ng-heroicons@^XX`

`$ npm install @dimaslz/ng-heroicons@^XX`


```ts
// app.module.ts
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";
// ...

@NgModule({
  // ...
  imports: [
    CommonModule,
    NgHeroiconsModule,
  ],
  // ...
})

//...
```

## How to use
Go to [https://ng-heroicons.dimaslz.dev](https://ng-heroicons.dimaslz.dev) and get the name of the icon and use in your tag html following suffix `{outline|solid}-icon`. For example: `academic cap` should be `<academic-cap-outline-icon></academic-cap-outline-icon>` for outline or `<academic-cap-solid-icon></academic-cap-solid-icon>` for solid icons.

You can use your style in line, css or just pass color and size.
```html
<!-- using style in line (style for color will affect to svg) -->
<academic-cap-outline-icon style="color: red;"></academic-cap-outline-icon>

<!-- using css classes (class for color will affect to svg) -->
<academic-cap-outline-icon class="text-red-400"></academic-cap-outline-icon>

<!-- pass color or size -->
<academic-cap-outline-icon size="48" color="red"></academic-cap-outline-icon>

<!-- To apply specific style to the SVG, use `svgStyle` -->
<academic-cap-outline-icon svgStyle="color: red;"></academic-cap-outline-icon>

<!-- To apply specific css to the SVG, use `svgClass` -->
<academic-cap-outline-icon svgClass="your-class-for-the-svg"></academic-cap-outline-icon>
```

## Development
This is a monorepo to build the icon components for multiple Angular versions. To avoid conflics with compatibility from Angular 11 to 14, we are not using `workspaces`, only separated folder per Angular setup.

### Landing
Landing page is the common landing https://ng-heroicons.dimaslz.dev/ which is using the last Angular version.

- Build the Angular 14 lib: `$ yarn --cwd=packages/angular-v14 build lib -c production`
- Refresh the distribution content in `dist/v14`: `$ yarn v14-copy-release`
- Install Landing packages: `$ yarn --cwd=landing install`
- Run project: `$ yarn --cwd=landing start`
- Join the page in http://localhost:4200

### Build library per version
Keep in mind, first you should build the `lib` package

| angular version | command |
|-|-|
| angular 11 | `$ yarn --cwd=packages/angular-v11 build lib -c production` |
| angular 12 | `$ yarn --cwd=packages/angular-v12 build lib -c production` |
| angular 13 | `$ yarn --cwd=packages/angular-v13 build lib -c production` |
| angular 14 | `$ yarn --cwd=packages/angular-v14 build lib -c production` |

### Run playground per version
Keep in mind, first you should build the `lib` package. This playgrounds does not have any special, is a demo page to test the library is working as expected.

| angular version | command |
|-|-|
| angular 11 | `$ yarn --cwd=packages/angular-v11 start playground` |
| angular 12 | `$ yarn --cwd=packages/angular-v12 start playground` |
| angular 13 | `$ yarn --cwd=packages/angular-v13 start playground` |
| angular 14 | `$ yarn --cwd=packages/angular-v14 start playground` |

### Regenerate components
`$ yarn generate` This will generate the new angular components in `projects/ng-heroicons/src/lib/heroicons/outline` and `projects/ng-heroicons/src/lib/heroicons/solid`, and the templated in playground as `projects/playground/src/app/icons/outline-icons.html` and `projects/playground/src/app/icons/solid-icons.html`

## Build heroicons
`$ yarn build --prod ng-heroicons`

## Author
```js
{
	name: "Dimas López",
	role: "FullStack Software development",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita"
}
```

## My other projects
- https://randomdata.loremapi.io: API mock data (no open source)
- https://icon-lib-builder.dimaslz.dev: SVG to Framework component (open source soon)
- https://ng-heroicons.dimaslz.dev: Use Heroicons.com in you Angular projects (open source)
- https://react-dynamic-classname.dimaslz.dev: Use dynamic class in React as Vue (open source)