import { Component } from '@angular/core';

@Component({
  selector: 'icons',
  templateUrl: './icons.html',
  styleUrls: ['./icons.scss']
})
export class IconsComponent {
  sizes: number[] = [6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64];
  color = '#333333';
  stroke = 2;
  sizeIndex = 6;
  size = this.sizes[this.sizeIndex];
  type = 'outline';
  class = '';

  constructor() {}

  switchToSolid() {
    this.type = 'solid';
  }

  switchToOutline() {
    this.type = 'outline';
  }

  removeColor() {
    this.color = '';
  }

  changeClass() {
    this.class = 'text-pink-500';
  }

  incrementSize() {
    if (this.sizeIndex < this.sizes.length -1) {
      this.sizeIndex++;
      this.size = this.sizes[this.sizeIndex];
    }
  }

  decrementSize() {
    if (this.sizeIndex > 0) {
      this.sizeIndex--;
      this.size = this.sizes[this.sizeIndex];
    }
  }
}
