import { render } from '@testing-library/angular';

import { OUTLINE_ICONS } from './constants';

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
				expect(strokeWidth).toBe('1px');
			});

			it('size parameter should work', async () => {
				const { fixture } = await render(iconComponent, {
					inputs: { size: 99 }
				});

				const { width, height } =
					fixture.nativeElement.querySelector('svg').style;

				expect(width).toBe('99px');
				expect(height).toBe('99px');
			});

			it('color parameter should work', async () => {
				const { fixture } = await render(iconComponent, {
					inputs: { color: 'red' },
				});

				expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
					'red',
				);
			});

			it('stroke parameter should work', async () => {
				const { fixture } = await render(iconComponent, {
					inputs: { stroke: 99 }
				});

				expect(
					fixture.nativeElement.querySelector('svg').style.strokeWidth,
				).toBe('99px');
			});

			it('svgStyle parameter should work', async () => {
				const { fixture } = await render(iconComponent);

				fixture.componentInstance.style = 'color: red;';
				fixture.detectChanges();

				expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
					'red',
				);
			});
		},
	);
});
