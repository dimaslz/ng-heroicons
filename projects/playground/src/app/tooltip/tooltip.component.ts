import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: `./tooltip.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  @Input() componentTag = '';
  @Input() copied = false;
}
