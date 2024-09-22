import '@testing-library/jest-dom';

import { CommonModule } from '@angular/common';
import {
	MODULE_CONFIG,
	NgHeroiconsModule,
	OUTLINE_ICONS,
	T_OUTLINE_ICONS,
} from '@dimaslz/ng-heroicons';
import { render, RenderResult } from '@testing-library/angular';
import { kebabCase } from 'lodash';

import { OutlineIconsComponent } from './outline-icons.component';

describe('Outline icons', () => {
	let container: Element;
	let component: RenderResult<OutlineIconsComponent>;

	beforeEach(async () => {
		component = await render(OutlineIconsComponent, {
			imports: [CommonModule, NgHeroiconsModule],
			providers: [
				{
					provide: MODULE_CONFIG,
					useValue: { default: 'outline', stroke: 1 },
				},
			],
		});

		container = component.container;
	});

	describe.each(Object.entries(OUTLINE_ICONS))('component: %s', (name) => {
		test(`should be visible`, async () => {
			const icon = kebabCase(name).replace(
				'-outline-icon-component',
				'',
			) as T_OUTLINE_ICONS;

			expect(component.getByText(icon)).toBeInTheDocument();
			expect(container.querySelector(`#${icon}`)).toBeInTheDocument();
		});
	});
});
