import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'sort-descending-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3a1 1 0 0 0 0 2h11a1 1 0 1 0 0-2H3zM3 7a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2H3zM3 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H3zM15 8a1 1 0 1 0-2 0v5.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L15 13.586V8z" fill="currentColor"/></svg>`,
})
export class SortDescendingSolidIconComponent extends BaseSolidIconComponent { }