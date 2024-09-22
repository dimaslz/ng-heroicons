import '@testing-library/jest-dom';

import { CommonModule } from '@angular/common';
import {
	MODULE_CONFIG,
	NgHeroiconsModule,
	SOLID_ICONS,
	T_SOLID_ICONS,
} from '@dimaslz/ng-heroicons';
import { render, RenderResult } from '@testing-library/angular';
import { kebabCase } from 'lodash';

import { SolidIconsComponent } from './solid-icons.component';

describe('Solid icons', () => {
	let container: Element;
	let component: RenderResult<SolidIconsComponent>;

	beforeEach(async () => {
		component = await render(SolidIconsComponent, {
			imports: [CommonModule, NgHeroiconsModule],
			providers: [
				{
					provide: MODULE_CONFIG,
					useValue: { default: 'solid', stroke: undefined },
				},
			],
		});

		container = component.container;
	});

	describe.each(Object.entries(SOLID_ICONS))('component: %s', (name) => {
		test(`should be visible`, async () => {
			const icon = kebabCase(name).replace(
				'-solid-icon-component',
				'',
			) as T_SOLID_ICONS;

			expect(component.getByText(icon)).toBeInTheDocument();
			expect(container.querySelector(`#${icon}`)).toBeInTheDocument();
		});
	});
});
