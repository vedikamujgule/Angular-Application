import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective {

  constructor(ele:ElementRef) { 
  ele.nativeElement.style.backgroundColor ='green'
  }
}
