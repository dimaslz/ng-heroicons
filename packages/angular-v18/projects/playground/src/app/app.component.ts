import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgHeroiconsModule } from '../../../lib/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgHeroiconsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'playground';
}
