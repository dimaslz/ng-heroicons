import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'key-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 8a6 6 0 0 1-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1 1 18 8zm-6-4a1 1 0 1 0 0 2 2 2 0 0 1 2 2 1 1 0 1 0 2 0 4 4 0 0 0-4-4z" fill="currentColor"/></svg>`,
})
export class KeySolidIconComponent extends BaseSolidIconComponent { }