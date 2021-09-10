/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';

import { DarkModeComponent } from './darkmode-toggle.component';

@Component({ selector: 'moon-outline-icon', template: '' })
class MoonOutlineComponent {
}

@Component({ selector: 'sun-outline-icon', template: '' })
class SunOutlineComponent {
}

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

      jest.spyOn(fixture.componentInstance.update, 'emit');
      fixture.detectChanges();

      fireEvent.click(screen.getByText('go to dark'));
      fixture.detectChanges();
    });

    it('should see "go to light"', () => {
      expect(screen.getByText('go to light')).toBeTruthy();
    });

    it('should call event "update"', () => {
      expect(fixture.componentInstance.update.emit).toHaveBeenCalled();
    });
  });
});
