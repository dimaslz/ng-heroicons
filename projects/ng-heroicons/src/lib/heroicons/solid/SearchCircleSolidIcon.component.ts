import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'search-circle-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-13a4 4 0 0 0-3.446 6.032l-2.261 2.26a1 1 0 1 0 1.414 1.415l2.261-2.261A4 4 0 1 0 11 5z" fill="currentColor"/></svg>`,
})
export class SearchCircleSolidIconComponent extends BaseSolidIconComponent { }