import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import copyToClipboard from '@/utils/copy-to-clipboard.utils';

@Component({
	selector: 'icon-wrapper',
	template: `
		<div class="IconWrapper" [id]="component">
			<button
				(click)="copyLink(component)"
				class="absolute top-1 right-1 z-10 dark:bg-slate-800 dark:hover:bg-slate-900 bg-slate-200 hover:bg-slate-300 p-1 rounded-sm"
			>
				<ng-heroicons icon="link" outline [size]="16" />
			</button>
			<div class="IconWrapper__icon">
				<ng-content />
			</div>
			<div class="IconWrapper__name">{{ component }}</div>

			<div
				class="size-full flex absolute inset-0 flex-col justify-center opacity-0 hover:opacity-100 p-1 space-y-1"
			>
				<div
					class="IconWrapper__type size-full dark:bg-slate-800/90 hover:dark:bg-slate-900/90 bg-slate-200/95 hover:bg-slate-300/95 flex items-center justify-center text-center text-xs"
				>
					component
				</div>
				<div
					class="IconWrapper__type size-full dark:bg-slate-800/90 hover:dark:bg-slate-900/90 bg-slate-200/95 hover:bg-slate-300/95 flex items-center justify-center text-center text-xs"
				>
					dynamic component
				</div>
			</div>
		</div>
	`,
	imports: [CommonModule, NgHeroiconsModule],
	standalone: true,
})
export class IconWrapperComponent {
	@Input() component: string = '';

	constructor(@Inject(DOCUMENT) private document: Document) {}

	copyLink(icon: string) {
		const url = new URL(`${this.document.location.href}`);
		url.searchParams.append('icon', icon);

		copyToClipboard(url.toString());
	}
}
