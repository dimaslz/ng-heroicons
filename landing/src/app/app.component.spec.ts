import { render } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	test('works properly', async () => {
		await render(AppComponent);
	});
});
