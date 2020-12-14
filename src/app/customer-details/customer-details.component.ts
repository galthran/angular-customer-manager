import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CustomerType, Customer } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
    '.isActive { text-decoration: underline; }',
    '.oddCategory { color: green; }'
  ]
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() customer: Customer = null;
  @Output() shift = new EventEmitter<string>();

  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;
  counter: number = 0;
  counterHandle: any;

  CustomerType = CustomerType;

  constructor() { }

  ngOnInit(): void {
    console.log('init');
    this.counterHandle = setInterval(() => {this.counter++;}, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.customer.firstChange) {
      console.log(`change from ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name}`);
    }
  }

  ngOnDestroy(): void {
    console.log('destroy');
    clearInterval(this.counterHandle);
  }

  changeIsActive() {
    this.isActive = !this.isActive;
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }

  left() {
      this.shift.emit('left');
  }

  right() {
    this.shift.emit('right');
  }
}
