import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'base-solid-icon',
  template: '.',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class BaseSolidIconComponent implements OnInit, OnChanges {
  @Input() size: number = 24;
  @Input() color: string = "";
  @Input() class: string = "";
  @Input() style: string = "";

  public _style: string = "";
  public _class: string = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const colorHasChanged = changes["color"]?.previousValue !== changes["color"]?.currentValue;
    const sizeHasChanged = changes["size"]?.previousValue !== changes["size"]?.currentValue;

    if (colorHasChanged || sizeHasChanged) {
      this._style = "";
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

    this.style = style.join(' ') + ' ' + this.style;
  }
}