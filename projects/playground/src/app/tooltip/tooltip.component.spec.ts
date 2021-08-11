/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
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
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [TooltipComponent]
      }).compileComponents();
    });

    it('should create the tooltip component', () => {
      const fixture = TestBed.createComponent(TooltipComponent);
      const tooltip = fixture.componentInstance;
      expect(tooltip).toBeTruthy();
    });
  });

  describe('In different scenarios', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [TooltipComponent, AppDummyComponent]
      }).compileComponents();
    });

    it('I should see the children content', () => {
      const fixture = TestBed.createComponent(AppDummyComponent);
      fixture.autoDetectChanges();
      expect(fixture.nativeElement.querySelector('tooltip')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#foo').outerHTML).toBe('<div id="foo">FOO</div>');
    });

    it('By default, should have status "Click to copy on clipboard"', () => {
      const fixture = TestBed.createComponent(AppDummyComponent);
      fixture.autoDetectChanges();

      expect(fixture.nativeElement.querySelector('tooltip')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.NoteAction')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.FeedbackAction').className.includes('opacity-0')).toBe(true);
    });

    it('If copied value is true, should have layer with content "Copied!"', () => {
      const fixture = TestBed.createComponent(AppDummyComponent);
      fixture.componentInstance.copied = true;
      fixture.autoDetectChanges();

      expect(fixture.nativeElement.querySelector('tooltip')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.NoteAction')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.FeedbackAction').className.includes('opacity-100')).toBe(true);
    });
  });
});
