import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'arrow-circle-right-solid-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-8.707-3-3a1 1 0 0 0-1.414 1.414L10.586 9H7a1 1 0 1 0 0 2h3.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z" clip-rule="evenodd"/></svg>`,
})
export class ArrowCircleRightSolidIconComponent extends BaseSolidIconComponent { }