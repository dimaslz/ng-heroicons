import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { IconModule } from '../components/icon/icon.module';
import { DarkModeModule } from '../components/darkmode-toggle/darkmode-toggle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IconsModule, IconModule, DarkModeModule],
  exports: [],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
