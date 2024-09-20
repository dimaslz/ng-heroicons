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

import { T_OUTLINE_ICONS, T_SOLID_ICONS } from './types';
import { OUTLINE_ICONS, SOLID_ICONS } from './constants';
import { MODULE_CONFIG, NgHeroiconsModuleConfig } from './ng-heroicons.module';

@Component({
  selector: 'ng-heroicons',
	template: `<ng-container #container />`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgHeroiconsComponent implements AfterViewInit, OnChanges {
	@Input() icon: T_SOLID_ICONS | T_OUTLINE_ICONS | undefined = undefined;
	@Input() size: number = 24;
	@Input() color: string = '';
	@Input() stroke: number | undefined = undefined;
	@Input() outline: string | undefined = "";
	@Input() solid: string | undefined = undefined;
	@Input() class: string | undefined = undefined;
	@Input() style: string = '';

	@ViewChild('container', { read: ViewContainerRef }) private container!: ViewContainerRef;

	constructor(
		private element: ElementRef,
		private renderer: Renderer2,
		@Optional() @Inject(MODULE_CONFIG) private config: NgHeroiconsModuleConfig
	) {
		if (this.config.default === 'outline' || this.outline !== undefined) {
			this.stroke = this.stroke || this.config.stroke;
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		const class_ = changes['class']?.currentValue || this.class;
		const solid = changes['solid']?.currentValue !== undefined || this.config.default === 'solid' || undefined;
		const outline = solid ? undefined : (changes['outline']?.currentValue !== undefined || this.config.default === 'outline' || undefined);
		const color = changes['color']?.currentValue || this.color;
		const stroke = solid ? undefined : (changes['stroke']?.currentValue || this.stroke);
		const icon = changes['icon']?.currentValue || this.icon;
		const size = changes['size']?.currentValue || this.size;
		const style = changes['style']?.currentValue || this.style;

		const isSolid = solid !== undefined;
		const isOutline = outline !== undefined;

		if (!icon) {
			throw new Error("Is necessary the icon name")
		}

		this.loadContent(icon, {
			outline: isOutline,
			solid: isSolid,
			size,
			color,
			stroke,
			class_,
			style
		});
	}

	ngAfterViewInit() {
		const class_ = this.class || '';
		const solid = this.solid !== undefined || this.config.default === 'solid' || undefined;
		const outline = solid ? undefined : this.outline !== undefined || this.config.default === 'outline' || undefined;
		const color = this.color;
		const stroke = solid ? undefined : (this.stroke || this.config.stroke);
		const icon = this.icon;
		const size = this.size;
		const style = this.style;

		const isSolid = solid !== undefined;
		const isOutline = outline !== undefined;

		if (!icon) {
			throw new Error("Is necessary the icon name")
		}

		this.loadContent(icon, {
			outline: isOutline,
			solid: isSolid,
			size,
			color,
			stroke,
			class_,
			style
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
			outline: boolean;
			solid: boolean;
			color: string;
			size: number;
			stroke: number | undefined;
			class_: string;
			style: string;
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
