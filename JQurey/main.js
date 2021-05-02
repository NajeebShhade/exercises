// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

//   setInterval(function(){
//     console.log(new Date())
//   }, 1000)

// const square = number => console.log(number*number)
// square(4)

// const getFormalTitle = (FormularCall,TheName) =>  FormularCall + " " +TheName
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle)

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => //normal function
//             console.log("The name is: " + this.name)
//         , 3000)

//     }
// }

// suspenseBuilder.displayName()



// const push = function () {
//     console.log("pushing it!")
// }

//   const pull = function () {
//     console.log("pulling it!")
// }

// const pushPull = function (funname){
//     funname()
// }


//   pushPull(push) //should print "pushing it!"
//   pushPull(pull)






//   const sum = (num1,num2,num3) => num1+num2+num3
// const thesum = sum(1,2,3)
// console.log(thesum);

// const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
// console.log(capitalize("bOb")) // returns Bob
// console.log(capitalize("TAYLOR")) // returns Taylor
// console.log(capitalize("feliSHIA"))

// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz()

  
//  const setCounter = function (num) {
//     let counter = 0
  
//     const count = function () {
//       counter += num;
//       console.log(counter)
//     }
  
//     return count
//   }
  
//   const increment = setCounter(2)
//   increment()
//   increment()

// const Family = function(){
//     let members = []
//     const birth = function(name){
//         members.push(name)
//         console.log(members)
//     }
//     return birth

// }
// const giveBirth = Family()
// giveBirth("waaa")
// giveBirth("abedo")

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }

// const bebe = mathOperations()
// console.log(bebe.mult(10,5))

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('Tawfik')
// usersModule.addUser('Afeef')

// usersModule.listUsers()



// console.log(usersModule.users)


// const StringFormatter = function(){
//     let capitalizeFirst = function(string){
//         string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
//         console.log(string)
//     }
//     let skewerCase = function(string){
//         const bar = string.replace(" ", "-")
//         console.log(bar)
//     }
//     return{
//         capitalizeFirst : capitalizeFirst,
//         skewerCase : skewerCase
//     }
// }


// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box

// const Bank = function(){
//     let _value = 500
//     let deposit = function(moreMoney) {
//         _value += moreMoney
//     }
//     let showBalance = function() {
//         console.log(_value)
//     }
//     return {
//         deposit: deposit,
//         showBalance: showBalance
//     }
// }
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance()
// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//         return document.getElementById(elementId)
//         }
//     }
    //myQuery()
//console.log(myQuery("#search-container"))
// const sayHi = function(){
//     console.log("Hi!")
//   }
//   const $ = sayHi
//   $("h1").css("background-color", "blue")
//   $(".red-div").css("background-color", "red")
//   $("li:first-child").css("background-color", "green")
//   $("li:last-child").css("background-color", "pink")
//   $("#brown-div").css("background-color", "brown")
//   $("#b1").addClass("box")
//   $('#my-input').val("terapert")
//   const barcode = $("#barcode").data().barcode
//   const date = $("#barcode").data().date
//   console.log(barcode)
//   console.log(date)
//    $('button').on('click', function () {
//     alert($("#my-input").val())
//   })
//   const clicked = function () {
//     alert('clicked!!!!!!!!!!')
//   }
  
  //  $('button').click(clicked)

// const idof = $("#b1")
// $(idof).hover(function () {
//     $(idof).css("background-color", "blue")
// })


// $("#blogs").hover(function(){
//     $(this).css("background-color","blue")
// })
$("button").on("click", function(){
    $("#blogs").append("<div class='blog'>Cool blog</div>")
  })
  
  $("#blogs").on("click", ".blog", function(){
    $(".blog").text("blargh") 
  })
// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]
  
//   for (let name of names) {
//     $("body").append(`<div class=human> ${name.first} - ${name.last} </div>`);
//   }