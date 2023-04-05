import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedndererDirective]'
})
export class RedndererDirectiveDirective implements OnInit {

  constructor(private ele:ElementRef, private renderer: Renderer2) {
    //rederer allows direct access
  }
  ngOnInit(){
    this.renderer.setStyle(this.ele.nativeElement,'background-color','#0000')
    this.renderer.addClass(this.ele.nativeElement,' ')
  }
  createNewElement() {
    const newDiv = this.renderer.createElement('div');
    const text = this.renderer.createText('This is a new element!');
    this.renderer.appendChild(newDiv, text);
    this.renderer.appendChild(this.ele.nativeElement, newDiv);
  }
}
