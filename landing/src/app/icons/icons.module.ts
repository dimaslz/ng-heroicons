import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import { TooltipModule } from '@/components/tooltip/tooltip.component.module';

import { IconsComponent } from './icons.component';
import { OutlineIconsComponent } from './outline-icons.component';
import { SolidIconsComponent } from './solid-icons.component';

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
export class IconsModule {}
