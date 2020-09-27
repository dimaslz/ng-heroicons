import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'arrows-expand-solid-icon',
template: `<svg [style]="style" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8V4M3 4H7M3 4L7 8M15 8V4M15 4H11M15 4L11 8M3 12V16M3 16H7M3 16L7 12M15 16L11 12M15 16V12M15 16H11" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
})
export class ArrowsExpandSolidComponent implements OnInit {
@Input() style: string = "";
@Input() size: number = 24;
@Input() color: string = "#374151";

constructor() { }

ngOnInit(): void {
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