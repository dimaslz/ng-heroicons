import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import { DarkModeModule } from '@/components/darkmode-toggle/darkmode-toggle.module';
import { IconModule } from '@/components/icon/icon.module';
import copyToClipboard from '@/utils/copy-to-clipboard.utils';

import { IconsModule } from '../../icons/icons.module';

@Component({
	selector: 'home-page',
	templateUrl: './home.component.html',
	standalone: true,
	imports: [
		CommonModule,

		NgHeroiconsModule,
		IconsModule,
		IconModule,
		DarkModeModule,
	],
})
export class HomePageComponent {
	public copied = false;
	public color = 'white';

	constructor(@Inject(PLATFORM_ID) private platformId: object) {
		if (isPlatformBrowser(this.platformId)) {
			const node: HTMLScriptElement = document.createElement('script');
			node.src = 'https://plausible.io/js/plausible.js';
			node.type = 'text/javascript';
			node.async = true;
			node.defer = true;
			node.dataset['domain'] = 'ng-heroicons.dimaslz.dev';

			document.getElementsByTagName('head')[0].appendChild(node);
		}
	}

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
