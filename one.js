console.log("This is external js");
//single comment//
/*multi line comment */
//vaariables container for storing data values. var 
var name = "Anup"
console.log(name)

var lname //declare
lname = "Rai" //assign
//ES6 Var Let Const
var a=2
console.log(a)
var a=30
console.log(a)

//var can be re-declared and re-asssigned

let b=2
console.log
b=30
console.log(b)

//letcannot be re declared but re assigne

const c=2
console.log(c)
//c=30
//console.log(c)

//constant cannot be re declare and re assigned

let age=(16)
console.log(age)

if(true){
    let age = 12
    console.log(age) //12
}
console.log(age)
//var is global scope
//let , const is block scope



//data Type= primitive datatype non-primitive
//primitive data type ( string, number , boolean, undefined , null ,es6=> bigInt Symbol)
let aa=('anup')
console.log( typeof aa)

let bb=22
console.log( typeof bb)

let cc=true
console.log(typeof cc)

let dd
console.log( typeof dd)

let ee=null
console.log( typeof ee)

let ff=BigInt(123456)
console.log( typeof ff)

console.log( Symbol('sajan')==Symbol('sajan'))



//non-primitive data type ( array , object)
//array only store value 
let friend=['ram', 'hari', 'gita']
console.log(typeof friend)

let friends={
    bro: "ram",
    sis: "gita",
    bestf: "hari"
}
console.log(typeof friends)