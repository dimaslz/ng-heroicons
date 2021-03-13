import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'status-offline-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.364 5.63605C21.8787 9.15077 21.8787 14.8493 18.364 18.364M18.364 18.364L15.5355 15.5355M18.364 18.364L21 21M15.5355 8.46447C17.4882 10.4171 17.4882 13.5829 15.5355 15.5355M15.5355 15.5355L12.7071 12.7071M8.46447 15.5355C7.66839 14.7395 7.19687 13.7417 7.04991 12.7068M5.63604 18.364C3.13732 15.8652 2.41501 12.2628 3.46913 9.12598M11.2929 11.2929C11.4739 11.1119 11.7239 11 12 11C12.5523 11 13 11.4477 13 12C13 12.2761 12.8881 12.5261 12.7071 12.7071M11.2929 11.2929L3 3M11.2929 11.2929L12.7071 12.7071" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
    stroke-width: inherit;
  }`],
})
export class StatusOfflineOutlineComponent implements OnInit, OnChanges {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() stroke: number|string = 2;
  @Input() color: string = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const colorHasChanged = changes.color?.previousValue !== changes.color?.currentValue;
    const sizeHasChanged = changes.size?.previousValue !== changes.size?.currentValue;
    const strokeHasChanged = changes.stroke?.previousValue !== changes.stroke?.currentValue;

    if (colorHasChanged || sizeHasChanged || strokeHasChanged) {
      this.style = "";
      this.renderStyle();
    }
  }

  ngOnInit(): void {
    this.renderStyle();
  }

  renderStyle() {
    let style = [];
    if (this.size) {
      style.push(`width: ${this.size}px; height: ${this.size}px;`);
    }
    if (this.color) {
      style.push(`color: ${this.color};`);
    }
    if (this.stroke) {
      style.push(`stroke-width: ${this.stroke}px;`);
    }

    this.style = style.join(' ') + this.style;
  }
}