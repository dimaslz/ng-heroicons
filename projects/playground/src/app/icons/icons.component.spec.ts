/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { NgHeroiconsModule } from '../../../../ng-heroicons/src/public-api';
import { IconsComponent } from './icons.component';
import { OutlineIconsComponent } from './outline-icons.component';
import { SolidIconsComponent } from './solid-icons.component';

import { TooltipComponent } from '../tooltip/tooltip.component';

describe('IconsComponent', () => {
  let fixture: any;
  let container: any;
  beforeEach(async () => {
    jest.useFakeTimers();

    const component = await render(IconsComponent, {
      declarations: [
        IconsComponent,
        OutlineIconsComponent,
        SolidIconsComponent,
        TooltipComponent,
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgHeroiconsModule,
      ],
    });

    fixture = component.fixture;
    container = component.container;
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
      expect(fixture.nativeElement.querySelector('outline-icons')).toBeTruthy();
    });

    it('solid icons should be render', () => {
      fixture.componentInstance.type = 'solid';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('solid-icons')).toBeTruthy();
    });
  });

  describe('MENU', () => {
    it('clicking on heart, should switch the icon type', () => {
      const input = screen.getByTestId('outline-solid-toggle');
      userEvent.click(input);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('solid-icons')).toBeTruthy();
    });

    it('on zoon in should modify the UI and default values', () => {
      const input = screen.getByTestId('zoom-in');
      userEvent.click(input);
      fixture.detectChanges();

      expect(fixture.componentInstance.size).toBe(32);
    });
  });

  describe('on typing in search', () => {
    it('search icons does not exists', () => {
      const input = screen.getByTestId('search');
      userEvent.type(input, 'something');
      jest.advanceTimersByTime(200);

      fixture.detectChanges();

      expect(screen.getByTestId('empty')).toBeTruthy();
    });

    it('clear input search', () => {
      const input = screen.getByTestId('search');
      userEvent.clear(input);
      jest.advanceTimersByTime(200);

      fixture.detectChanges();

      expect(screen.getByTestId('list-of-icons')).toBeTruthy();
    });

    it('search existing icons', () => {
      const input = screen.getByTestId('search');
      userEvent.type(input, 'arrow');
      jest.advanceTimersByTime(200);

      fixture.detectChanges();

      expect(
        container.querySelectorAll('div.IconWrapper:not([class*=hidden])')
          .length > 0
      ).toBe(true);
    });
  });
});
