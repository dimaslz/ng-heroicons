import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'tag-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.707 9.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7A.997.997 0 0 1 2 10V5a3 3 0 0 1 3-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor"/></svg>`,
})
export class TagSolidIconComponent extends BaseSolidIconComponent { }