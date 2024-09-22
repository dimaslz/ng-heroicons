import '@testing-library/jest-dom';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { DarkModeComponent } from '@/components';

@Component({
	selector: 'moon-outline-icon',
	template: '',
	standalone: true,
})
class MoonOutlineIconComponent {}

@Component({
	selector: 'sun-outline-icon',
	template: '',
	standalone: true,
})
class SunOutlineIconComponent {}

const imports = [
	CommonModule,
	MoonOutlineIconComponent,
	SunOutlineIconComponent,
];

describe('Components - Darkmode Toggle', () => {
	describe('light mode', () => {
		test('by default is light mode', async () => {
			const component = await render(DarkModeComponent, {
				imports,
			});

			expect(
				component.container.querySelector('moon-outline-icon'),
			).toBeInTheDocument();
			expect(component.getByText('go to dark')).toBeInTheDocument();
		});

		test('switch icon to dark mode on click', async () => {
			const component = await render(DarkModeComponent, {
				imports,
			});

			const button = component.getByRole('button');

			await userEvent.click(button);

			expect(
				component.container.querySelector('sun-outline-icon'),
			).toBeInTheDocument();
			expect(component.getByText('go to light')).toBeInTheDocument();
		});
	});

	describe('dark mode', () => {
		beforeEach(() => {
			Object.defineProperty(window, 'matchMedia', {
				value: jest.fn().mockImplementation(() => ({
					matches: true,
				})),
			});
		});
		test('by default is dark mode', async () => {
			const component = await render(DarkModeComponent, {
				imports,
			});

			expect(
				component.container.querySelector('sun-outline-icon'),
			).toBeInTheDocument();
			expect(component.getByText('go to light')).toBeInTheDocument();
		});

		test('switch icon to light mode on click', async () => {
			const component = await render(DarkModeComponent, {
				imports,
			});

			const button = component.getByRole('button');

			await userEvent.click(button);

			expect(
				component.container.querySelector('moon-outline-icon'),
			).toBeInTheDocument();
			expect(component.getByText('go to dark')).toBeInTheDocument();
		});
	});
});
