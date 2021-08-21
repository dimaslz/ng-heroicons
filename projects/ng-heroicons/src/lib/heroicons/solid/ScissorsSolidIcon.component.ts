import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'scissors-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 2a3.5 3.5 0 1 0 1.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 1 0 1.414 1.414l8.128-8.127a1 1 0 0 0-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 0 0 5.5 2zM4 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" fill="currentColor"/><path d="M12.828 11.414a1 1 0 0 0-1.414 1.414l3.879 3.88a1 1 0 0 0 1.414-1.415l-3.879-3.879z" fill="currentColor"/></svg>`,
})
export class ScissorsSolidIconComponent extends BaseSolidIconComponent { }