import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'scissors-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 2C3.567 2 2 3.567 2 5.5C2 7.433 3.567 9 5.5 9C6.10276 9 6.66993 8.84763 7.1651 8.57931L8.58582 10L7.16515 11.4207C6.66997 11.1524 6.10278 11 5.5 11C3.567 11 2 12.567 2 14.5C2 16.433 3.567 18 5.5 18C7.433 18 9 16.433 9 14.5C9 13.8973 8.84764 13.3301 8.57934 12.835L16.7072 4.70711C17.0977 4.31658 17.0977 3.68342 16.7072 3.29289C16.3167 2.90237 15.6835 2.90237 15.293 3.29289L10 8.58582L8.57931 7.1651C8.84763 6.66993 9 6.10276 9 5.5C9 3.567 7.433 2 5.5 2ZM4 5.5C4 4.67157 4.67157 4 5.5 4C6.32843 4 7 4.67157 7 5.5C7 6.32843 6.32843 7 5.5 7C4.67157 7 4 6.32843 4 5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13C6.32843 13 7 13.6716 7 14.5C7 15.3284 6.32843 16 5.5 16C4.67157 16 4 15.3284 4 14.5Z" fill="currentColor"/>
<path d="M12.8284 11.4142C12.4379 11.0237 11.8047 11.0237 11.4142 11.4142C11.0237 11.8047 11.0237 12.4379 11.4142 12.8284L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L12.8284 11.4142Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class ScissorsSolidComponent extends BaseSolidIconComponent { }