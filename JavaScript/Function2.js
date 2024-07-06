function sayHello(name1) {
    console.log("Hello User",name1);
    // return "hello user"
}
function greet(hey) {
    hey("Himanshu")

    function dosomething() {
        console.log("yeahh im doing something")
    }
    dosomething()
    // return dosomething
}

greet(sayHello)

// let u1 = sayHello('H')
// let u2 = sayHello('P')
// let u3 = sayHello('L')
// console.log(u1, u2, u3);


// funtion declaration
// function sayHello(name1) {
//     // console.log("Hello buddy ",name1);
//     return "Hello bro ", name1
// }

function sayHello() {
    // console.log("Hello buddy ",name1);
    return "Hello bro "
}

let add= function(a,b){
    return a+b
}
a=9
b=9
console.log(add(a,b));

function greet(hello){
    hello();
}
greet(sayHello) 