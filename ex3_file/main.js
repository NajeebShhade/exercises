let people = [
    p1= {name: "Jill",age :24 , city: "yarka"},
    p2= {name: "Robert",age: 24, city:"abosnan"}
]
if(people[0].age === people[1].age){
    console.log("they are in the same age")
}else{
    console.log("they are nt in the same age")
}
if(people[0].city === people[1].city){
    console.log(people[0].name + "wnated to date" + people[0].name)
}else{
    console.log(people[0].name  + " wanted to date" +  people[1].name + " ,but couldn't")
}

people[0].work = "software enginner"
console.log(people[0].work)
people.splice(1)
console.log(people[1])

let people2 = [
    p3= {name: "wall",age :24 , city: "yarka"},
    p4= {name: "mall",age: 24, city:"abusnan"}
]
people = people.concat(people2)
console.log(people[1].name)
const library = {
    books: [
      {title: "The Secret", author: "No one"},
      {title: "Rich Dad Poor Dad", author: "Robert keuosaky Trumb"},
    ]
  }
  people=people.concat(library.books)
  console.log(...people)
  let companies = ["Microsoft", "Apple", "AMAZON"]
  for(let company of companies){
      console.log("one day I will work at " + company)
  }
  console.log(...companies)
  while(companies.length > 0){
    companies.splice(0, 1)
}
console.log(...(companies + " this what prints"))

names01 = ["Najeeb" , "Amir", "Ofir" ,"Lotem"]
ages01 = [10, 20 ,30 ,40]
for(let namesin of names01){
    console.log("the age of "+ namesin + " is " + ages01[names01.indexOf(namesin)])
}
let numbers01 = [1,2,3,4,5]
let sum = 0
for (let num of numbers01){
     sum += num
}
console.log(sum/numbers01.length)
let num01 = []
let i = 1
while( i <= 100){
    num01.push(i);
    i++
}
console.log(...num01)

const growOld = function(user){
    user.age++
  }
  const aDude = {name:"Ayd Ood", age: 23}
  growOld(aDude)
  console.log(aDude)


  const findSmallest = function(numbers){
    let smallest = numbers[0]
    for(let num of numbers){
      if(num < smallest){
        smallest = num
      }
    }
    return smallest
  }

  const ages = [17, 21, 9, 34]
  const youngest = findSmallest(ages)
  console.log(youngest)
  greet() //works without a problem
  function greet(){
    console.log("Hello there, from the wild, wild West")
  }
  const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I Like " + food)
    }
  }
console.log(person.name) //you know what this will do

person.speak("cheese tost")

const ClacAge = function(currentYear = 0 ,birthyear = 0,mymonth = 1 , myday = 1) {
    let month = 4
    let day = 21
    let yourage = currentYear - birthyear
    return mymonth > month || (month === mymonth && day > myday) ? yourage -1 : yourage;
}
myyear=2021
mybirth=1997
console.log(ClacAge(myyear,mybirth,4,21))

const checkexist = function(arr , value){
    for (let arrvalue of arr){
        if((arrvalue) === value){
            return true
        }
    }
    return false
}
console.log(checkexist([10,20,5],5))

let calculator = {
    add: function(firstnum = 0 , secoundnum =0){return firstnum + secoundnum},
    subtract: function(firstnum = 0 , secoundnum =0){return firstnum - secoundnum}
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))


const increaseByNameLength= function(money, name){
    return money * 13;
}
const makeRegal = function(name){
    return "His Royal Highness, " + name;
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
