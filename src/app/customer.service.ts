import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config, Customer, CustomerType } from './model';

import { map } from "rxjs/operators";


@Injectable()
export class CustomerService {

  constructor(@Inject(CONFIG) private config: Config, private httpClient: HttpClient) { }

  getCustomers() {
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`)
    .pipe(map(data => data.slice(0, this.config.customerLimit)));
  }

  createCustomer(customer: Customer) {
    console.log(customer);
    return this.httpClient.post(`${this.config.apiUrl}/customers`, customer);
  }

  deleteCustomer(customer: Customer) {
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.id}`);
  }
}
