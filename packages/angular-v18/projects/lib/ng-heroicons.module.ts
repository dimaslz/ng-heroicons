import { CommonModule } from "@angular/common";
import { InjectionToken, ModuleWithProviders, NgModule } from "@angular/core";
import { NgHeroiconsComponent } from "./ng-heroicons.component";

import { OutlineIconsModule } from './components/outline/module';
import { SolidIconsModule } from './components/solid/module';

export type NgHeroiconsModuleConfig = {
	stroke?: number;
	default?: 'outline' | 'solid'
};

export const DEFAULT_CONFIG: NgHeroiconsModuleConfig = { stroke: 1, default: 'outline' };
export const MODULE_CONFIG = new InjectionToken<NgHeroiconsModuleConfig>('config');

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
})
export class NgHeroiconsModule {
	static config: NgHeroiconsModuleConfig = DEFAULT_CONFIG;

	static forRoot(config: NgHeroiconsModuleConfig = {}): ModuleWithProviders<NgHeroiconsModule> {
		this.config = { ...this.config, ...config}

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
