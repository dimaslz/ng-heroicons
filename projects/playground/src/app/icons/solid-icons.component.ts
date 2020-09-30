import { Component, Input } from '@angular/core';

@Component({
  selector: 'solid-icons',
  templateUrl: './solid-icons.html',
})
export class SolidIconsComponent {
  @Input() size = 24;
  @Input() color = '#333333';
  @Input() stroke = 1;
  @Input() class = "";

  constructor() {
  }
}
