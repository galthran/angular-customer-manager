console.log("Hello World !!");

let x:number = 3;
let y:string;
let z:boolean;

y = "test";
z = true;

console.log(x , y, z);

let xs: number[] = [1,2,3,4,5]

console.log(xs.length)

let ys: Array<number> = [9,8,7,6];

console.log(ys)

ys[0] = 0;

console.log(ys)

let zs: Array<number> = [5,5,5, ...ys, 999]; //spread operator

console.log(zs)

let g = "text1";
let gg = 'text2';
let ggg = `Liczba x = ${x}`;

console.log(ggg);
console.log(`tablica xs ${xs[1]}`)
console.log(`tablica xs ${xs[1] + 5}`)
console.log(`tablica xs ${xs[1] + 5}, zs ${zs[0]}`)

function welcome1 (name:string, age?:number) :string { //optional parameter age 
    return `Welcome ${name}`;
}

function welcome2 (name:string, age:number = 25) :string { //optional parameter with default value
    return `Welcome ${name}`;
}

function welcome3 (...names:string[]) :string { // parameter with multiple values
    return `Welcome ${names.join(', ')}`;
}

console.log(welcome3("Michał", "Karol"));