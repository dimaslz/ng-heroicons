import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'key-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 11.3137 15.3137 14 12 14C11.3938 14 10.8087 13.9101 10.2571 13.7429L10 14L9 15L8 16H6V18H2V14L6.25707 9.74293C6.08989 9.19135 6 8.60617 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C13.1046 6 14 6.89543 14 8C14 8.55228 14.4477 9 15 9C15.5523 9 16 8.55228 16 8C16 5.79086 14.2091 4 12 4Z" fill="currentColor"/>
</svg>`,
})
export class KeySolidComponent extends BaseSolidIconComponent { }