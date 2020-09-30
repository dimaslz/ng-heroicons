import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'puzzle-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4C11 2.89543 11.8954 2 13 2C14.1046 2 15 2.89543 15 4V5C15 5.55228 15.4477 6 16 6H19C19.5523 6 20 6.44772 20 7V10C20 10.5523 19.5523 11 19 11H18C16.8954 11 16 11.8954 16 13C16 14.1046 16.8954 15 18 15H19C19.5523 15 20 15.4477 20 16V19C20 19.5523 19.5523 20 19 20H16C15.4477 20 15 19.5523 15 19V18C15 16.8954 14.1046 16 13 16C11.8954 16 11 16.8954 11 18V19C11 19.5523 10.5523 20 10 20H7C6.44772 20 6 19.5523 6 19V16C6 15.4477 5.55228 15 5 15H4C2.89543 15 2 14.1046 2 13C2 11.8954 2.89543 11 4 11H5C5.55228 11 6 10.5523 6 10V7C6 6.44772 6.44772 6 7 6H10C10.5523 6 11 5.55228 11 5V4Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
    stroke-width: inherit;
  }`],
})
export class PuzzleOutlineComponent implements OnInit, OnChanges {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() stroke: number|string = 2;
  @Input() color: string = "";
  @Input() class: string = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const colorHasChanged = changes.color?.previousValue !== changes.color?.currentValue;
    const sizeHasChanged = changes.size?.previousValue !== changes.size?.currentValue;
    const strokeHasChanged = changes.stroke?.previousValue !== changes.stroke?.currentValue;
    const classHasChanged = changes.class?.previousValue !== changes.class?.currentValue;
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