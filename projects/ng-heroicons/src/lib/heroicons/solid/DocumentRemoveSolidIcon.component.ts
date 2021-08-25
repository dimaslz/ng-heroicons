import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'document-remove-solid-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414A2 2 0 0 0 15.414 6L12 2.586A2 2 0 0 0 10.586 2H6zm1 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7z" clip-rule="evenodd"/></svg>`,
})
export class DocumentRemoveSolidIconComponent extends BaseSolidIconComponent { }