// Introduction to Constructors
// this keyword
// this keyword usage with arrow functions
// call(), apply() and Bind()

// Constructor: these are the special functions that are used for creating and initializing object.

// 1. Basic Constructor

// function Person(name,age){
//     this.name=name; //himanshu.name 
//     this.age=age; //himanshu.age
    
// } 
 
let himanshu=new Person('himanshu',20)
// console.log(p.name,p.age)
console.log(himanshu);

//Prototype in constructors

function Person(name,age){
    this.name=name
    this.age=age
    // this.introduce=function(){
    //     return "My Name is "+ this.name + "and i m " + this.age +" years old."
    //    }
}
Person.prototype.introduce=function(){
 return "My Name is "+ this.name + "and i m " + this.age +" years old."
}

function Person2(name,age,addess){
    this.name=name
    this.age=age
    this.addess=addess
    this.location=function(){
        return "My name is " +this.name+ " and i m "+this.age +" and my address is "+this.addess
    }
}

// Person2.prototype.location=function(){
//     return "My name is " +this.name+ " and i m "+this.age +" and my address is "+this.addess
// }

let Prashu = new Person('Prashansa ',20)
let harry=new Person2("Harry",21,"Saket")
console.log(Prashu);
 
console.log(harry);
console.log(harry.addess);
console.log(harry.location());



console.log(Prashu.introduce());
 

// 2. "This" Keyword:- this keyword is a special keyword that refers to the object on which a function is being invoked.
 
// Global Context

// console.log(this===window);
// console.log(this===global);


var obj={
    name:"Heyo",
    greet: function(){
        // this.name=name
        return "Hello" + this.name;
    }
}

console.log(obj.greet());


const person={
    fullname:function(){
    return this.FirstName + " " +this.lastName
}

}
const person1={
    FirstName:"Himanshu",
    lastName:"Rajput"
}
console.log(person.fullname.call(person1));

//  Apply

// const number=[1,3,4,5,6,8]
const max=Math.max.apply(null,[1,2,3,4,5,6,8,9])
console.log(max);
