import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'dots-vertical-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"/></svg>`,
})
export class DotsVerticalSolidIconComponent extends BaseSolidIconComponent { }