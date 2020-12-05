import { Component } from '@angular/core';
import { Customer, CustomerType } from './model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="panel panel-default">
      <div class="panel-body">

          <select [(ngModel)]="customer">
            <option [ngValue]="null">Brak klienta</option>
            <option *ngFor="let c of customers" [ngValue]="c">{{ c.name }}</option>
          </select>

          <div class="panel-headling" *ngIf="customer">
            <h1 [style.color]="nameColor" [class.isActive]="isActive">{{ customer.name.toUpperCase() }}
              <ng-container [ngSwitch]="customer.type">
                <ng-container *ngSwitchCase="CustomerType.Standard">*</ng-container>
                <ng-container *ngSwitchCase="CustomerType.Premium">**</ng-container>
                <ng-container *ngSwitchCase="CustomerType.VIP">***</ng-container>
                <ng-container *ngSwitchDefault>nieznany typ</ng-container>
              </ng-container>
            </h1>
          
            <div class="row">   
              <div class="col-sm-8">
                <p>{{ customer.description }}</p>
                <p appHighlight>{{ customer.age }}</p>
                <p>{{ customer.address.street }} {{ customer.address.houseNumber }} {{ customer.address.city }}</p>
                
                <ul>
                  <li *ngFor="let category of customer.categories; let oddCategory = odd" [class.oddCategory]="oddCategory" >{{ category }}</li>
                </ul>

                <button class="btn btn-primary" (click)="changeIsActive()" type="button">Przełącz podkreślenie</button>
                <button class="btn btn-primary" (click)="changeColor()" type="button">Zmień kolor</button>
                <br/>
                <input type="text" [(ngModel)]="customer.name" [ngModelOptions]="{updateOn: 'blur'}" />
              </div>
              <div class="col-sm-4">
                <ng-container *ngIf="showPhoto; then photo else noPhoto"></ng-container>
                <ng-template #photo>
                <img [src]="customer.photoUrl" />
                </ng-template>
                <ng-template #noPhoto>
                  <p>Zdjęcie ukryte</p>
                </ng-template>
                <div class="checkbox">
                  <label><input type="checkbox" [(ngModel)]="showPhoto" /> Pokaż zdjęcie</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    '.isActive { text-decoration: underline; }',
    '.oddCategory { color: green; }'
  ]
})
export class AppComponent {

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

  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;


  CustomerType = CustomerType;

  changeIsActive() {
    this.isActive = !this.isActive;
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }

}
