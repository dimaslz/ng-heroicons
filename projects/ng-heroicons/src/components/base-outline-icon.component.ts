import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'base-outline-icon',
  template: `.`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
    stroke-width: inherit;
  }`],
})
export class BaseOutlineIconComponent implements OnInit, OnChanges {
  @Input() size: number = 24;
  @Input() stroke: number|string = 1;
  @Input() color: string = "";
  @Input() class: string = "";
  @Input() svgClass: string = "";
  @Input() svgStyle: string = "";

  public style: string = "";

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
    let style: string[] = [];
    if (this.size) {
      style.push(`width: ${this.size}px; height: ${this.size}px;`);
    }
    if (this.color) {
      style.push(`color: ${this.color};`);
    }
    if (this.stroke) {
      style.push(`stroke-width: ${this.stroke}px;`);
    }

    this.style = this.svgStyle + style.join(' ');
  }
}