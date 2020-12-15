import { InjectionToken } from "@angular/core";

export interface Customer {
    name: string;
    photoUrl: string;
    description: string;
    age: number;
    address: Address;
    type: CustomerType;
    categories: string[];
}

export interface Address {
    street: string;
    houseNumber: string;
    city: string;
}

export enum CustomerType {
    Standard,
    Premium,
    VIP
}

export interface Config {
    customerLimit: number;
}

export const CONFIG = new InjectionToken<Config>('app.config');