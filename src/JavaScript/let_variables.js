// let have block scope

function testLet(){
    let y = "Let Y is function scoped";
    console.log(y);

}

testLet();
// console.log(y); // Error: y is not defined



// Re-assignment
let z= "Test 1"
console.log(z);
z = "Test 2"
console.log(z);

// Re-declaration
// let z = "Test 3" // Error: Identifier 'z' has already been declared

// for let default value is undefined
let a;
console.log("Value of a:", a); // Output: Value of a: undefined
console.log("Type of a:", typeof a); // Output: Type of a: undefined
//console.log(io);//ReferenceError: io is not defined

// let allows re-assignment but not re-declaration within the same scope