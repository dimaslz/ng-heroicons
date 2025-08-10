import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { OutlineIconsModule } from './components/outline/module';
import { SolidIconsModule } from './components/solid/module';
import { DynamicIconsModule } from "./ng-heroicons.component";
import { NgHeroiconsModuleConfig } from "./types";
import { DEFAULT_CONFIG, MODULE_CONFIG } from "./constants";

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		SolidIconsModule,
		OutlineIconsModule,
		DynamicIconsModule,
	],
})
export class NgHeroiconsModule {
	static config: NgHeroiconsModuleConfig = DEFAULT_CONFIG;

	static forRoot(config: NgHeroiconsModuleConfig = {}): ModuleWithProviders<NgHeroiconsModule> {
		this.config = { ...this.config, ...config }

		return {
			ngModule: NgHeroiconsModule,
			providers: [
				{
					provide:  MODULE_CONFIG,
					useValue: this.config
				}
			]
		}
	}
}
