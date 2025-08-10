import { Component } from '@angular/core';

import kebabCase from 'lodash.kebabcase';

import {
  SOLID_ICONS,
  T_SOLID_ICONS,
  OUTLINE_ICONS,
  T_OUTLINE_ICONS,
  NgHeroiconsModule,
} from '../../../lib/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      NgHeroiconsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'playground';

  outlineComponents = Object.keys(OUTLINE_ICONS).map((icon) => {
      return kebabCase(icon).replace("-outline-icon-component", "");
    }) as T_OUTLINE_ICONS[];

  solidComponents = Object.keys(SOLID_ICONS).map((icon) => {
    return kebabCase(icon).replace("-solid-icon-component", "");
  }) as T_SOLID_ICONS[];
}
