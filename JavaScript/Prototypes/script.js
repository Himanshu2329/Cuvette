// let person={
//     name: "John",
//     age: 30,
//     talk: function () {
//         console.log('taking now....');
        
//     }
    
// }

// person.favcolor="red"
// console.log(person.talk);
// console.log(person);

// let person2 = Object.create({ 
//     name: "John",
//     age: 30,
//     talk: function () {
//         console.log('.create talking now');
        
//     }
// })


// console.log(person2.talk);
// console.log(person2);

class person{
    name
    constructor(n){
        this.name=n;
    }
}
const p = new person('Cuvette')
console.log(p.name);


const Person2 = class{
    name
    age
    constructor(n,a){
        this.name=n
        this.age=a
    }
}

class teacher extends Person2{
    constructor(name,age){
        super(name,age)
    }
}
const p2 = new Person2('Hello World',20)

console.log(p2.name,p2.age);

const t=new teacher('Hello',40)
console.log(t.name,t.age)
