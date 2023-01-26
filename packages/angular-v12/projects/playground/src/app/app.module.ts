import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgHeroiconsModule } from '../../../lib/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    NgHeroiconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
