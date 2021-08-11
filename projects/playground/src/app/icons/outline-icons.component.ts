import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'outline-icons',
  templateUrl: './outline-icons.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class OutlineIconsComponent {
  @Input() size = 24;
  @Input() color = '#FFFFFF';
  @Input() stroke = 2;
  @Input() class = '';

  constructor() {}
}
