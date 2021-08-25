import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'hashtag-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7 20 4-16m2 16 4-16M6 9h14M4 15h14" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class HashtagOutlineIconComponent extends BaseOutlineIconComponent { }