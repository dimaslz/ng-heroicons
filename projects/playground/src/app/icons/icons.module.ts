import { NgModule } from '@angular/core';
import { NgHeroiconsModule } from '../../../../ng-heroicons/src/public-api';
import { IconsComponent } from './icons.component';
import { CommonModule } from '@angular/common';
import { OutlineIconsComponent } from './outline-icons.component';
import { SolidIconsComponent } from './solid-icons.component';

import { TooltipComponent } from '../tooltip/tooltip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IconsComponent,
    OutlineIconsComponent,
    SolidIconsComponent,
    TooltipComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgHeroiconsModule],
  exports: [OutlineIconsComponent, SolidIconsComponent, IconsComponent],
  bootstrap: [],
})
export class IconsModule {}
