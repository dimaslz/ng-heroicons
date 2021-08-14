/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Component, Input } from '@angular/core';
import { render, RenderResult, screen } from '@testing-library/angular';
import { TooltipComponent } from './tooltip.component';

@Component({
  selector: 'app',
  template: '<tooltip [copied]="copied"><div id="foo">FOO</div></tooltip>'
})
class AppDummyComponent {
  @Input() copied = false;
}

describe('TooltipComponent', () => {

  describe('By default', () => {
    let componentRender: RenderResult<TooltipComponent>;
    beforeEach(async () => {
      componentRender = await render(TooltipComponent);
    });

    it('should create the tooltip component', () => {
      const tooltip = componentRender.fixture.componentInstance;
      expect(tooltip).toBeTruthy();
    });
  });

  describe('In different scenarios', () => {
    let componentRender: RenderResult<TooltipComponent>;
    beforeEach(async () => {
      componentRender = await render(AppDummyComponent, {
        declarations: [TooltipComponent]
      });
    });

    it('should see the content', () => {
      expect(screen.getByText('FOO')).toBeTruthy();
    });

    it('if copied, I can see the notification', () => {
      expect(screen.getByText('Copied!').classList.contains('invisible')).toBe(true);

      componentRender.fixture.componentInstance.copied = true;
      componentRender.fixture.detectChanges();

      expect(screen.getByText('Copied!').classList.contains('visible')).toBe(true);
    });
  });
});
