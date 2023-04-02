import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = '';
  destroy: boolean = true;
  inputText: string = ''
  data = ['Mad', 'MJ', 'Sanu', 'PreetyP']
  message = 'Angular-Application';
  observable$ : any;
  newSubject$:any
  counter: number | any;
  searchSubject$ = new Subject<any>()

  constructor(){
  }

  @ViewChild(DemoComponent, { static: false }) demoComp: DemoComponent = new DemoComponent;

  @Output() search: EventEmitter<String> = new EventEmitter<String>();
  ngOnInit(): void {

    // const button = document.querySelector('button');
    // const click$ = fromEvent(button, 'click');
    
    // click$.subscribe(() => console.log('Button clicked!'));
    
    this.searchSubject$
    .pipe(
      debounceTime(200)
    )
    .subscribe((searchValue) => {
      console.log("Debounced time", searchValue)
    });

    const source: Observable<number> = interval(1000)
    .pipe(
        take(5),
        map((ele: number) => ele * 10),
        filter((ele:number) =>ele>40)
    );

    // source.subscribe((val:any) =>console.log("value is",val)); // subscribe to th



    // this.observable$ = Observable.create((_observer: any)=>{
    //   _observer.next(1);
    //   _observer.next(2);
    //   _observer.next(3);
    // })
    // this.observable$.subscribe((e: number)=>{
    //   console.log(e)
    // })

    // Behaviour Subject
    // this.newSubject$ = new BehaviorSubject(200);
    // this.newSubject$.subscribe((ele: any)=>{
    //   console.log("The first Subject subscriber", ele)
    // })
    // this.newSubject$.next(1);
    // this.newSubject$.next(2);
    // this.newSubject$.subscribe((ele: any)=>{
    //   console.log("The second Subject subscriber", ele)
    // })
    // this.newSubject$.next(3);

    // Replay Subject
    // this.newSubject$ = new ReplaySubject();
    // this.newSubject$.subscribe((ele: any)=>{
    //   console.log("The first Subject subscriber", ele)
    // })
    // this.newSubject$.next(1);
    // this.newSubject$.next(2);
    // this.newSubject$.subscribe((ele: any)=>{
    //   console.log("The second Subject subscriber", ele)
    // })
    // this.newSubject$.next(3);

    // //Behaviour Subject
    // this.newSubject$ = new Subject();
    // this.newSubject$.subscribe((ele: any)=>{
    //   console.log("The first Subject subscriber", ele)
    // })
    // this.newSubject$.next(1);
    // this.newSubject$.next(2);
    // // this.newSubject$.complete(); // Always unsubscribe oberservable
    // this.newSubject$.subscribe((ele: any)=>{
    //   console.log("The second Subject subscriber", ele)
    // })
    // this.newSubject$.next(3);

  }
  // ngOnDestroy(){
  //   this.observable$.unsubscribe()
  // }

  

  // onSearch() {
  //   this.search.emit(this.name)
  // }
  // onSearchEnter(_search: string) {
  //   this.search.emit(this.name);
  // }
  // transferData() {
  //   console.log(`Name: ${this.name}`);
  // }
  // onSubmit(input: HTMLInputElement) {
  //   this.inputText = input.value;
  // }
  // destroyComponent(){
  //   this.destroy = !this.destroy
  // }

  inputChange(e:Event){
    console.log(e);
    this.searchSubject$.next(e)
  }

  
}

