import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import { DarkModeComponent } from './darkmode-toggle.component';

@NgModule({
	declarations: [DarkModeComponent],
	imports: [CommonModule, NgHeroiconsModule],
	exports: [DarkModeComponent],
})
export class DarkModeModule {}
