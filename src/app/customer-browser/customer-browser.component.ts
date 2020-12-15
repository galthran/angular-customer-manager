import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent implements OnInit {
  @ViewChild('details') detailsComponent: CustomerDetailsComponent;

  customers: Customer[];
  customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

  changeColor() {
      this.detailsComponent.changeColor();
  }

  onShift(direction: string) {
      const idx = this.customers.indexOf(this.customer);
      if(direction === 'left' && idx > 0) {
        this.customer = this.customers[idx - 1];
      } else if(direction === 'right' && idx < this.customers.length - 1) {
        this.customer = this.customers[idx + 1];
      }
  }
}
