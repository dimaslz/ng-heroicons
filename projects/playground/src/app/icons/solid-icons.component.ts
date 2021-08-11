import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'solid-icons',
  templateUrl: './solid-icons.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SolidIconsComponent {
  @Input() size = 24;
  @Input() color = '#ffffff';
  @Input() stroke = 1;
  @Input() class = '';

  constructor() {}
}
