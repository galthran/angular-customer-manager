import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerType } from '../model';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styles: [
  ]
})
export class CustomerAddComponent implements OnInit {

  name: string;
  age: number;
  type: CustomerType;

  CustomerType = CustomerType;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  add() {
    console.log('Add new customer');
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl: '',
      description: '',
      categories: [],
      address: {
        city: '',
        houseNumber: '',
        street: ''
      }
    }).subscribe();
  }
}
