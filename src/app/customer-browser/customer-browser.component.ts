import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent implements OnInit {
  @ViewChild('details') detailsComponent: CustomerDetailsComponent;

  customers: Customer[] = [
    {
      name: 'Jan Kowalski',
      photoUrl: 'assets/images/avatar_default.png',
      age: 34,
      description: "Very important client",
      address: {
        street: 'Polna',
        houseNumber: '34A',
        city: 'Brzesko'
      },
      type: CustomerType.Premium,
      categories: [
        "zagraniczny",
        "mikroprzedsiębiorstwo",
        "duży obrót"
      ]
    },
    {
      name: 'Michał Nowak',
      photoUrl: 'assets/images/avatar_default.png',
      age: 45,
      description: "Client",
      address: {
        street: 'Leśna',
        houseNumber: '45',
        city: 'Bochnia'
      },
      type: CustomerType.Standard,
      categories: [
        "Polska",
        "lokalna firma",
        "średni obrót"
      ]
    },
    {
      name: 'Anna Kowalska',
      photoUrl: 'assets/images/avatar_default.png',
      age: 26,
      description: "Client VIP",
      address: {
        street: 'Mickiewicza',
        houseNumber: '67C',
        city: 'Kraków'
      },
      type: CustomerType.VIP,
      categories: [
        "Polska",
        "firma globalna",
        "wielki obrót"
      ]
    }
  ];

  customer: Customer = null;

  constructor() { }

  ngOnInit(): void {
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
