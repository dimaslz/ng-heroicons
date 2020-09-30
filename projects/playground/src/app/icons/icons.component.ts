import { Component, OnDestroy, OnInit } from '@angular/core';
import throttle from 'lodash.throttle';

@Component({
  selector: 'icons',
  templateUrl: './icons.html',
  styleUrls: ['./icons.scss']
})
export class IconsComponent implements OnInit, OnDestroy {
  sizes: number[] = [6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64];
  color = '#333333';
  stroke = 2;
  sizeIndex = 6;
  size = this.sizes[this.sizeIndex];
  type = 'outline';
  class = '';
  tooltipContent = '';
  componentTagCopied = false;

  constructor() {
    this.onMouseOverHandler = throttle(this.onMouseOverHandler.bind(this), 200);
    this.onMouseLeaveHandler = throttle(this.onMouseLeaveHandler.bind(this), 200);
    this.onClickIcon = this.onClickIcon.bind(this);
  }

  ngOnInit() {
    document.querySelector('.Icons').addEventListener('mouseover', this.onMouseOverHandler);
    document.querySelector('.Icons').addEventListener('mouseleave', this.onMouseLeaveHandler);
  }

  ngOnDestroy() {
    document.querySelector('.Icons').removeEventListener('mouseover', this.onMouseOverHandler);
    document.querySelector('.Icons').removeEventListener('mouseleave', this.onMouseLeaveHandler);
  }

  onMouseOverHandler($event: Event) {
    if (/IconWrapper/.test(($event.target as HTMLElement).className)) {
      const iconName = ($event.target as HTMLElement).querySelector('.IconWrapper__name');
      const componentTag = iconName?.textContent.trim().replace(/\s+/g, '-');

      if (componentTag) {
        this.tooltipContent = `<${componentTag}-${this.type}-icon></${componentTag}-${this.type}-icon>`;
        $event.target.addEventListener('click', this.onClickIcon);
      }
    } else {
      this.tooltipContent = '';
      $event.target.removeEventListener('click', this.onClickIcon);
    }
  }

  onClickIcon() {
    this.copyToClipboard(this.tooltipContent);
    this.componentTagCopied = true;
    const time = setTimeout(() => {
      this.componentTagCopied = false;
      clearTimeout(time);
    }, 500);
  }

  onMouseLeaveHandler($event: Event) {
    this.tooltipContent = '';
  }

  copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

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
