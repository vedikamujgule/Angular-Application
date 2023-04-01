import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

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

  @ViewChild(DemoComponent, { static: false }) demoComp: DemoComponent = new DemoComponent;

  @Output() search: EventEmitter<String> = new EventEmitter<String>();
  ngOnInit(): void {
  }

  onSearch() {
    this.search.emit(this.name)
  }
  onSearchEnter(search: string) {
    this.search.emit(this.name);
  }
  transferData() {
    console.log(`Name: ${this.name}`);
  }
  onSubmit(input: HTMLInputElement) {
    this.inputText = input.value;
  }
  destroyComponent(){
    this.destroy = !this.destroy
  }
}

