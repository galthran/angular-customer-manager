import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config, Customer, CustomerType } from './model';

@Injectable()
export class CustomerService {

  private customers: Customer[] = [

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

  constructor(@Inject(CONFIG) private config: Config) { }

  getCustomers() {
    return this.customers.slice(0, this.config.customerLimit);
  }
}
