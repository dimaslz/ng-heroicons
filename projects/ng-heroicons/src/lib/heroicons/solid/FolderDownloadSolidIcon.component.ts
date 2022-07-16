import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'folder-download-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-5L9 4H4zm7 5a1 1 0 1 0-2 0v1.586l-.293-.293a1 1 0 1 0-1.414 1.414l2 2 .002.002a.997.997 0 0 0 1.41 0l.002-.002 2-2a1 1 0 0 0-1.414-1.414l-.293.293V9z"/></svg>`,
})
export class FolderDownloadSolidIconComponent extends BaseSolidIconComponent { }