import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'wifi-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.11107 16.4039C10.259 14.256 13.7414 14.256 15.8892 16.4039M12.0002 20H12.0102M4.92913 12.9289C8.83437 9.02371 15.166 9.0237 19.0713 12.9289M1.39355 9.3934C7.25142 3.53553 16.7489 3.53553 22.6068 9.3934" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
    stroke-width: inherit;
  }`],
})
export class WifiOutlineComponent extends BaseOutlineIconComponent { }