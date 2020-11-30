//import { Vendor } from './classes';
var  VendorClass  = require('./classes');

let vendor = new VendorClass("Piotr", 22, "Agata");
console.log(vendor);
console.log(vendor.welcome());
console.log(vendor.isAdult());