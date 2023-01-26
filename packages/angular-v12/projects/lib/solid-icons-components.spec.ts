import { render, screen } from '@testing-library/angular';

import * as SOLID_ICONS from './components/solid';

describe('Solid icons', () => {
	describe.each(Object.entries(SOLID_ICONS))(
		'component: %s',
		(name, iconComponent) => {
			it('should work', async () => {
				const { fixture } = await render(iconComponent);

				expect(fixture.componentInstance).toBeTruthy();
			});
		},
	);
});
