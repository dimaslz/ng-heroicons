import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import { IconsComponent } from './icons.component';
import { OutlineIconsComponent } from './outline-icons.component';
import { SolidIconsComponent } from './solid-icons.component';

import { TooltipModule } from '../../components/tooltip/tooltip.component.module';

@NgModule({
	declarations: [IconsComponent, OutlineIconsComponent, SolidIconsComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TooltipModule,
		NgHeroiconsModule,
	],
	exports: [IconsComponent, OutlineIconsComponent, SolidIconsComponent],
	bootstrap: [],
})
export class IconsModule { }
