/*
var, let, const
varage =40
age+=10
console.log(age)

age ="forty"
age-=10


Typescript is superset of javascript which has static typing

typescript   - Syntatic superset
adding basic syntax of javascript
Add - data types
      OOps concepts
      Methods, constructor, inheritance
      arroe function

 Typescript uses compiler for type checking
 Typescript is transpiled into javascript using the typescript compiler
 
 npm install typescript
 npx tsc
 npx tsc datatypes.ts
 node datatypes.js


#Datatypes
 Boolean  -  true/false
 number -  it will support whole number and floating point number
 string  - text value, char value

 symbol - unique identifier value
 bigint - larger positive and negative value
 
 any - it is base for all datatypes, it can be initialized with any value

 let firstname :  string = "Tom";//Explict initilization
 let firstname= "Tom"; // Implict type
 let firstname:string;//here it will work fine
 firstname=33;
 let firstname="TOM"; Implictly some default value has to be initialized
 firstname=33;//js will not thorow any error  for mismatch datatyeps but ....



 let firstname:any; // any will disable type checking


 unknown -- it is best used if the data type is determined at runtime, it will add the datatype later
casting  is when we use "as" keyword for casting

never  - throws an error whenever it is defined


let x:number = undefined // there is no value initialized to x
let emp:new Employee()  --- here Employeed is class and has multiple function
emp.getData();
emp.showdata();
emp=null;



*/
let empid:number =1001;
let ename:string="Tom";
let flag : any = true;
console.log("Flag type is "+ typeof(flag));
console.log("Empid "+empid);
console.log("Ename "+ename);
console.log("flag "+flag);
flag="Yes";
console.log("Flag type is "+typeof(flag));
console.log("flag "+flag);
//empid="Eleven"; type String is not assign to type number


/*
Arrays
for JS
let x=[11,"Priya","SSE","Enact",23424, true] --  heterogeneous array
let cities=["Bengalore", "Mysore", "Pune"] --- homogeneous array


for Typescript- it supports typing in arrays
let names:string[]=[];
names.push("deepa")
names.push("Srinivas")


prevent changing of array elements
const names:readonly string[]=["Deepa","Srinivas"]
names.push("Pranay");//Error - we can not push any element once we use readonly, so here push and pop will not work


*/
