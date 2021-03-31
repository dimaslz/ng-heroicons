import { Component, OnInit } from '@angular/core';

import copyToClipboard from '../utils/copy-to-clipboard.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public copied = false;

  ngOnInit(): void {
    const node: HTMLScriptElement = document.createElement('script');
    node.src = 'https://plausible.io/js/plausible.js';
    node.type = 'text/javascript';
    node.async = true;
    node.defer = true;
    node.dataset.domain = 'ng-heroicons.dimaslz.dev';

    document.getElementsByTagName('head')[0].appendChild(node);
  }

  onClickCommandExample($event: MouseEvent): void {
    this.copied = true;

    const target: EventTarget | null = $event.target;

    if (target instanceof Element) {
      const value = target?.textContent as string;
      copyToClipboard(value.replace('$ ', ''));
    }

    setTimeout(() => {
      this.copied = false;
    }, 1000);
  }
}
