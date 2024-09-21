import { isPlatformBrowser } from '@angular/common';
import {
	Component,
	EventEmitter,
	Inject,
	Output,
} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

@Component({
	selector: 'app-darkmode-toggle',
	template: `<div class="flex p-4">
  <button *ngIf="!darkmode" (click)="toggleDarkMode()" class="DarkModeButton flex p-2 focus:outline-none text-gray-800 hover:opacity-75 items-center">
    <moon-outline-icon></moon-outline-icon>
    <div class="flex items-center justify-center ml-2 text-sm">go to dark</div>
  </button>
  <button *ngIf="darkmode" (click)="toggleDarkMode()" class="LightModeButton flex p-2 focus:outline-none text-white hover:opacity-75 items-center">
    <sun-outline-icon></sun-outline-icon>
    <div class="flex items-center justify-center ml-2 text-sm">go to light</div>
  </button>
</div>`
})
export class DarkModeComponent {
	@Output() update = new EventEmitter();

	public darkmode = false;

	constructor(@Inject(PLATFORM_ID) private platformId: object	) {
		if (isPlatformBrowser(this.platformId)) {
			this.darkmode = window?.matchMedia('(prefers-color-scheme: dark)').matches;
			this.switchMode();
		}
	}

	toggleDarkMode(): void {
		this.darkmode = !this.darkmode;
		this.switchMode();
	}

	switchMode(): void {
		if (this.darkmode) {
			document.querySelector('html')?.classList.add('dark');
		} else {
			document.querySelector('html')?.classList.remove('dark');
		}

		this.update.emit(!this.darkmode ? 'dark' : 'light');
	}
}
