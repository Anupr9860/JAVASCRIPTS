// loop in js for , while , do while , for in ,forof ,continue , break
console.log("for loop start")
for (let a = 0; a < 10; a++) {
    if(a==8)
    {
        console.log("8 Happy Birthday");break

    }
    console.log(`Hello iam ${a}`)

}
console.log("for loop end")
let b = 0;
while(b < 10)
{
    if(b==3)
    {
        console.log('3 happy Happy') ; break
    }
    console.log(`while loop ${b}`)
    b++

}

let c=5;
do{
    console.log(`do while loop ${c}`)
    c++
}while(c<10)
    

    let food=['mango' , 'apple' , 'banana' ,'kiwi']
    for (const x of food) {
        console.log(x)
    }
     for (const x in food) {
        console.log(x)
    }