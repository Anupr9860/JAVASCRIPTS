//creatingvarray
let animal=['cow' , 'rat' , 'bat' , 'ant', 'bird']

// accesing data offarray(indexing=>0)
console.log(animal[0], animal[4])
for(let a=0; a<animal.length; a++){
    console.log(animal[a])
}

//adding an element
animal.push('tiger')  //last data
console.log(animal)
animal.unshift('ciger')  //first data
console.log(animal)

//removing  an element on array
animal.pop()
console.log(animal)
animal.shift()
console.log(animal)

let food =['rice' , 'fruits' ,'veg']
food.splice(1,0 ,'green fruits', 'dry fruits')
console.log(food)

// find , filter ,map
let age=[10 ,20 ,40,25,60,90,85]
let datafind=age.find((a)=>a>25)
console.log(datafind)

let datafilter=age.filter((a)=>a>25)
console.log(datafilter)

let number=[1,2,3,4,5,6,7,8,9]
let data=number.filter((a)=>a%2!=0)
console.log(data)
let  data1=number.filter((a)=>a%2==0)
console.log(data1)

age.map(a=>console.log(a))
datafilter.map(a=>console.log(a))

let person={id:1 , name:'anup' , roll:22}
console.log(person.name , person.roll)
