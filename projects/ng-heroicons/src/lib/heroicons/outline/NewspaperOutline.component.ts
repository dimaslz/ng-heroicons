import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'newspaper-outline-icon',
template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 20H5C3.89543 20 3 19.1046 3 18L3 6C3 4.89543 3.89543 4 5 4L15 4C16.1046 4 17 4.89543 17 6V7M19 20C17.8954 20 17 19.1046 17 18L17 7M19 20C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7L17 7M13 4L9 4M7 16H13M7 8H13V12H7V8Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
})
export class NewspaperOutlineComponent implements OnInit {
@Input() style: string = "";
@Input() size: number = 24;
@Input() stroke: number|string = 1;
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
  if (this.stroke) {
    style.push(`stroke-width: ${this.stroke}px;`);
  }

  this.style = style.join(' ') + this.style;

}

}