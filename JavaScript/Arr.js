let arr = [1,2,3,4,5,6,7]

// console.log(arr.toString());
// console.log(arr.join(" and "));
// arr.splice(1,2)
// console.log(arr)
// arr.splice(1,2,22,33)
// console.log(arr);

// arr.forEach((element,value,arr) => {
//     console.log(element,value,arr)
// });
// arr.forEach(element => {
//     console.log(element);
// });
let object={
    a:1,
    b:2,
    c:3
}
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key,element);
        
//     }
// }

for (const iterator of arr) {
    console.log(iterator);
}

// map is using for making a new array
let ar = arr.map((ele)=>{
    return ele*2;
})
console.log(ar);   
const greaterThanFour=(ele)=>{
    if(ele>7){
        return true 
    }
    return false
}

console.log(ar.filter(greaterThanFour));

add=(ele, ele1)=>{
    return ele+ele1
}

console.log(ar.reduce(add));