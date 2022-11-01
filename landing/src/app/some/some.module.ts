import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SomeComponent } from './some.component';
import { SomeConfig, SomeService } from './some.service';


@NgModule({
  declarations: [
    SomeComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [SomeService],
  exports: [
    SomeComponent
  ],
})
export class SomeModule {
  constructor(@Optional() @SkipSelf() parentModule?: SomeModule) {
    if (parentModule) {
      throw new Error(
        'SomeModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: SomeConfig): ModuleWithProviders<SomeModule> {
    return {
      ngModule: SomeModule,
      providers: [
        { provide: SomeConfig, useValue: config }
      ]
    }
  }
}
