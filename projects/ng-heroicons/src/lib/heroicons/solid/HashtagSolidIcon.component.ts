import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'hashtag-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.243 3.03a1 1 0 0 1 .727 1.213L9.53 6h2.94l.56-2.243a1 1 0 1 1 1.94.486L14.53 6H17a1 1 0 1 1 0 2h-2.97l-1 4H15a1 1 0 1 1 0 2h-2.47l-.56 2.242a1 1 0 1 1-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 1 1-1.94-.485L5.47 14H3a1 1 0 1 1 0-2h2.97l1-4H5a1 1 0 1 1 0-2h2.47l.56-2.243a1 1 0 0 1 1.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" fill="currentColor"/></svg>`,
})
export class HashtagSolidIconComponent extends BaseSolidIconComponent { }