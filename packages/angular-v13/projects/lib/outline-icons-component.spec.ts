import { render } from '@testing-library/angular';

import * as OUTLINE_ICONS from './components/outline';

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

				const { width, height, strokeWidth } =
					fixture.nativeElement.querySelector('svg').style;

				expect(width).toBe('24px');
				expect(height).toBe('24px');
				// TODO: should be 1px
				expect(strokeWidth).toBe('1');
			});

			it('size parameter should work', async () => {
				const { fixture } = await render(iconComponent);

				fixture.componentInstance.size = 99;
				fixture.detectChanges();

				const { width, height } =
					fixture.nativeElement.querySelector('svg').style;

				expect(width).toBe('99px');
				expect(height).toBe('99px');
			});


			it('stroke parameter should work', async () => {
				const { fixture } = await render(iconComponent);

				fixture.componentInstance.stroke = 99;
				fixture.detectChanges();

				// TODO: should be 99px
				expect(
					fixture.nativeElement.querySelector('svg').style.strokeWidth,
				).toBe('99');
			});

			it('update size by paremeter', async () => {
				const { fixture } = await render(iconComponent, {
					componentProperties: {
						size: 100
					}
				});
				fixture.detectChanges();

				const { width, height } =
					fixture.nativeElement.querySelector('svg').style;

				expect(width).toBe('100px');
				expect(height).toBe('100px');
			});

			it('color parameter should work', async () => {
				const { fixture } = await render(iconComponent, {
					componentProperties: {
						style: "color: red;"
					}
				});
				fixture.detectChanges();

				const { color } =
					fixture.nativeElement.querySelector('svg').style;

				expect(color).toBe('red');
			});
		},
	);
});
