import {
	ApplicationConfig,
	importProvidersFrom,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(),
		importProvidersFrom(
			NgHeroiconsModule.forRoot({ default: 'outline', stroke: 1 }),
		),
	],
};
