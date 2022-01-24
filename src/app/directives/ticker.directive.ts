import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tickerHost]',
})
export class TickerDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
