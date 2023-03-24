import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  foodData:Object =[]
  private url = 'https://world.openfoodfacts.org/api/v0/product/737628064502.json';
  nutriments: any;
  constructor(private http: HttpClient){
  }
  async ngOnInit(): Promise<void> {
    try{
      this.getProducts();
      console.log(this.nutriments)
    }
    catch(err){
      throw new Error('Method not implemented.');
    }
  }

  getProducts() {
    this.http.get('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
    .subscribe((response: any) => {
      this.nutriments = response.nutriments;
    });
  }

}
