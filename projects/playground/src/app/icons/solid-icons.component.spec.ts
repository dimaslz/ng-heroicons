/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render } from '@testing-library/angular';
import kebabcase from 'lodash.kebabcase';

import { SolidIconsComponent } from './solid-icons.component';

import * as SOLID_ICONS from '../../../../ng-heroicons/src/lib/heroicons/solid';

describe('SolidIconsComponent', () => {
  let fixture: any;
  let container: any;
  beforeEach(async () => {
    jest.useFakeTimers();

    const component = await render(SolidIconsComponent, {
      imports: [
        CommonModule,
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = component.fixture;
    container = component.container;
  });

  describe('By default', () => {
    it('should create the app', () => {
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

		it('should have icons wrapper', () => {
      expect(container.querySelector('.SolidIcons')).toBeTruthy();
    });

		describe('the list of icons', () => {
			test.each(Object.entries(SOLID_ICONS))
				('should have the icon %s', (component) => {
					const componentSelector = kebabcase(component).replace('-component', '')

					expect(
						container.querySelector(`.SolidIcons .IconWrapper ${componentSelector}`),
					).toBeTruthy();
				});
		});
  });

});
