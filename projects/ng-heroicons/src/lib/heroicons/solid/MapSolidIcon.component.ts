import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'map-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m12 1.586-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 0 0 2 4v10a1 1 0 0 0 .293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293 14 1.586v12.828l2.293 2.293A1 1 0 0 0 18 16V6a1 1 0 0 0-.293-.707z" fill="currentColor"/></svg>`,
})
export class MapSolidIconComponent extends BaseSolidIconComponent { }