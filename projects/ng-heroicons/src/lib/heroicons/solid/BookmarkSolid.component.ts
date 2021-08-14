import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'bookmark-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4C5 2.89543 5.89543 2 7 2H13C14.1046 2 15 2.89543 15 4V18L10 15.5L5 18V4Z" fill="currentColor"/>
</svg>`,
})
export class BookmarkSolidComponent extends BaseSolidIconComponent { }