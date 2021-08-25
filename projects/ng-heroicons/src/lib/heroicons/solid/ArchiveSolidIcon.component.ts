import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'archive-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 8h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8zm5 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z" fill="currentColor"/></svg>`,
})
export class ArchiveSolidIconComponent extends BaseSolidIconComponent { }