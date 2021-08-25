import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'search-circle-outline-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m8 16 2.879-2.879m0 0a3 3 0 1 0 4.243-4.242 3 3 0 0 0-4.243 4.242zM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>`,
})
export class SearchCircleOutlineIconComponent extends BaseOutlineIconComponent { }