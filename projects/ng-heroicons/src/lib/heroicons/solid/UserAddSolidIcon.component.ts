import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'user-add-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 11a6 6 0 0 1 6 6H2a6 6 0 0 1 6-6zM16 7a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V7z" fill="currentColor"/></svg>`,
})
export class UserAddSolidIconComponent extends BaseSolidIconComponent { }