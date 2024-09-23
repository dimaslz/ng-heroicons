import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
	AfterViewInit,
	Component,
	Inject,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	PLATFORM_ID,
	SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import copyToClipboard from '@/utils/copy-to-clipboard.utils';

@Component({
	selector: 'icons',
	templateUrl: './icons.component.html',
	styleUrls: ['./icons.component.scss'],
})
export class IconsComponent
	implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
	@Input() color = 'white';

	clipboardTime: ReturnType<typeof setTimeout> | null = null;
	query: string | null = '';
	classColor = 'white';
	colors: string[] = [
		'white',
		'gray',
		'red',
		'yellow',
		'green',
		'blue',
		'indigo',
		'purple',
	];
	sizes: number[] = [6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64];
	stroke = 1;
	sizeIndex = 8;
	counter = 316;
	size = this.sizes[this.sizeIndex];
	type = 'outline';
	class = '';
	tooltipContent = '';
	componentTagCopied = false;
	form = new FormGroup({
		search: new FormControl(''),
	});
	formSubscription$: Subscription | undefined = new Subscription();
	debounceSearch: ReturnType<typeof setTimeout> | null = null;
	empty = false;
	loading = false;

	constructor(
		@Inject(PLATFORM_ID) private platformId: object,
		@Inject(DOCUMENT) private document: Document,
		private router: Router,
	) {
		this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
		this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
		this.onClickIcon = this.onClickIcon.bind(this);
		this.onChangeSearch = this.onChangeSearch.bind(this);

		const url = new URL(this.document.location.href);
		if (url.searchParams.get('type') === 'solid') {
			this.switchToSolid();
		}
	}

	ngAfterViewInit(): void {
		if (this.isBrowser()) {
			const url = new URL(this.document.location.href);
			if (url.searchParams.get('icon')) {
				this.onScrollTo(url.searchParams.get('icon')!);
			}
		}
	}

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			document
				.querySelector('.Icons')
				?.addEventListener('mouseover', this.onMouseOverHandler);
			document
				.querySelector('.Icons')
				?.addEventListener('mouseleave', this.onMouseLeaveHandler);

			this.counter = this.getIconVisibleElements().length;
		}

		this.formSubscription$ = this.form
			.get('search')
			?.valueChanges.subscribe(this.onChangeSearch);
	}

	ngOnChanges({ color }: SimpleChanges): void {
		if (!color) {
			return;
		}

		const { currentValue, firstChange } = color;
		if (!firstChange) {
			this.applyColor(currentValue as string);
		}
	}

	ngOnDestroy(): void {
		if (isPlatformBrowser(this.platformId)) {
			this.document
				.querySelector('.Icons')
				?.removeEventListener('mouseover', this.onMouseOverHandler);
			this.document
				.querySelector('.Icons')
				?.removeEventListener('mouseleave', this.onMouseLeaveHandler);
		}

		if (this.formSubscription$) {
			this.formSubscription$.unsubscribe();
		}
	}

	isBrowser() {
		return isPlatformBrowser(this.platformId);
	}

	onScrollTo(id: string) {
		const element = this.document.querySelector(`#${id}`);
		if (element) {
			const elementYOffset = element.clientHeight / 2;
			const yOffset = window.document.body.clientHeight / 2;
			const y =
				element.getBoundingClientRect().top +
				window.scrollY -
				yOffset +
				elementYOffset;

			window.scrollTo({ top: y, behavior: 'smooth' });

			element.classList.add('outline');
			element.classList.add('animate-pulse');
			setTimeout(() => {
				element.classList.remove('outline');
				element.classList.remove('animate-pulse');
				this.router.navigate([], {
					queryParams: { icon: null },
					queryParamsHandling: 'merge',
				});
			}, 2000);
		}
	}

	getIconVisibleElements(query?: string): Element[] {
		const icons: NodeListOf<Element> = this.document.querySelectorAll(
			query || `.IconWrapper .IconWrapper__icon`,
		);

		return Array.from(icons);
	}

	onMouseOverHandler($event: Event): void {
		if (/IconWrapper__type/.test(($event.target as HTMLElement).className)) {
			const type = ($event.target as HTMLElement).textContent?.trim();
			const iconName = (
				$event.target as HTMLElement
			).parentElement?.parentElement?.querySelector('.IconWrapper__name');

			const componentTag = iconName?.textContent?.trim().replace(/\s+/g, '-');

			if (componentTag) {
				if (type === 'component') {
					this.tooltipContent = `<${componentTag}-${this.type}-icon />`;
				} else {
					this.tooltipContent = `<ng-heroicons icon="${componentTag}" ${this.type} />`;
				}

				$event.target?.addEventListener('click', this.onClickIcon);
			}
		} else {
			this.tooltipContent = '';
			$event.target?.removeEventListener('click', this.onClickIcon);
		}
	}

	onClickIcon(): void {
		if (this.clipboardTime) {
			clearTimeout(this.clipboardTime);
		}

		copyToClipboard(this.tooltipContent);
		this.componentTagCopied = true;
		this.clipboardTime = setTimeout(() => {
			this.componentTagCopied = false;
		}, 1000);
	}

	onMouseLeaveHandler(): void {
		this.tooltipContent = '';
	}

	switchToSolid(): void {
		this.type = 'solid';

		if (!/type=solid/i.test(this.document.location.search)) {
			this.router.navigate([], {
				queryParams: { type: this.type },
				queryParamsHandling: 'merge',
			});
		}

		if (this.query) {
			this.loading = true;
			setTimeout(() => {
				this.showIconsWhenMatchWithQuery(this.query);
				this.loading = false;
			}, 1);
		}
	}

	switchToOutline(): void {
		this.type = 'outline';

		this.router.navigate([], {
			queryParams: { type: this.type },
			queryParamsHandling: 'merge',
		});

		if (this.query) {
			this.loading = true;
			setTimeout(() => {
				this.showIconsWhenMatchWithQuery(this.query);
				this.loading = false;
			}, 1);
		}
	}

	removeColor(): void {
		this.color = '';
	}

	changeClass(): void {
		this.class = 'text-pink-500';
	}

	incrementSize(): void {
		if (this.sizeIndex < this.sizes.length - 1) {
			this.sizeIndex++;
			this.size = this.sizes[this.sizeIndex];
		}
	}

	decrementSize(): void {
		if (this.sizeIndex > 0) {
			this.sizeIndex--;
			this.size = this.sizes[this.sizeIndex];
		}
	}

	showIconsWhenMatchWithQuery(query: string | null): void {
		if (!query) {
			this.counter = this.getIconVisibleElements(`.IconWrapper`).length;

			return;
		}

		try {
			query = query?.trim().replace(/\s+/g, '-').toLowerCase() || '';
			const iconElements: Element[] = this.getIconVisibleElements(
				`.IconWrapper:not([id*=${query}])`,
			);

			iconElements.forEach((element: Element) => {
				element.parentElement?.classList.add('hidden');
			});

			this.counter = this.getIconVisibleElements(
				`.IconWrapper[id*=${query}]`,
			).length;
		} catch (err: any) {
			console.error(err.message);
		}
		this.isEmpty();
	}

	showAllIcons(): void {
		try {
			const icons: NodeListOf<Element> = this.document.querySelectorAll(
				'icon-wrapper[class*="hidden"]',
			);
			const iconElements: Element[] = Array.from(icons);

			iconElements.forEach((element: Element) => {
				element?.classList.remove('hidden');
			});
		} catch (err: any) {
			console.error(err.message);
		}
	}

	isEmpty(): void {
		try {
			const icons: NodeListOf<Element> = this.document.querySelectorAll(
				'icon-wrapper:not([class*=hidden])',
			);
			const iconElements: Element[] = Array.from(icons);
			this.empty = iconElements.length === 0;
		} catch (err: any) {
			console.error(err.message);

			this.empty = true;
		}
	}

	onChangeSearch(query: string | null): void {
		this.query = query;
		// if (this.debounceSearch) {
		// 	clearTimeout(this.debounceSearch);
		// }

		// this.debounceSearch = setTimeout(() => {
		// 	this.loading = true;
		// 	this.showAllIcons();
		// 	this.showIconsWhenMatchWithQuery(query);
		// 	this.loading = false;
		// }, 200);

		this.showAllIcons();
		this.showIconsWhenMatchWithQuery(query);

		return;
	}

	onClickColor(color: string): void {
		this.applyColor(color);
	}

	applyColor(color: string): void {
		this.classColor = color === 'white' ? 'text-white' : `text-${color}-400`;
	}

	getColor(color: string): string {
		return color === 'white'
			? 'bg-white text-gray-900'
			: `bg-${color}-400 text-${color}-900`;
	}
}
