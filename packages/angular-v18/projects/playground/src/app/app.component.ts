import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import kebabCase from 'lodash/kebabCase';

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
    RouterOutlet,
    NgHeroiconsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'playground';

  solidComponents = Object.keys(SOLID_ICONS).map((icon) => {
    return kebabCase(icon).replace("-solid-icon-component", "");
  }) as T_SOLID_ICONS[];

  outlineComponents = Object.keys(OUTLINE_ICONS).map((icon) => {
		return kebabCase(icon).replace("-outline-icon-component", "");
	}) as T_OUTLINE_ICONS[];
}
