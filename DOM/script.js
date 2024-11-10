// var div1=document.getElementById('div1')
// var paras = document.getElementsByClassName('para')
// console.log(paras[0]);

var pele=document.getElementsByTagName('p')
console.log(pele);

// Use query selector

var p = document.querySelector('p.para')
console.log(p)

var span=document.querySelectorAll('span')
console.log(span[0])
console.log(span[1])

var para = document.querySelector('p#para')
// console.log(para.innerHTML)
// console.log(para.innerText)
para.innerHTML='bye'
// para.innerHTML='<p style="color:red;">hi</p>'

// para.style.background='grey'


// Mouse Events
var btn = document.getElementById('btn')
btn.addEventListener('click',function(){
  console.log('hii')
  para.style.color='red'
  para.style.background='yellow'
  para.innerText='hello buddy'
  
})

para.addEventListener('mouseover', function(){
      console.log("moving mouse over p tag")                  
})

btn.addEventListener('dblclick', function(){
  console.log(para.innerText='im clicked twice')
})

// Keyboard events

document.addEventListener("keydown", function (evt) {
    console.log("key down");
    console.log(evt.key);
    console.log(evt.code);
  });
  
  //keyup
  document.addEventListener("keyup", function (evt) {
    console.log("key up");
    console.log(evt.key);
    console.log(evt.code);
  });
  
  //keypress
  document.addEventListener("keypress", function (evt) {
    console.log("key press");
    console.log(evt.key);
    console.log(evt.code);
  });
  
  
  // keypress doesn't track non printable keys

  var parent = document.getElementById("parent");
var child = document.getElementById("child");

parent.addEventListener("mo useover", function () {
  console.log("mousedone");
});

parent.addEventListener("click", function () {
  console.log("parent clicked");
});
parent.addEventListener("click", function () {
  console.log("child clicked");
});