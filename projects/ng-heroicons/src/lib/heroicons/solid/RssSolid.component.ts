import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'rss-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5C10.5228 5 15 9.47715 15 15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15C17 8.37258 11.6274 3 5 3Z" fill="currentColor"/>
<path d="M4 9C4 8.44772 4.44772 8 5 8C8.86599 8 12 11.134 12 15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15C10 12.2386 7.76142 10 5 10C4.44772 10 4 9.55228 4 9Z" fill="currentColor"/>
<path d="M3 15C3 13.8954 3.89543 13 5 13C6.10457 13 7 13.8954 7 15C7 16.1046 6.10457 17 5 17C3.89543 17 3 16.1046 3 15Z" fill="currentColor"/>
</svg>`,
})
export class RssSolidComponent extends BaseSolidIconComponent { }