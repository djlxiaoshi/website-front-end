import {AfterViewInit, Directive, ElementRef, HostListener, NgZone} from '@angular/core';
const Ps = require('perfect-scrollbar');

@Directive({
  selector: '[appSealScroll]'
})
export class SealScrollDirective implements AfterViewInit {

  constructor(
    private zone: NgZone,
    public el: ElementRef) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      Ps.initialize(this.el.nativeElement, {
        swipeEasing: false,
        suppressScrollX: true,
        handlers: ['click-rail', 'drag-scrollbar', 'keyboard', 'wheel'],
      });
    });
  }

  @HostListener('click', ['$event']) onClick(ev) {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        Ps.update(this.el.nativeElement);
      }, 450);
    });
  };
}
