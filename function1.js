function sum(a)
{
return a + a
}console.log(sum(4))


//function expression
let sum1=function(a){
    return a+a
}
console.log(sum1(3))


//arrow expresion
let sum2=(a)=>a+a
console.log(sum2(5))   // with single parameter


let sum3=(a,b)=>a+b
console.log(sum3(5,7))


let display=()=>console.log("only string")
display()


//time out
console.log("food")
setTimeout(() =>{
    console.log("cooked")},4000)
    console.log("eat")


function f1 (a){
    console.log("1cooked")
    a()
}
function f2(){
    console.log("1eat")
}
setTimeout(f1,4000,f2)