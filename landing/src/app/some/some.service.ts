import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export class SomeConfig {
	value = "";
}

// export const SOME_CONFIG = new InjectionToken<SomeConfig>('SOME_CONFIG_PARAMS');


@Injectable()
export class SomeService {
	// constructor(@Optional() @Inject(SOME_CONFIG) private value: string) {
	constructor(@Optional() private value: SomeConfig) {
		console.log("SomeService", value)
	}

	getOptions() {
		return this.value;
	}
}
