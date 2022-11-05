import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { IconsComponent } from './icons.component';

import { TooltipModule } from '../../components/tooltip/tooltip.component.module';
import { ComponentFixture } from '@angular/core/testing';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

@Component({
	selector: 'x-mark-outline-icon',
	template: '.'
})
class XMarkOutlineIconComponent {
	@Input() size = 24;
}

@Component({
	selector: 'magnifying-glass-outline-icon',
	template: '.'
})
class MagnifyingGlassCircleOutlineIconComponent {
	@Input() size = 24;
}

@Component({
	selector: 'magnifying-glass-plus-outline-icon',
	template: 'ZOOM_IN_OUTLINE_ICON'
})
class MagnifyingGlassPlusOutlineIconComponent {
	@Input() size = 24;
}

@Component({
	selector: 'magnifying-glass-minus-outline-icon',
	template: 'ZOOM_OUT_OUTLINE_ICON'
})
class MagnifyingGlassMinusOutlineIconComponent {
	@Input() size = 24;
}

@Component({
	selector: 'outline-icons',
	template: `<div>OUTLINE_ICONS</div>
  <div>
    <div class="IconWrapper">
      <div class="IconWrapper__icon" id="icon_1">
        icon_1
      </div>
      <div class="IconWrapper__name">icon_1</div>
    </div>
  </div>`
})
class OutlineIconsComponent {
	@Input() size = 24;
	@Input() stroke = 0;
}

@Component({
	selector: 'solid-icons',
	template: 'SOLID_ICONS'
})
class SolidIconsComponent {
	@Input() size = 24;
}

@Component({
	selector: 'heart-solid-icon',
	template: 'HEART_SOLID_ICON'
})
class HeartSolidIconComponent {
	@Input() size = 24;
}

const setup = async () => {
	return {
		user: userEvent.setup(),
		component: await render(IconsComponent, {
			declarations: [
				IconsComponent,
				OutlineIconsComponent,
				SolidIconsComponent,

				XMarkOutlineIconComponent,
				MagnifyingGlassCircleOutlineIconComponent,
				MagnifyingGlassPlusOutlineIconComponent,
				MagnifyingGlassMinusOutlineIconComponent,
				HeartSolidIconComponent,
			],
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				TooltipModule,
			],
		})
	}
}

describe('IconsComponent', () => {
	let fixture: ComponentFixture<IconsComponent>;
	let user: UserEvent;

	beforeEach(async () => {
		const { user: u, component } = await setup();
		fixture = component.fixture;
		user = u

		fixture.autoDetectChanges();
	});

	describe('By default', () => {
		it('should create the app', () => {
			const app = fixture.componentInstance;
			expect(app).toBeTruthy();
		});

		it('outline icons should be render', () => {
			expect(screen.getByText('OUTLINE_ICONS')).toBeTruthy();
		});

		it('solid icons should be render', () => {
			fixture.componentInstance.type = 'solid';
			fixture.detectChanges();

			expect(screen.getByText('SOLID_ICONS')).toBeTruthy();
		});
	});

	describe('MENU', () => {
		it('clicking on outline button, should switch the outline icon type', async () => {
			const input = screen.getByRole('button', { name: /outline/ });
			await fireEvent.click(input)

			fixture.detectChanges();

			expect(fixture.componentInstance.type).toBe('outline');
		});

		it('clicking on solid button, should switch the solid icon type', async () => {
			const input = screen.getByRole('button', { name: /solid/ });
			await fireEvent.click(input)

			expect(fixture.componentInstance.type).toBe('solid');
		});

		it('on zoom in should modify the UI and default values', async () => {
			const input = screen.getByText('ZOOM_IN_OUTLINE_ICON');
			await fireEvent.click(input);

			expect(fixture.componentInstance.size).toBe(48);
		});

		it('on zoom out should modify the UI and default values', async () => {
			const input = screen.getByText('ZOOM_OUT_OUTLINE_ICON');
			await fireEvent.click(input);

			expect(fixture.componentInstance.size).toBe(32);
		});
	});

	describe('SEARCH on typing', () => {
		describe('search icons does not exists', () => {
			let input: HTMLElement;
			const search = 'something'
			beforeEach(async () => {
				input = screen.getByRole('search');
				await user.type(input, search);
			});

			it("should show empty message", () => {
				expect(screen.getByText('there are no icons matching the search')).toBeTruthy();
			});
			it("input search should keep the text", () => {
				expect(input).toHaveValue(search);
			});
		});

		it('clear input search', async () => {
			fixture.componentInstance.form.get("search")?.setValue("something")
			const input = screen.getByRole('search');
			user.clear(input);
			fixture.detectChanges();

			expect(input).toHaveValue("");
		});

		it('search existing icons', async () => {
			const input = screen.getByRole('search');
			await user.type(input, 'icon');

			fixture.detectChanges();

			expect(screen.getAllByText(/icon_*/));
		});
	});
});
