# NgHeroicons

NgHeroicons just it is my solution to use [Heroicons](https://heroicons.com) in your Angular projects. I hope that could be useful.

If you want to know how is working Angular CLI follow this [https://cli.angular.io/](https://cli.angular.io/).

Live demo: [https://ng-heroicons.vercel.com](https://ng-heroicons.vercel.com)

## How to install in your project
`$ yarn add @dimaslz/ng-heroicons`

`$ npm install @dimaslz/ng-heroicons`

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
Go to [https://ng-heroicons.vercel.com](https://ng-heroicons.vercel.com) and get the name of the icon and use in your tag html following suffix `{outline|solid}-icon`. For example: `academic cap` should be `<academic-cap-outline-icon></academic-cap-outline-icon>` for outline or `<academic-cap-solid-icon></academic-cap-solid-icon>` for solid icons.

You can use your style in line, css or just pass color and size.
```html
<!-- using style in line -->
<academic-cap-outline-icon style="color: red"></academic-cap-outline-icon>
<academic-cap-outline-icon style="color: red"></academic-cap-outline-icon>

<!-- using css classes -->
<academic-cap-outline-icon class="text-red-400"></academic-cap-outline-icon>

<!-- pass color or size -->
<academic-cap-outline-icon size="48" color="red"></academic-cap-outline-icon>

```

## Development server

### Run playground
`$ yarn start playground`

### Regenerate components
`$ yarn generate` This will generate the new angular components in `projects/ng-heroicons/src/lib/heroicons/outline` and `projects/ng-heroicons/src/lib/heroicons/solid`, and the templated in playground as `projects/playground/src/app/icons/outline-icons.html` adn `projects/playground/src/app/icons/solid-icons.html`

## Build heroicons
`$ yarn build --prod ng-heroicons`

## TODO
- [ ] Copy component tag into clipboard on click in an icon from the list
- [ ] Search input


## Author
Dimas López · FullStack Software development

🐦  [https://twitter.com/dimaslz](https://twitter.com/dimaslz)

👨🏻‍💻  [https://dimaslz.dev](https://dimaslz.dev)

📄  [https://www.linkedin.com/in/dimaslopezzurita](https://www.linkedin.com/in/dimaslopezzurita)