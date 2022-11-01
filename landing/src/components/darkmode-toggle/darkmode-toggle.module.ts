import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkModeComponent } from './darkmode-toggle.component';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@NgModule({
	declarations: [DarkModeComponent],
	imports: [CommonModule, NgHeroiconsModule],
	exports: [DarkModeComponent],
	bootstrap: [],
})
export class DarkModeModule { }
