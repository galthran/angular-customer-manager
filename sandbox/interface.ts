
interface Customer {
    name: string;
    age?: number;
    address: Address;
}

interface Address {
    street: string;
    city: string;
}

function welcomeCustomer (customer: Customer):string {
    return `Welcome ${customer.name}`;
}

console.log(welcomeCustomer({
    name: "Piotr",
    address: {
        street: "Sosnowa 5",
        city: "Sterkowiec"
    }
}))