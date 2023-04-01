import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class setBg{
    constructor(elemet:ElementRef){
        elemet.nativeElement.style.backgroundColor ='red'
    }
}