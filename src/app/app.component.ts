import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = '';
  @Output()
  search: EventEmitter<String> = new EventEmitter<String>();
  ngOnInit(): void {
  }
  
onSearch(){
  this.search.emit(this.name)
}
onSearchEnter(search:string){
  this.search.emit(this.name);
}
transferData(){
  console.log(`Name: ${this.name}`);
}
  data = ['Mad','MJ', 'Sanu','PreetyP']
  message = 'Angular-Application';
}

