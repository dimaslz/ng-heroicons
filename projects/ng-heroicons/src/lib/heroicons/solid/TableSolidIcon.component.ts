import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'table-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5zm-1 9v-1h5v2H5a1 1 0 0 1-1-1zm7 1h4a1 1 0 0 0 1-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" fill="currentColor"/></svg>`,
})
export class TableSolidIconComponent extends BaseSolidIconComponent { }