import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgHeroiconsComponent } from "./ng-heroicons.component";

import { OutlineIconsModule } from './components/outline/module';
import { SolidIconsModule } from './components/solid/module';

@NgModule({
	imports: [CommonModule],
	declarations: [
		NgHeroiconsComponent,
	],
	exports: [
		OutlineIconsModule,
		SolidIconsModule,

		NgHeroiconsComponent,
	],
	providers: [],
})
export class NgHeroiconsModule {
	//
}