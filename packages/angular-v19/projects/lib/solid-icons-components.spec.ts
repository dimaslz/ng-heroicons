import { render } from '@testing-library/angular';

import { SOLID_ICONS } from './constants';

describe('Solid icons', () => {
	describe.each(Object.entries(SOLID_ICONS))(
		'component: %s',
		(name, iconComponent) => {
			it('should work', async () => {
				const { fixture } = await render(iconComponent);
				expect(fixture.componentInstance).toBeTruthy();
			});

			it('default style', async () => {
				const { fixture } = await render(iconComponent);
				fixture.detectChanges();

				const { width, height } =
					fixture.nativeElement.querySelector('svg').style;

				expect(width).toBe('24px');
				expect(height).toBe('24px');
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

			it('svgStyle parameter should work', async () => {
				const { fixture } = await render(iconComponent, {
					inputs: { style: 'color: red;' }
				});

				expect(fixture.nativeElement.querySelector('svg').style.color).toBe(
					'red',
				);
			});
		},
	);
});
