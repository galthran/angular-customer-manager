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

let zs: Array<number> = [5,5,5, ...ys, 999];

console.log(zs)