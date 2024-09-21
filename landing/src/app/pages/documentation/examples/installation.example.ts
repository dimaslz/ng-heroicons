export const installationExample = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgHeroiconsModule,
    // ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`.trim();
