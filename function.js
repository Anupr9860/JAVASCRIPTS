//creating & calling
//function fubnctionname(){printing}
//functionName
function name() {
    console.log("hello iam anup")
}
name()

//function with argument & parameter
function sum(a, b) {
    console.log(a + b)
}
sum(8, 99999)

//default parameters
function studentsdetails(name = 'BIN', phone = 98765432) {
    console.log(`Hello Iam ${name} aand phone number is ${phone}`)
}
studentsdetails('ram', '987654321')
studentsdetails('ram', '987654321')
studentsdetails('ram', '987654321')

//function with return value
function cloth(amount) {
    return amount
}
let pay = cloth(5000)
console.log(pay >= 5000 ? "went to shop" : "didnt go to shop")


function bcd() {
    console.log("print")
    return "hello" //end point
    console.log("not print")

}
console.log(bcd())


///function expression
let egf=function(a,b)
{
    return a*b
}
console.log(egf(8,6))

