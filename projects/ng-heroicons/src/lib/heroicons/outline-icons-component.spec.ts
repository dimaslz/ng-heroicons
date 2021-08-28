/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { render } from '@testing-library/angular';

import * as OUTLINE_ICONS from './outline';

describe('Outline icons', () => {
  describe.each(Object.entries(OUTLINE_ICONS))(
    'component: %s',
    (name, iconComponent) => {
      it('should work', async () => {
        const { fixture } = await render(iconComponent);
        expect(fixture.componentInstance).toBeTruthy();
      });

      it('default style', async () => {
        const { fixture } = await render(iconComponent);
        fixture.detectChanges();

        const { width, height, strokeWidth } = fixture.nativeElement.querySelector('svg').style;

        expect(width).toBe('24px');
        expect(height).toBe('24px');
        expect(strokeWidth).toBe('1px');
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

      it('color parameter should work', async () => {
        const { fixture } = await render(iconComponent);

        fixture.componentInstance.color = 'red';
        fixture.componentInstance.renderStyle();
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('svg').style.color
        ).toBe('red');
      });

      it('stroke parameter should work', async () => {
        const { fixture } = await render(iconComponent);

        fixture.componentInstance.stroke = 99;
        fixture.componentInstance.renderStyle();
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('svg').style.strokeWidth
        ).toBe('99px');
      });

      it('svgClass parameter should work', async () => {
        const { fixture } = await render(iconComponent);

        fixture.componentInstance.svgClass = "my-class";
        fixture.componentInstance.renderStyle();
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('svg.my-class')
        ).toBeTruthy();
      });

      it('svgStyle parameter should work', async () => {
        const { fixture } = await render(iconComponent);

        fixture.componentInstance.svgStyle = "color: red;";
        fixture.componentInstance.renderStyle();
        fixture.detectChanges();

        expect(
          fixture.nativeElement.querySelector('svg').style.color
        ).toBe('red');
      });
    }
  );
});
