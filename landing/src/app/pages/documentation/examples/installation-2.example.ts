export const installationExample2 = `
// app.config.ts
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    // 👇
    importProvidersFrom(
      NgHeroiconsModule.forRoot({ default: 'solid' }) // 👈
    )
    // 👆
  ],
};

// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgHeroiconsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
`.trim();
