import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'paper-airplane-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 0 0-1.788 0l-7 14a1 1 0 0 0 1.169 1.409l5-1.429A1 1 0 0 0 9 15.571V11a1 1 0 1 1 2 0v4.571a1 1 0 0 0 .725.962l5 1.428a1 1 0 0 0 1.17-1.408l-7-14z"/></svg>`,
})
export class PaperAirplaneSolidIconComponent extends BaseSolidIconComponent { }