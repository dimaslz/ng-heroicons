import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    style="enable-background:new 0 0 250 250"
    xml:space="preserve"
    [style]="style"
  >
    <path
      style="fill:#dd0031"
      d="M125 30 31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z"
    ></path>
    <path
      style="fill:#c3002f"
      d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z"
    ></path>
    <path
      d="M125 52.1 66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z"
      style="fill:#fff"
    ></path>
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit, OnChanges {
  @Input() style = '';
  @Input() size = 24;
  @Input() stroke: number | string = 2;
  @Input() color = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const colorHasChanged =
      changes.color?.previousValue !== changes.color?.currentValue;
    const sizeHasChanged =
      changes.size?.previousValue !== changes.size?.currentValue;
    const strokeHasChanged =
      changes.stroke?.previousValue !== changes.stroke?.currentValue;

    if (colorHasChanged || sizeHasChanged || strokeHasChanged) {
      this.style = '';
      this.renderStyle();
    }
  }

  ngOnInit(): void {
    this.renderStyle();
  }

  renderStyle(): void {
    const style = [];
    if (this.size) {
      style.push(`width: ${this.size}px; height: ${this.size}px;`);
    }
    if (this.color) {
      style.push(`color: ${this.color};`);
    }

    this.style = style.join(' ') + this.style;
  }
}
