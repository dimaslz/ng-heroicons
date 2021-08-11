/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { fireEvent, render, screen } from '@testing-library/angular';
import { DarkModeModule } from '../components/darkmode-toggle/darkmode-toggle.module';
import { AppComponent } from './app.component';

@Component({ selector: 'icons', template: '' })
class IconsComponent {
  @Input() color = '#ffffff';
}

@Component({
  selector: 'app-icon',
  template: ''
})
class IconComponent {
  @Input() size = 24;
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, IconsComponent, IconComponent],
      imports: [DarkModeModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be loaded icons', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.nativeElement.querySelector('icons')).toBeTruthy();
  });

  it('icon color should change on click on dark mode toggle', async () => {
    const { fixture } = await render(AppComponent);
    expect(fixture.componentInstance.color).toBe('#333333');
    fireEvent.click(screen.getByText('go to dark'));
    fixture.detectChanges();

    expect(fixture.componentInstance.color).toBe('#ffffff');
  });
});
