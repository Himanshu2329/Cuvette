let random=Math.random();
let a=3
let b=2
let c='-'

let cal={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}

console.log(random)
if (random>0.1) {

    console.log(eval(`${a} ${c} ${b}`));

    // if(c=='-'){
    //     console.log(a-b)
    // }
    // else if (c=='+') {
    //     console.log(a+b)
        
    // } else if(c=='/'){
    //     console.log(a/b)
        
    // }else{
    //     console.log(a*b)
    // }
}
else{
    let c = cal[c]
    console.log(eval(`${a} ${c} ${b}`));
    
    // if(c=='-'){
    //     console.log(a/b)
    // }
    // else if (c=='+') {
    //     console.log(a+b)
        
    // } else if(c=='/'){
    //     console.log(a**b)
        
    // }else{
    //     console.log(a+b)
    // }
}



// const q=function sum(a,b) {
//     return a+b;
// }
// const p = function minus(a,b) {
//     return a-b
// }
// const r = function div(a,b) {
//     return a/b
// }
// const t = function mul(a,b) {
//     return a*b    
// }
// const o = function expo(a,b){
//     return a**b
// }