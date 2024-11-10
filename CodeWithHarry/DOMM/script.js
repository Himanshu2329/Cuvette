// let boxes=document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor="yellow"

document.getElementById("red").style.backgroundColor="yellow"
document.querySelector(".box").style.backgroundColor="green"


console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach((ele)=>{
    ele.style.backgroundColor="blue"
})

