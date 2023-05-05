import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private renderer: Renderer2, private ele: ElementRef) { }

  @HostBinding('style.backgroundColor') background: string = 'blue';

}
