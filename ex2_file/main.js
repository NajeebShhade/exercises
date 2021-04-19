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