import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'scissors-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.121 14.121 19 19m-7-7 7-7m-7 7-2.879 2.879M12 12 9.121 9.121m0 5.758a3 3 0 1 0-4.243 4.243 3 3 0 0 0 4.243-4.243zm0-5.758a3 3 0 1 0-4.243-4.243 3 3 0 0 0 4.243 4.243z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class ScissorsOutlineIconComponent extends BaseOutlineIconComponent { }