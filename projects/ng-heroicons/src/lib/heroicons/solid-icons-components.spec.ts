/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { render } from '@testing-library/angular';

import * as SOLID_ICONS from './solid';

describe('Solid icons', () => {
  describe.each(Object.entries(SOLID_ICONS))(
    'component: %s',
    (name, iconComponent) => {
      test('should work', async () => {
        const { fixture } = await render(iconComponent);
        expect(fixture.componentInstance).toBeTruthy();
      });

      it('size parameter should work', async () => {
        const { fixture } = await render(iconComponent);

        fixture.componentInstance.size = 99;
        fixture.componentInstance.renderStyle();
        fixture.detectChanges();

        const { width, height } = fixture.nativeElement.querySelector('svg').style;

        expect(width).toBe('99px');
        expect(height).toBe('99px');
      });

      test('color parameter should work', async () => {
        const { fixture } = await render(iconComponent);

        fixture.componentInstance.color = 'red';
        fixture.componentInstance.renderStyle();
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('svg').style.color
        ).toBe('red');
      });
    }
  );
});
