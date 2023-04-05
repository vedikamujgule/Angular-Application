import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  @Input()value ='Vedika'
  @ViewChild('dobInput') dateOfBirth: ElementRef | any;
  @ViewChild('ageInput') age: ElementRef | any;
  @ContentChild('paragraph') para : ElementRef | any;

  @Output('sendData') output: ElementRef |any;

  dobInput = new Date;
  ageInput ='45';
  // constructor(){
  //   console.log("ConStructor called")
  //   console.log("value", this.value)
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("On changes It called", this.value)
  // }
  ngOnInit(): void {
    console.log("value in on in it", this.value)
    // console.log("value in para", this.para)// here the value will be underfined 
  }

  // ngDoCheck(): void{
  //   console.log("ng do check") // for every chamge detection
  // }

  ngAfterContentInit(): void{
    console.log("ng ngAfterContentInit") // once per 
    console.log("value in para", this.para.nativeElement.textContent)
    this.para.nativeElement.textContent = 'Vedika is the new value'
  }

  // ngAfterContentChecked(): void{
  //   console.log("ng ngAfterContentChecked") // for every chnage detection
  // }

  // ngAfterViewInit(): void{
  //   console.log("ng View init") // once per init
  // }
  // ngAfterViewChecked(): void{
  //   console.log("ng View checked") // for every change detection
  // }

  // ngOnDestroy():void{
  //   console.log("ng destroyyyyy") // for every change detection
  // }
  // sayHello(myVariableinput:HTMLInputElement){
  //   alert(myVariableinput.value)

  // }
  // consoleHello(){
  //   alert("Hell")
  // }

  // getAge(){
  //   let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
  //   let currentDate = new Date().getFullYear();
  //   this.age.nativeElement.value = currentDate-birthYear
  //   // console.log(this.age)
  // }
}
