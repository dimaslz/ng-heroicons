import { NgModule } from '@angular/core';
import { NgHeroiconsModule } from '../../../../ng-heroicons/src/public-api';
import { IconsComponent } from './icons.component';
import { CommonModule } from '@angular/common';
import { OutlineIconsComponent } from './outline-icons.component';
import { SolidIconsComponent } from './solid-icons.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '../../components/tooltip/tooltip.component.module';

@NgModule({
  declarations: [IconsComponent, OutlineIconsComponent, SolidIconsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgHeroiconsModule,
    TooltipModule,
  ],
  exports: [OutlineIconsComponent, SolidIconsComponent, IconsComponent],
  bootstrap: [],
})
export class IconsModule {}
