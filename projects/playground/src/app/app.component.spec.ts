/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({ selector: 'icons', template: '' })
class IconsComponent {}

@Component({ selector: 'app-darkmode-toggle', template: '' })
class DarkModeComponent {}

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
      declarations: [AppComponent, IconsComponent, DarkModeComponent, IconComponent],
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
});
