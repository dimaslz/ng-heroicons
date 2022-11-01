import { Component, ElementRef, HostBinding, inject, Inject, OnInit, Optional } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SomeService } from './some.service';

@Component({
  selector: 'some-component',
  templateUrl: './some.component.html',
  // providers: [SomeService]
})
export class SomeComponent implements OnInit {
  @HostBinding('innerHTML') template?: SafeHtml;
  // @HostBinding('localName') localName?: SafeHtml;
  private readonly sanitizer = inject(DomSanitizer);

  constructor(
    public value: SomeService,
    private element: ElementRef,
  ) {
    // console.log("SomeComponent", value)
    console.log("DDD", value.getOptions())
  }

  ngOnInit() {
    this.element.nativeElement.style.setProperty(
      'color',
      `var(--ng-icon__color, blue)`,
      '',
    )
    console.log("tagName", this.element.nativeElement.style.setProperty(
      'stroke-width',
      `var(--ng-icon__stroke-width)`,
      '',
    ))
    this.template = this.sanitizer.bypassSecurityTrustHtml("holaaaa")
    // console.log("tagName", this.element)
    // console.log("thisss", this.template)
    // this.template = "FDHKFDKL"
  }
}
