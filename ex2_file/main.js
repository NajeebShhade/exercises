console.log("Hello, world!")
let galaxyVersion = "S"
galaxyVersion += 7
console.log(galaxyVersion)
const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString
let firstString2 = "bar"
firstString2 += "man"
console.log(firstString2) // will print "barman"
console.log(3 < 5) // will output true
console.log(3 > 5) // will output false
console.log(2 >= 2) // will output true
console.log(1 <= -1) // will output  false
console.log("this string" == "that string")

console.log((3 < 2) ||  (1 > 0)) // prints true because the right side resolves to true, even though the left side resolves to false

console.log(("a" == "a") && (32 === "32")) // prints false because the right side resolves to false

console.log(!(10 > 5))
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b
console.log(a,b,c)
let username = "serious_cat612"
const correctUsername = "serious_dog612"

if(username){
  if(username == correctUsername){
    // let user in
  } else {
    console.log("Hey dog, that's the wrong username")
  }
} else {
  alert("You must enter your username")
}
let numChildren = prompt("Give me number")
numChildren = parseInt(numChildren)
let isCareful = true
if (isCareful){
    numChildren += 1
    console.log(numChildren)
}else
console.log(numChildren)
let infoAboutTesla = ["Tesla", 5000, true, "best"]
const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
console.log(plants.length) // prints 5

let lastIndex = plants.length - 1 // equal to (5 - 1) = 4
console.log(plants[lastIndex]) // prints "Yew"
console.log(plants[4])
console.log("The first plant is " + plants[0] + " and the last plant is " + plants[plants.length - 1])
companies.push("Fox Entertainment", "Marvel Studios", "Rolex");
let employees = ["DeMarcus", "Kai", "Christina"]
let candidates = ["Tiffany", "Elana", "Carl"]
employees.push(...candidates)
employees.push(candidates[0], candidates[1], candidates[2])
let apple = {
    color: "red",
    name: "apple"
  }
  let cheese = {
    color: "yellow",
    name: "cheese"
  }
  let foods = [apple, cheese]
  console.log(foods[0].name) // apple
  console.log(foods[1].color) // yellow
  const bag = {
    weight: 10,
    owner: "Larissa",
    items: [                   // an array with objects in it!
      {item: "Pen", count: 2},
      {item: "Bottle", count: 1},
      {item: "Book", count: 3}
    ]
  }
  bag.items[0].item

  let people = [
      p1= {name: najeeb,age :24 , city: yarka},
      p2= {name: afeef,age: 24, city:abosnan}
  ]
  console.log(people[0].name)