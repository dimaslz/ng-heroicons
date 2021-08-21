import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'video-camera-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zM14.553 7.106A1 1 0 0 0 14 8v4a1 1 0 0 0 .553.894l2 1A1 1 0 0 0 18 13V7a1 1 0 0 0-1.447-.894l-2 1z" fill="currentColor"/></svg>`,
})
export class VideoCameraSolidIconComponent extends BaseSolidIconComponent { }