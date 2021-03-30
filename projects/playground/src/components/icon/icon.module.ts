import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';

@NgModule({
  declarations: [
    IconComponent,
  ],
  imports: [CommonModule],
  exports: [IconComponent],
  bootstrap: [],
})
export class IconModule {}
