import '@testing-library/jest-dom';

import { CommonModule } from '@angular/common';
import { render, RenderResult } from '@testing-library/angular';
import { kebabCase } from 'lodash';

import { SolidIconsComponent } from './solid-icons.component';
import { NgHeroiconsModule, SOLID_ICONS, T_SOLID_ICONS } from '@dimaslz/ng-heroicons';

describe('Solid icons', () => {
	let container: Element;
	let component: RenderResult<SolidIconsComponent>;

	beforeEach(async () => {
		(component = await render(SolidIconsComponent, {
			imports: [
				CommonModule,
				NgHeroiconsModule
			],
		}));

		container = component.container;
	});

	describe.each(Object.entries(SOLID_ICONS))(
		'component: %s',
		(name) => {
			test(`should be visible`, async () => {
				const icon = kebabCase(name).replace("-solid-icon-component", "") as T_SOLID_ICONS;

				expect(component.getByText(icon)).toBeInTheDocument();
				expect(container.querySelector(`#${icon}`)).toBeInTheDocument();
			});
		});
});
