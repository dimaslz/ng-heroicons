/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { TestBed } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';
import { MoonOutlineComponent, SunOutlineComponent } from '../../../../ng-heroicons/src/public-api';
import { DarkModeComponent } from './darkmode-toggle.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkModeComponent, MoonOutlineComponent, SunOutlineComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DarkModeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('by default should be light mode', async () => {
    await render(DarkModeComponent);
    expect(screen.getByText('go to dark')).toBeTruthy();
  });

  describe('on click, should switch to dark mode', () => {
    let fixture: any = null;
    beforeEach(async () => {
      const renderComponent = await render(DarkModeComponent);
      fixture = renderComponent.fixture;

      spyOn(fixture.componentInstance.update, 'emit');
      fixture.detectChanges();

      fireEvent.click(screen.getByText('go to dark'));
      fixture.detectChanges();
    });

    it('should see "go to light"', () => {
      expect(screen.getByText('go to light')).toBeTruthy();
    });

    it('should see "go to light"', () => {
      expect(fixture.componentInstance.update.emit).toHaveBeenCalled();
    });
  });
});
