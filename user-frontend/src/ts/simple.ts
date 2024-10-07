let myname:boolean = true; // implicity type
let x= 10; // explicty type

// Note: Having TypeScript "guess" the type of a value is called infer.

let age:any;
age = true;
age = 10;


let z:unknown;
z= 'a';
z= 10
z=true

console.log(myname);


// special types

/*
special types
______________
1. any :  accept any type 
2. unknown : when u don't know type
3.undefined & null
4. never : when function will never return


fucntion msg(){
log('hello)}

let a = msg();


array
_____

let num = [1,2,3,4,5,6,7,8,9,10,11,12];
num.push()


tuples
_______
let my tuple:[number, boolean, number, string];

//

object
______
we can use interface

functions:
________

function (parameter type ){
return type
}
*/

let num:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
num.push(10)
let mytuple:[number, boolean, number, string];
mytuple =[1,true, 4,'aline'];


let student:{id: number, sname: string, age: number, grade:number} ={
    id: 1,
    sname: 'aline',
    age: 25,
    grade: 9
}

enum RwandaSector{
    north = "north",
    south = "south",
    west = "west",
    east = "east",
   kigali =1
};

interface Student{
    id?: number | string,
    sname: string,
    age: number,
    grade?: number,
    sector: RwandaSector
}
let std1:Student ={
    id: "s0001",
    sname: 'aline',
    age: 25,
    // grade: "9",
    sector: RwandaSector.kigali
} 

function add(a:number,b:number, ...rest: number[]): number{
    
    return a+b
} 

let result = add(1,4);

