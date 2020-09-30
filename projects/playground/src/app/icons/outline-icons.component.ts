import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'outline-icons',
  templateUrl: './outline-icons.html',
  encapsulation: ViewEncapsulation.None,
})
export class OutlineIconsComponent {
  @Input() size = 24;
  @Input() color = '#333333';
  @Input() stroke = 1;
  @Input() class = "";
  
  constructor() {
  }
}
