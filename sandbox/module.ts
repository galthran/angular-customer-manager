import {Vendor} from './classes';

let vendor = new Vendor("Piotr", 22, "Agata");
vendor.welcome();

console.log(vendor);
console.log(vendor.isAdult());