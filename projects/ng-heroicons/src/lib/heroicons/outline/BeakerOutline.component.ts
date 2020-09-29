import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'beaker-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.428 15.4282C19.1488 15.149 18.7932 14.9587 18.406 14.8812L16.0185 14.4037C14.7101 14.1421 13.3519 14.324 12.1585 14.9207L11.8411 15.0793C10.6477 15.676 9.28948 15.8579 7.98113 15.5963L6.04938 15.2099C5.39366 15.0788 4.71578 15.284 4.24294 15.7569M7.9998 4H15.9998L14.9998 5V10.1716C14.9998 10.702 15.2105 11.2107 15.5856 11.5858L20.5856 16.5858C21.8455 17.8457 20.9532 20 19.1714 20H4.82823C3.04642 20 2.15409 17.8457 3.41401 16.5858L8.41402 11.5858C8.78909 11.2107 8.9998 10.702 8.9998 10.1716V5L7.9998 4Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
})
export class BeakerOutlineComponent implements OnInit, OnChanges {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() stroke: number|string = 1;
  @Input() color: string = "#374151";

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
      style.push(`width: ${this.size}; height: ${this.size};`);
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