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

import { IconWrapperComponent } from '@/components';

import { SolidIconsComponent } from './solid-icons.component';

// TODO: This is a way to rund rundom tests, oround of 50 tests, to avoid Javascript memory leak in Jest
const arrayOfIcons = Object.entries(SOLID_ICONS);
const qtyOfSlice = 50;
const slices = Math.ceil(arrayOfIcons.length / qtyOfSlice);
const sliceIndex = Math.round(Math.random() * (slices - 0) + 0);
const slice = {
	from: sliceIndex * qtyOfSlice,
	to: sliceIndex * qtyOfSlice + qtyOfSlice,
};

describe(`Solid icons (slice: ${slice.from} - ${slice.to}})`, () => {
	let container: Element;
	let component: RenderResult<SolidIconsComponent>;

	beforeEach(async () => {
		component = await render(SolidIconsComponent, {
			imports: [CommonModule, NgHeroiconsModule, IconWrapperComponent],
			providers: [
				{
					provide: MODULE_CONFIG,
					useValue: { default: 'solid', stroke: undefined },
				},
			],
		});

		container = component.container;
	});

	describe.each(arrayOfIcons.slice(slice.from, slice.to))(
		`component: %s`,
		(name) => {
			test(`should be visible`, async () => {
				const icon = kebabCase(name).replace(
					'-solid-icon-component',
					'',
				) as T_SOLID_ICONS;

				expect(component.getByText(icon)).toBeInTheDocument();
				expect(container.querySelector(`#${icon}`)).toBeInTheDocument();
			});
		},
	);
});
