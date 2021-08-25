import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'location-marker-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 16.657 13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class LocationMarkerOutlineIconComponent extends BaseOutlineIconComponent { }