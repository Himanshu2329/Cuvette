var a =Symbol('hi')
var b =Symbol('hi')
console.log(a==b)

var car={
    owner:"Himanshu",
    model:'BWM',
    year:2024,
    drive:function(){

    }
}
var student={
    name:'Himanshu',
    rollno:123,
    marks:90,
    addres:{
        City:'Delhi',
        State:'Delhi'
    }

}
// student.addres
// student['name']
// student[marks]

console.log(student.name)

var marks =[10,20,3,30,40,50]
console.log(marks[1])
marks[1]=21
console.log(marks)
