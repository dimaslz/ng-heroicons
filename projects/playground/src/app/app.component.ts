import { Component } from '@angular/core';

import copyToClipboard from '../utils/copy-to-clipboard.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onClickCommandExample($event: MouseEvent): void {
    const target: EventTarget | null = $event.target;

    if (target instanceof Element) {
      const value = target?.textContent as string;
      copyToClipboard(value.replace('$ ', ''));
    }
  }
}
