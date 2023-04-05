import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {

  constructor(private renderer: Renderer2, private ele:ElementRef) {

   }

   @HostListener('mouseover') onMouseOver(event: MouseEvent): void {
    // Ensure that renderer is not undefined before using it
    this.renderer?.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
    this.renderer?.setStyle(this.ele.nativeElement, 'padding', '1em');
    this.renderer?.setStyle(this.ele.nativeElement, 'margin', '0.3em');
  }

  @HostListener('mouseleave') onMouseLeave(event: MouseEvent): void {
    // Ensure that renderer is not undefined before using it
    this.renderer?.setStyle(this.ele.nativeElement, 'background-color', 'red');
    this.renderer?.setStyle(this.ele.nativeElement, 'padding', '1em');
    this.renderer?.setStyle(this.ele.nativeElement, 'margin', '0.3em');
  }
}