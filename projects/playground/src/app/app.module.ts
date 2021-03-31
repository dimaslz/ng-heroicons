import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { IconModule } from '../components/icon/icon.module';
import { DarkModeModule } from '../components/darkmode-toggle/darkmode-toggle.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, IconsModule, IconModule, DarkModeModule],
  exports: [],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
