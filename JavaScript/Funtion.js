function nice(name) {
    console.log("hey",name,"you're nice")
}

nice("himanshu")

function sum(a,b,c=1) {
    return a+b+c;
}
let a = sum(1,2)
console.log(a);

// Arrow Function

const func1 = (x)=>{
    console.log("i am an arrow function",x);
}

func1(23)