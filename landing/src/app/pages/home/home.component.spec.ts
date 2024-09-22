import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { fireEvent, render, RenderResult } from '@testing-library/angular';

import { HomePageComponent } from '@/app/pages/home/home.component';
import * as copyToClipboardUtil from '@/utils/copy-to-clipboard.utils';

@Component({
	selector: 'icons',
	template: '',
	standalone: true,
})
class IconsComponent {
	@Input() color = '';
}

@Component({
	selector: 'app-icon',
	template: '',
	standalone: true,
})
class AppIconComponent {
	@Input() size = 24;
}

describe('Page - Home', () => {
	let componentRender: RenderResult<HomePageComponent>;
	beforeEach(async () => {
		componentRender = await render(HomePageComponent, {
			componentImports: [CommonModule, AppIconComponent, IconsComponent],
		});
	});

	it('should create the app', () => {
		const app = componentRender.fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should be loaded icons', () => {
		expect(componentRender.container.querySelector('icons')).toBeTruthy();
	});

	it('color should change', () => {
		const componentInstance = componentRender.fixture.componentInstance;
		expect(componentInstance.color).toBe('white');

		componentInstance.onModeChange('dark');
		expect(componentInstance.color).toBe('gray');
	});

	describe('on click in command', () => {
		jest.useFakeTimers();
		const delay = 1000;
		const copyToClipboard = jest.fn();

		beforeAll(() => {
			const mock = jest.spyOn(copyToClipboardUtil, 'default');
			mock.mockImplementation(copyToClipboard);
		});

		it('should be copied the code', async () => {
			const componentInstance = componentRender.fixture.componentInstance;
			expect(componentInstance.copied).toBe(false);

			await fireEvent.click(
				componentRender.getByText('$ yarn add @dimaslz/ng-heroicons'),
			);
			expect(componentInstance.copied).toBe(true);
			expect(copyToClipboard).toHaveBeenCalled();

			jest.advanceTimersByTime(delay);
			expect(componentInstance.copied).toBe(false);
		});
	});
});
