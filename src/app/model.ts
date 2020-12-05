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