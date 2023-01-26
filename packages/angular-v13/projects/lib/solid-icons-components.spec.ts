import { screen, render } from '@testing-library/angular';

import * as SOLID_ICONS from './components/solid';

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
