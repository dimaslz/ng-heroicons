import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutlineIconsModule } from './components/outline/module';
import { SolidIconsModule } from './components/solid/module';

@NgModule({
  imports: [CommonModule],
  exports: [OutlineIconsModule, SolidIconsModule],
})
export class NgHeroiconsModule { }
