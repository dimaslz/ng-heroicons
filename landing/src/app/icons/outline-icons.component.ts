import { Component, Input, ViewEncapsulation } from '@angular/core';
import { OUTLINE_ICONS, T_OUTLINE_ICONS } from '@dimaslz/ng-heroicons';
import kebabCase from 'lodash/kebabCase';

@Component({
	selector: 'outline-icons',
	templateUrl: './outline-icons.component.html',
	encapsulation: ViewEncapsulation.None,
})
export class OutlineIconsComponent {
	@Input() size = 24;
	@Input() color = '';
	@Input() stroke = 1;
	@Input() class = '';

	components = Object.keys(OUTLINE_ICONS).map((icon) => {
		return kebabCase(icon).replace('-outline-icon-component', '');
	}) as T_OUTLINE_ICONS[];

	constructor() {}
}
