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

