/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render } from '@testing-library/angular';
import kebabcase from 'lodash.kebabcase';

import * as OUTLINE_ICONS from '../../../../ng-heroicons/src/lib/heroicons/outline';

import {OutlineIconsComponent} from './outline-icons.component';

const ICONS_ARRAY = Object.entries(OUTLINE_ICONS);

describe('Outline icons', () => {
	let fixture: any;
  let container: any;
  beforeEach(async () => {
    jest.useFakeTimers();

    const component = await render(OutlineIconsComponent, {
      imports: [
        CommonModule,
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = component.fixture;
    container = component.container;
	});

	it('should create the app', () => {
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	let componentsCounter = 0;
	it.each(ICONS_ARRAY)(
		'should be component: %s', (name) => {
		const componentTag = kebabcase(name).replace('-component', '');
		expect(container.querySelector(componentTag)).toBeTruthy();

		componentsCounter++;
	});

	it(`should be ${ICONS_ARRAY.length} components`, async () => {
		expect(ICONS_ARRAY.length).toBe(componentsCounter);
	});
});
