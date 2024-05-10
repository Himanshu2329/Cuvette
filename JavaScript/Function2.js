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