/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Component, Input } from '@angular/core';
import { fireEvent, render, RenderResult, screen } from '@testing-library/angular';

import * as copyToClipboardUtil from '../utils/copy-to-clipboard.utils';
import { AppComponent } from './app.component';

@Component({ selector: 'icons', template: '' })
class IconsComponent {
  @Input() color = 'white';
}

@Component({
  selector: 'app-icon',
  template: '.'
})
class IconComponent {
  @Input() size = 24;
}

@Component({
  selector: 'app-darkmode-toggle',
  template: '.'
})
class DarkModeComponent { }

describe('AppComponent', () => {
  let componentRender: RenderResult<AppComponent>;
  beforeEach(async () => {
    componentRender = await render(AppComponent, {
      declarations: [DarkModeComponent, IconsComponent, IconComponent],
    });
  });

  it('should create the app', () => {
    const app = componentRender.fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be loaded icons', () => {
    expect(componentRender.fixture.nativeElement.querySelector('icons')).toBeTruthy();
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

    it('should be copied the code', () => {
      const componentInstance = componentRender.fixture.componentInstance;
      expect(componentInstance.copied).toBe(false);

      fireEvent.click(screen.getByText('$ yarn add @dimaslz/ng-heroicons'));
      expect(componentInstance.copied).toBe(true);
      expect(copyToClipboard).toBeCalled();

      jest.advanceTimersByTime(delay);
      expect(componentInstance.copied).toBe(false);
    });
  });
});
