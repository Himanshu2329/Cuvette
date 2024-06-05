console.log("Hello World")

let age=12
if(age>=18){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}

// Ternary  operator
let a=10
a===10? console.log("a is equal"):console.log('not equal')

// Loops

// for loops
// a=10
// for(i=1;i<=a;i++){
//     console.log(a*i)
// }

// while loops
// let x=10
// let b=1
// while(b<=x){
//     console.log(x*b)
//     b++
// }

// do while
let x=10
b=1
do {
    console.log(a)
    b++
} while (b<x);

// for of Loops
for (const iterator of "Himanshu") {
    console.log(iterator);
}

// forin loops
let object={
    name:"Himanshu",
    Role:"Programmer",
    Company:"Google",
    salary:5000000
}

object.salary=1000000000
for (const key in object) {
        const element = object[key];
        console.log(key,element);
}