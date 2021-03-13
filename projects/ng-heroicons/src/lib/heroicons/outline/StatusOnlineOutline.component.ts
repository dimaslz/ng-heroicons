import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'status-online-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.63604 18.3639C2.12132 14.8492 2.12132 9.15071 5.63604 5.63599M18.364 5.63599C21.8787 9.15071 21.8787 14.8492 18.364 18.3639M8.46447 15.5355C6.51184 13.5829 6.51184 10.417 8.46447 8.46441M15.5355 8.46441C17.4882 10.417 17.4882 13.5829 15.5355 15.5355M13 11.9999C13 12.5522 12.5523 12.9999 12 12.9999C11.4477 12.9999 11 12.5522 11 11.9999C11 11.4477 11.4477 10.9999 12 10.9999C12.5523 10.9999 13 11.4477 13 11.9999Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
    stroke-width: inherit;
  }`],
})
export class StatusOnlineOutlineComponent implements OnInit, OnChanges {
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