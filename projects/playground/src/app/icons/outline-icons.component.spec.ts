/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render } from '@testing-library/angular';
import kebabcase from 'lodash.kebabcase';

import { OutlineIconsComponent } from './outline-icons.component';

import * as OUTLINE_ICONS from '../../../../ng-heroicons/src/lib/heroicons/outline';

describe('OutlineIconsComponent', () => {
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

  describe('By default', () => {
    it('should create the app', () => {
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

		it('should have icons wrapper', () => {
      expect(container.querySelector('.OutlineIcons')).toBeTruthy();
    });

		describe('the list of icons', () => {
			test.each(Object.entries(OUTLINE_ICONS))
				('should have the icon %s', (component) => {
					const componentSelector = kebabcase(component).replace('-component', '')

					expect(
						container.querySelector(`.OutlineIcons .IconWrapper ${componentSelector}`),
					).toBeTruthy();
				});
		});
  });

});
