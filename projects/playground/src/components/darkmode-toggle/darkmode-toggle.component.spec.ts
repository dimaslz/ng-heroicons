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

  it('on click, should switch to dark mode', async () => {
    const { fixture } = await render(DarkModeComponent);
    fireEvent.click(screen.getByText('go to dark'));
    fixture.detectChanges();

    expect(screen.getByText('go to light')).toBeTruthy();
  });
});
