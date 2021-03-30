import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-darkmode-toggle',
  template: `<div class="flex p-4">
  <button *ngIf="!darkmode" (click)="toggleDarkMode()" class="flex p-2 focus:outline-none text-gray-800 hover:opacity-75">
    <moon-outline-icon></moon-outline-icon>
    <div class="flex items-center justify-center ml-2 text-sm">go to dark</div>
  </button>
  <button *ngIf="darkmode" (click)="toggleDarkMode()" class="flex p-2 focus:outline-none text-white hover:opacity-75">
    <sun-outline-icon></sun-outline-icon>
    <div class="flex items-center justify-center ml-2 text-sm">go to light</div>
  </button>
</div>`
})
export class DarkModeComponent implements OnInit {
  public darkmode = false;

  ngOnInit(): void {
    this.darkmode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.switchMode();
  }

  toggleDarkMode(): void {
    this.darkmode = !this.darkmode;
    this.switchMode();
  }

  switchMode(): void {
    if (this.darkmode) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }
}
