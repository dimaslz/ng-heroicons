import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'newspaper-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V15C14 16.1046 14.8954 17 16 17H4C2.89543 17 2 16.1046 2 15V5ZM5 6H11V10H5V6ZM11 12H5V14H11V12Z" fill="currentColor"/>
<path d="M15 7H16C17.1046 7 18 7.89543 18 9V14.5C18 15.3284 17.3284 16 16.5 16C15.6716 16 15 15.3284 15 14.5V7Z" fill="currentColor"/>
</svg>
`,
})
export class NewspaperSolidComponent implements OnInit {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() color: string = "#374151";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const colorHasChanged = changes.color?.previousValue !== changes.color?.currentValue;
    const sizeHasChanged = changes.size?.previousValue !== changes.size?.currentValue;
    if (colorHasChanged || sizeHasChanged) {
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

    this.style = style.join(' ') + this.style;
  }
}