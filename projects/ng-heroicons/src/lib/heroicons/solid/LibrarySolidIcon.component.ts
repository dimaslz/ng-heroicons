import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'library-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.496 2.132a1 1 0 0 0-.992 0l-7 4A1 1 0 0 0 3 8v7a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2V8a1 1 0 0 0 .496-1.868l-7-4zM6 9a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1zm3 1a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0v-3zm5-1a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1z" clip-rule="evenodd"/></svg>`,
})
export class LibrarySolidIconComponent extends BaseSolidIconComponent { }