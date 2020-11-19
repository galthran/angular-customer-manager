
function welcome (name: string) :string {
    return `Welcome ${name}`;
}

console.log(["Karol", "Kacper"].map(function(name:string):string{ // anonymous function
    return `Welcome ${name}`;
}));

console.log(["Karol", "Kacper"].map((name:string):string => { // arrow function
    return `Welcome ${name}`;
}));

console.log(["Karol", "Kacper"].map((name:string) => `Welcome ${name}`)); // arrow function short version

console.log(["Karol", "Kacper"].map(name => `Welcome ${name}`)); // arrow function shorter version


