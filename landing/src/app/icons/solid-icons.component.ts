import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SOLID_ICONS, T_SOLID_ICONS } from '@dimaslz/ng-heroicons';
import kebabCase from 'lodash/kebabCase';

@Component({
	selector: 'solid-icons',
	templateUrl: './solid-icons.component.html',
	encapsulation: ViewEncapsulation.None,
})
export class SolidIconsComponent {
	@Input() size = 24;
	@Input() color = '';
	@Input() class = '';

	components = Object.keys(SOLID_ICONS).map((icon) => {
		return kebabCase(icon).replace('-solid-icon-component', '');
	}) as T_SOLID_ICONS[];
}
