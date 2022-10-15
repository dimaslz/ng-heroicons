import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { IconsComponent } from './icons.component';

import { TooltipModule } from '../../components/tooltip/tooltip.component.module';
import { ComponentFixture } from '@angular/core/testing';

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

describe('IconsComponent', () => {
  let fixture: ComponentFixture<IconsComponent>;
  beforeEach(async () => {
    jest.useFakeTimers();

    const component = await render(IconsComponent, {
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
    });

    fixture = component.fixture;
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe('By default', () => {
    it('should create the app', () => {
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it('outline icons should be render', () => {
      fixture.detectChanges();
      expect(screen.getByText('OUTLINE_ICONS')).toBeTruthy();
    });

    it('solid icons should be render', () => {
      fixture.componentInstance.type = 'solid';
      fixture.detectChanges();

      expect(screen.getByText('SOLID_ICONS')).toBeTruthy();
    });
  });

  describe('MENU', () => {
    it('clicking on outline button, should switch the outline icon type', () => {
      const input = screen.getByLabelText('outline');
      userEvent.click(input);
      fixture.detectChanges();

      expect(fixture.componentInstance.type).toBe('outline');
    });

    it('clicking on solid button, should switch the solid icon type', () => {
      const input = screen.getByLabelText('solid');
      userEvent.click(input);
      fixture.detectChanges();

      expect(fixture.componentInstance.type).toBe('solid');
    });

    it('on zoom in should modify the UI and default values', () => {
      const input = screen.getByText('ZOOM_IN_OUTLINE_ICON');
      userEvent.click(input);
      fixture.detectChanges();

      expect(fixture.componentInstance.size).toBe(48);
    });
  });

  describe('on typing in search', () => {
    it('search icons does not exists', () => {
      const input = screen.getByRole('search');
      userEvent.type(input, 'something');
      jest.advanceTimersByTime(300);

      fixture.detectChanges();

      expect(fixture.componentInstance.empty).toBe(true);
      expect(screen.getByText('there are no icons matching the search')).toBeTruthy();
    });

    it('clear input search', () => {
      const input = screen.getByRole('search');
      userEvent.clear(input);
      jest.advanceTimersByTime(200);

      fixture.detectChanges();

      expect(screen.getByText('OUTLINE_ICONS')).toBeTruthy();
    });

    it('search existing icons', () => {
      const input = screen.getByRole('search');
      userEvent.type(input, 'icon');
      jest.advanceTimersByTime(200);

      fixture.detectChanges();

      expect(screen.getAllByText(/icon_*/));
    });
  });
});
