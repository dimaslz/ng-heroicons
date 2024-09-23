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

import { IconWrapperComponent } from '@/components';

import { OutlineIconsComponent } from './outline-icons.component';

// TODO: This is a way to rund rundom tests, oround of 50 tests, to avoid Javascript memory leak in Jest
const arrayOfIcons = Object.entries(OUTLINE_ICONS);
const qtyOfSlice = 50;
const slices = Math.ceil(arrayOfIcons.length / qtyOfSlice);
const sliceIndex = Math.round(Math.random() * (slices - 0) + 0);
const slice = {
	from: sliceIndex * qtyOfSlice,
	to: sliceIndex * qtyOfSlice + qtyOfSlice,
};

describe(`Outline icons (slice: ${slice.from} - ${slice.to}})`, () => {
	let container: Element;
	let component: RenderResult<OutlineIconsComponent>;

	beforeEach(async () => {
		component = await render(OutlineIconsComponent, {
			imports: [CommonModule, NgHeroiconsModule, IconWrapperComponent],
			providers: [
				{
					provide: MODULE_CONFIG,
					useValue: { default: 'outline', stroke: 1 },
				},
			],
		});

		container = component.container;
	});

	describe.each(arrayOfIcons.slice(slice.from, slice.to))(
		'component: %s',
		(name) => {
			test(`should be visible`, async () => {
				const icon = kebabCase(name).replace(
					'-outline-icon-component',
					'',
				) as T_OUTLINE_ICONS;

				expect(component.getByText(icon)).toBeInTheDocument();
				expect(container.querySelector(`#${icon}`)).toBeInTheDocument();
			});
		},
	);
});
