import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { IconModule } from '../components/icon/icon.module';
import { DarkModeModule } from '../components/darkmode-toggle/darkmode-toggle.module';

import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    IconsModule,
    IconModule,
    DarkModeModule,

    NgHeroiconsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
