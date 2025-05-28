//Operator in js (2+3)(operands operator operands )
//Arithmetic Operator (+ , _, *, /,%, ++ , __ ,**)
let a, b;
a = 2, b = 4;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(b / a)
console.log(b % a)

let count = 0;
//console.log(count++) // count +1=1
//console.log(count)
console.log(++count)  //count +1=1
console.log(count--)

console.log(2 ** 3)//2*2*2

//Assignment operator ( , += , -= , *= , /= , %= , **= ,)




console.log(a += b) //a=a+b//6
console.log(a -= b) //a+a-b // 2
console.log(a *= b) //a=a*b //2*4 //8
console.log(a /= b) //a=a/b //2/4 //0.5
console.log(a %= b) //a=a%b //2%4 //2

//comparision operatodrs (== , != , === , <,> , <= , => )
let x, y, z
x = 2, y = 2, z = 5;
console.log(x == y)
console.log(x === y)
console.log(2 > 1)
console.log(2 >= 2)
console.log(2 != 2)

// logical operator ( && , || , ! )
console.log(true && true)
console.log(true && false)
console.log('admin' == 'admin' && 'pass' == 'pass')
console.log(true || flase)


//ternary operator ( cond? true : false )
console.log(2 > 1 ? 'its greater' : 'its smaller')

//string operators (concatnation)
let fname = 'anup'; lname = 'Rai'
console.log(fname + lname)
console.log(fname, lname)



//conditional operator if(true) ,else(false) ,elseif , switch case


let marks = 40
if (marks >= 40) {
    console.log('pass')
}
else {
    console.log('fail')
}



let mark1 = 50
if (mark1 >= 90 && mark1 < 100) {
    console.log("A+")
    console.log("Outstanding")

}
else if (mark1 >= 80 && mark1 < 90) {
    console.log("A")
    console.log('Excellent')
}
else if (mark1 >= 70 && mark1 < 80) {
    console.log("B+")
    console.log('Very Good')
}
else if (mark1 >= 60 && mark1 < 70) {
    console.log("B")
    console.log('Good')
}
else if (mark1 >= 50 && mark1 < 60) {
    console.log("C+")
    console.log('Above Average')
}
else if (mark1 >= 40 && mark1 < 50) {
    console.log("C")
    console.log('Average')
}
else if (mark1 >= 20 && mark1 < 40) {
    console.log("D")
    console.log('Below Avg')
}
else if (mark1 >= 1 && mark1 < 20) {
    console.log("E")
    console.log('Insufficient')
}
else if (mark1 >= 0 && mark1 < 0) {
    console.log("N")
    console.log('Non Graded')
}


let day = 2
switch (day) {
    case 0: console.log("today is sunday"); break;
    case 1: console.log("today is Monday"); break;
    case 2: console.log("today is Tuesday"); break;
    case 3: console.log("today is Wednesday"); break;
    default: console.log("Unknown day"); break;
}

//template literals
let fname1='Anup'
let lname1 ='Rai'
console.log( 'My name is',fname1 , 'and last name', lname1)
console.log(`My name is ${fname1} and last name  ${lname1}`)


let aa=prompt(Enter Number)