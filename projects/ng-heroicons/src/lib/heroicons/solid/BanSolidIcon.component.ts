import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'ban-solid-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 0 1 5.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 0 1 8.367 8.367zM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" clip-rule="evenodd"/></svg>`,
})
export class BanSolidIconComponent extends BaseSolidIconComponent { }