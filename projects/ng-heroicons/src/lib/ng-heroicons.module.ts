import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutlineIconsModule } from './heroicons/outline/module';
import { SolidIconsModule } from './heroicons/solid/module';

@NgModule({
  imports: [CommonModule],
  exports: [OutlineIconsModule, SolidIconsModule],
})
export class NgHeroiconsModule { }
