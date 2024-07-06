let n=5

//using for loop
let result=1
for (let index = 1; index<=n; index++) {
    result*=index;    
    
}

console.log(result);

// recusrion

factorail=(ele)=>{
    if(ele==1){
        return 1

    }
    return ele*factorail(ele-1)
}
console.log(factorail(6));

// using reduce


console.log(reduce);

// how to find factorail in javascript?
