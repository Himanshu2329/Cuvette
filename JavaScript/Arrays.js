arr=[1,2,3,4,5,6]
console.log(arr);

var car={
    brand:"BMW",
    model:"X5",
    year:2019,
    price:1000000,
    
}
console.log(car.price);
console.log(Array.isArray(car));
console.log(Array.isArray(arr));
console.log(arr.length)
arr.push(100) // to add the elememt to the end of the array
console.log(arr)
console.log(arr.length)
arr.pop() //To remove the last element
console.log(arr)

var fruits = ['mango','banana','grapes']
fruits[1]='watermelon'
fruits.sort()
fruits.reverse()
console.log(fruits)

var number=[12,21,5,1,2,77]
// function cb(a,b) {
//     if(a>b) return 1
//     else if(a<b) return -1

//     else return 0
// }
function cb(a,b) {
    return a-b

}

// to find if number is present in the array

// console.log(number.find(function (x) {
//     return x==11;
// }));

// sort number array in javascript
// number.sort(cb)
// console.log(number);

// find all the number which are greater then 10

var found=number.filter(function (x) {
    return x>10;
})
console.log(found);  


// find the index of the element

var found=number.findIndex(function (x) {
    return x==12;
})
console.log(found);    
