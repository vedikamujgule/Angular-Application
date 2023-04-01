import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{

  selectedCustomer: any;
  customers: Customer[] =[
    {
      customerNo: 1,
      name:'Vedika',
      address: '2450 Camelllia Lane NE',
      city: 'Atlanta',
      country: 'USA'
  }, {
    customerNo: 2,
    name:'MJ',
    address: '2450 Camelllia Lane NE',
    city: 'Atlanta',
    country: 'USA'
}, {
  customerNo: 3,
  name:'Preeti',
  address: '2450 Camelllia Lane NE',
  city: 'Atlanta',
  country: 'USA'
}, {
  customerNo: 4,
  name:'SAnu',
  address: '2450 Camelllia Lane NE',
  city: 'Atlanta',
  country: 'USA'
}, {
  customerNo: 5,
  name:'Shubya',
  address: '2450 Peninsulla Lane NE',
  city: 'Atlanta',
  country: 'USA'
}]

  ngOnInit(): void {
  }


  getDetails(cust: Customer){

  }
}
