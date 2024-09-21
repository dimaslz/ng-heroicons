import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipesModule } from '../../pipes/pipes.module';
import { CodePresentationComponent } from './code-presentation.component';

@NgModule({
  declarations: [CodePresentationComponent],
  imports: [CommonModule, PipesModule],
  exports: [CodePresentationComponent],
  bootstrap: [],
})
export class CodePresentationModule {}