/* eslint-disable @typescript-eslint/unbound-method, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import throttle from 'lodash.throttle';
import { Subscription } from 'rxjs';

import copyToClipboard from '../../utils/copy-to-clipboard.utils';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() color = 'white';

  clipboardTime: ReturnType<typeof setTimeout> | null = null;
  query: string | null = '';
  classColor = 'white';
  colors: string[] = [
    'white',
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
  ];
  sizes: number[] = [6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64];
  stroke = 1;
  sizeIndex = 8;
  size = this.sizes[this.sizeIndex];
  type = 'outline';
  class = '';
  tooltipContent = '';
  componentTagCopied = false;
  form = new FormGroup({
    search: new FormControl('')
  });
  formSubscription$: Subscription | undefined = new Subscription();
  debounceSearch: ReturnType<typeof setTimeout> | null = null;
  empty = false;
  loading = false;

  constructor() {
    this.onMouseOverHandler = throttle(this.onMouseOverHandler.bind(this), 200);
    this.onMouseLeaveHandler = throttle(
      this.onMouseLeaveHandler.bind(this),
      200
    );
    this.onClickIcon = this.onClickIcon.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  ngOnInit(): void {
    document
      .querySelector('.Icons')
      ?.addEventListener('mouseover', this.onMouseOverHandler);
    document
      .querySelector('.Icons')
      ?.addEventListener('mouseleave', this.onMouseLeaveHandler);

    this.formSubscription$ = this.form
      .get('search')
      ?.valueChanges.subscribe(this.onChangeSearch);
  }

  ngOnChanges({ color }: SimpleChanges): void {
    if (!color) {
      return;
    }

    const { currentValue, firstChange } = color;
    if (!firstChange) {
      this.applyColor(currentValue as string);
    }
  }

  ngOnDestroy(): void {
    document
      .querySelector('.Icons')
      ?.removeEventListener('mouseover', this.onMouseOverHandler);
    document
      .querySelector('.Icons')
      ?.removeEventListener('mouseleave', this.onMouseLeaveHandler);
    if (this.formSubscription$) {
      this.formSubscription$.unsubscribe();
    }
  }

  onMouseOverHandler($event: Event): void {
    if (/IconWrapper/.test(($event.target as HTMLElement).className)) {
      const iconName = ($event.target as HTMLElement).querySelector(
        '.IconWrapper__name'
      );
      const componentTag = iconName?.textContent?.trim().replace(/\s+/g, '-');

      if (componentTag) {
        this.tooltipContent = `<${componentTag}-${this.type}-icon></${componentTag}-${this.type}-icon>`;
        $event.target?.addEventListener('click', this.onClickIcon);
      }
    } else {
      this.tooltipContent = '';
      $event.target?.removeEventListener('click', this.onClickIcon);
    }
  }

  onClickIcon(): void {
    if (this.clipboardTime) {
      clearTimeout(this.clipboardTime);
    }

    copyToClipboard(this.tooltipContent);
    this.componentTagCopied = true;
    this.clipboardTime = setTimeout(() => {
      this.componentTagCopied = false;
    }, 1000);
  }

  onMouseLeaveHandler(): void {
    this.tooltipContent = '';
  }

  switchToSolid(): void {
    this.type = 'solid';

    if (this.query) {
      this.loading = true;
      setTimeout(() => {
        this.showIconsWhenMatchWithQuery(this.query);
        this.loading = false;
      });
    }
  }

  switchToOutline(): void {
    this.type = 'outline';

    if (this.query) {
      this.loading = true;
      setTimeout(() => {
        this.showIconsWhenMatchWithQuery(this.query);
        this.loading = false;
      });
    }
  }

  removeColor(): void {
    this.color = '';
  }

  changeClass(): void {
    this.class = 'text-pink-500';
  }

  incrementSize(): void {
    if (this.sizeIndex < this.sizes.length - 1) {
      this.sizeIndex++;
      this.size = this.sizes[this.sizeIndex];
    }
  }

  decrementSize(): void {
    if (this.sizeIndex > 0) {
      this.sizeIndex--;
      this.size = this.sizes[this.sizeIndex];
    }
  }

  showIconsWhenMatchWithQuery(query: string | null): void {
    if (!query) { return; }

    try {
      query = query.trim().replace(/\s+/g, '-').toLowerCase();
      const icons: NodeListOf<Element> = document.querySelectorAll(
        `.IconWrapper .IconWrapper__icon:not([id*=${query}])`
      );
      const iconElements: Element[] = Array.from(icons);

      iconElements.forEach((element: Element) => {
        element.parentElement?.classList.add('hidden');
      });
    } catch (err) { }
    this.isEmpty();
  }

  showAllIcons(): void {
    try {
      const icons: NodeListOf<Element> = document.querySelectorAll(
        '.IconWrapper[class*="hidden"]'
      );
      const iconElements: Element[] = Array.from(icons);

      iconElements.forEach((element: Element) => {
        element.classList.remove('hidden');
      });
    } catch (err) { }
  }

  isEmpty(): void {
    try {
      const icons: NodeListOf<Element> = document.querySelectorAll(
        '.IconWrapper:not([class*=hidden])'
      );
      const iconElements: Element[] = Array.from(icons);
      this.empty = iconElements.length === 0;
    } catch (err) {
      this.empty = true;
    }
  }

  onChangeSearch(query: string | null): void {
    this.query = query;
    if (this.debounceSearch) {
      clearTimeout(this.debounceSearch);
    }

    this.debounceSearch = setTimeout(() => {
      this.loading = true;
      this.showAllIcons();
      this.showIconsWhenMatchWithQuery(query);
      this.loading = false;
    }, 200);

    return;
  }

  onClickColor(color: string): void {
    this.applyColor(color);
  }

  applyColor(color: string): void {
    this.classColor = color === 'white' ? 'text-white' : `text-${color}-400`;
  }

  getColor(color: string): string {
    return color === 'white'
      ? 'bg-white text-gray-900'
      : `bg-${color}-400 text-${color}-900`;
  }
}
