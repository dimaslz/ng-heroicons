import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'color-swatch-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2a2 2 0 0 0-2 2v11a3 3 0 1 0 6 0V4a2 2 0 0 0-2-2H4zm1 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5-1.757 4.9-4.9a2 2 0 0 0 0-2.828L13.485 5.1a2 2 0 0 0-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2z" fill="currentColor"/></svg>`,
})
export class ColorSwatchSolidIconComponent extends BaseSolidIconComponent { }