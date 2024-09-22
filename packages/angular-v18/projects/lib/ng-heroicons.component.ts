import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Inject,
	Input,
	NgModule,
	OnChanges,
	Optional,
	Renderer2,
	SimpleChanges,
	ViewChild,
	ViewContainerRef
} from '@angular/core';

import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

import { T_OUTLINE_ICONS, NgHeroiconsModuleConfig, T_SOLID_ICONS } from './types';
import { MODULE_CONFIG, OUTLINE_ICONS, SOLID_ICONS } from './constants';

function getOutput(value: string | undefined | boolean): boolean {
	if (typeof value === 'boolean') {
		return value;
	}

	return value !== undefined;
}

@Component({
	selector: 'ng-heroicons',
	template: `<ng-container #container />`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponent implements AfterViewInit, OnChanges {
	@Input() icon: T_SOLID_ICONS | T_OUTLINE_ICONS | undefined = undefined;
	@Input() size?: number = 24;
	@Input() color?: string = '';
	@Input() stroke?: number | undefined = undefined;
	@Input({ transform: getOutput }) outline?: string | undefined | boolean = false;
	@Input({ transform: getOutput }) solid?: string | undefined | boolean = false;
	@Input() class?: string | undefined = undefined;
	@Input() style?: string = '';

	@ViewChild('container', { read: ViewContainerRef }) private container!: ViewContainerRef;

	constructor(
		private element: ElementRef,
		private renderer: Renderer2,
		@Optional() @Inject(MODULE_CONFIG) private config: NgHeroiconsModuleConfig
	) {
		this.stroke = this.stroke || this.config.stroke;
		this.outline = this.config.default === 'outline';
		this.solid = this.config.default === 'solid';
	}

	ngOnChanges(changes: SimpleChanges) {
		const icon = changes['icon']?.currentValue || this.icon;
		if (!icon) {
			throw new Error("Is necessary the icon name")
		}


		let solid;
		let outline;

		if (!changes['solid']) {
			solid = this.solid;
		} else {
			solid = typeof changes['solid']?.currentValue === 'boolean' ? changes['solid']?.currentValue : changes['solid']?.currentValue !== undefined;
		}

		if (!changes['outline']) {
			outline = this.outline;
		} else {
			if (changes['outline'].firstChange) {}
			outline = typeof changes['outline']?.currentValue === 'boolean' ? changes['outline']?.currentValue : changes['outline']?.currentValue !== undefined;
		}

		if (this.config.default === 'outline') {
			outline = solid ? false : this.config.default === 'outline';
		} else if (this.config.default === 'solid') {
			solid = outline ? false : this.config.default === 'solid';
		}

		const stroke = solid
			? undefined
			: (changes['stroke']?.currentValue || this.stroke || undefined);

		const size = changes['size']?.currentValue || this.size;
		const color = changes['color']?.currentValue || this.color;
		const class_ = changes['class']?.currentValue || this.class;
		const style = changes['style']?.currentValue || this.style;

		this.solid = solid;
		this.outline = outline;
		this.stroke = stroke;
		this.class = class_;
		this.style = style;

		this.loadContent(icon, {
			outline,
			solid,
			size,
			color,
			stroke,
			class_,
			style
		});
	}

	ngAfterViewInit() {
		const icon = this.icon;
		if (!icon) {
			throw new Error("Is necessary the icon name")
		}

		let solid = this.solid;
		let outline = this.outline;

		if (this.config.default === 'outline') {
				outline = solid ? false : this.config.default === 'outline';
		} else if (this.config.default === 'solid') {
				solid = outline ? false : this.config.default === 'solid';
		}

		this.solid = solid;
		this.outline = outline;

		this.loadContent(icon, {
			outline,
			solid,
			size: this.size,
			color: this.color,
			stroke: solid ? undefined : this.stroke || undefined,
			class_: this.class || '',
			style: this.style
		});
	}

	loadContent(
		icon: string,
		{
			outline,
			solid,
			size,
			color,
			stroke,
			class_,
			style,
		}: {
			outline: boolean | string | undefined;
			solid: boolean | string | undefined;
			color: string | undefined;
			size: number | undefined;
			stroke: number | undefined;
			class_: string;
			style: string | undefined;
		}
	) {
		let element: any;

		if (!this.container) return;

		this.container.clear();

		if (solid) {
			if (`${upperFirst(camelCase(icon))}SolidIconComponent` in SOLID_ICONS) {
				element = this.container.createComponent(
					(SOLID_ICONS as any)[`${upperFirst(camelCase(icon))}SolidIconComponent`]
				)
			}
		} else if (outline) {
			if (`${upperFirst(camelCase(icon))}OutlineIconComponent` in OUTLINE_ICONS) {
				element = this.container.createComponent(
					(OUTLINE_ICONS as any)[`${upperFirst(camelCase(icon))}OutlineIconComponent`]
				)

			}
		}

		if (!element) {
			throw new Error(`The icon name <${icon}> does not exists on ${solid ? 'solid' : 'outline'} icons.`);
		}

		element.instance.svgStyle = style;
		element.instance.stroke = stroke;
		element.instance.size = size;
		element.instance.color = color;

		this.renderer.setAttribute(
			element?.location.nativeElement,
			"class",
			this.element.nativeElement.className || class_ || ''
		)
  }
}

@NgModule({
	declarations: [DynamicComponent],
	exports: [DynamicComponent],
})
export class DynamicIconsModule {}