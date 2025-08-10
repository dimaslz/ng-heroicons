import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import { DarkModeModule } from '@/components/darkmode-toggle/darkmode-toggle.module';
import { IconModule } from '@/components/icon/icon.module';
import copyToClipboard from '@/utils/copy-to-clipboard.utils';

import { IconsModule } from './icons/icons.module';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	imports: [
		CommonModule,
		RouterOutlet,
		RouterLink,
		NgHeroiconsModule,
		IconsModule,
		IconModule,
		DarkModeModule,
	],
	standalone: true,
})
export class AppComponent {
	public copied = false;
	public color = 'white';

	constructor() {}

	onClickCommandExample($event: MouseEvent): void {
		this.copied = true;

		const target: EventTarget | null = $event.target;

		if (target instanceof Element) {
			const value = target?.textContent as string;
			copyToClipboard(value.replace('$ ', ''));
		}

		setTimeout(() => {
			this.copied = false;
		}, 1000);
	}

	onModeChange(mode: string): void {
		if (mode === 'dark') {
			this.color = 'gray';
		} else {
			this.color = 'white';
		}
	}
}
