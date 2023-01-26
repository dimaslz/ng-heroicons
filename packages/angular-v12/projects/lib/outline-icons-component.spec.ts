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
		},
	);
});
