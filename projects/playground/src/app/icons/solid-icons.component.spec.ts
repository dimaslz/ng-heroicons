/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { TestBed } from '@angular/core/testing';
import { render } from '@testing-library/angular';

import * as OUTLINE_ICONS from '../../../../ng-heroicons/src/lib/heroicons/outline';

describe('Solid icons', () => {
  describe.each(Object.entries(OUTLINE_ICONS))(
    'component: %s',
    (name, iconComponent) => {
      test('should work', async () => {
        const { fixture } = await render(iconComponent);
        expect(fixture.componentInstance).toBeTruthy();
      });

      test('size parameter should work', async () => {
        await TestBed.configureTestingModule({
          declarations: [iconComponent],
        }).compileComponents();

        const fixture = TestBed.createComponent(iconComponent);
        fixture.componentInstance.size = 99;
        fixture.detectChanges();

        const { width, height } = fixture.nativeElement.querySelector('svg').style;

        expect(width).toBe('99px');
        expect(height).toBe('99px');
      });

      test('color parameter should work', async () => {
        await TestBed.configureTestingModule({
          declarations: [iconComponent],
        }).compileComponents();

        const fixture = TestBed.createComponent(iconComponent);
        fixture.componentInstance.color = 'red';
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('svg').style.color
        ).toBe('red');
      });
    }
  );
});
