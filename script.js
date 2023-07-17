// document.write(5 - 2);
// document.getElementById("bedroom").innerHTML = "This text used to be a bedroom picture";

// function buttonColor(){
//     document.getElementById('button').style.backgroundColor = '#911';
//     document.getElementById('button').style.color = '#ffffff';
// }


// // let x = 5;

// // if (x >= 5){
// //   console.log("Doyin");
// // } else {
// //   console.log("Seyi")
// // }

// x = typeof (doyin);
// console.log(x);

// const person = {
//     age: '35', name: 'Doyin', occupation: 'painter'
// }
// console.log(person.name, 'is', person.age, 'years old and she is a', person.occupation);

// function toCelsius(f) {
//     return (5/9) * (f-32);
// }
//   let value = toCelsius(100)
// console.log(value);
// document.getElementById('demo').innerHTML ="The temperature is" + toCelsius(100) + "celsius";

// document.getElementById('demo1').innerHTML = 'I learnt about JS objects and JS events';

// const Person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName : function () {
//     return this.firstName + " " + this.lastName;
//   }
// }
// document.getElementById('length').innerHTML = 'I learnt how to find the string length';

// document.getElementById('Doyin').innerHTML = "I came from the family of \"Addams\", wait! i used an escape character to make \"Addams\" visible "


// let text = "I learnt how to find the string length";
// let length = text.length;


// y = typeof("Hello \ Dolly!");
// console.log(y);

// // function mySelf() {
// //   console.log("Adedoyin");
// // }
// // mySelf();
// // mySelf();
// // mySelf();
// // mySelf();

// function student(studentName, studentCourse){
//   const details = `${studentName} is a student at Axia Africa taking ${studentCourse}`;
//   return details;
// }
// const studentData= student('Doyin', 'Frontend development');
// console.log(studentData);

// const student2 = function student(studentName, studentCourse) {
//   const details = `${studentName} is a student at Axia Africa taking ${studentCourse}`;
// }
// let ourName= prompt('What is your name?')
//   switch (prompt ("What is your best fruit?")) {
//     case "plantain":
//       alert(`I love them too, ${ourName}`);
//       break;
//     case "Apple":
//       alert("Welcome");
//       break;
//     default:
//       alert("Neither");
//   }

  //use of nullish-coalescing-operator
//   let user;
// console.log(user ?? "Anonymous"); // John

// let firstName = null;
// let lastName = "null";
// let nickName = "SuperCoder";
// console.log(firstName ?? lastName ?? nickName);

/**i learnt that the difference between logical operator || and ?? is that || returns the first truthy value while 
?? returns the first defined value**/
// console.log(firstName || lastName || nickName);//null null

// let height = 0;

// console.log(height || 100); // 100
// console.log(height ?? 100); // 0

//Using ?? with && or || will produce a syntax error
// let x = 1 && 2 ?? 3;//syntax error
//Use explicit parentheses to work around it:
let x = (1 && 2) ?? 3;
console.log(x)

//loop
//the for statement creates a loop with 3 optional expression
let text=""
for (let d = 0; d < 5; d++) {
  text += "The number is " + d + "<br>";
}
console.log(text);
//And you can omit expression 1 (like when your values are set before the loop starts):
let i = 1;
let cars=["Bentley", "Ferrari", "Lexus", "Toyota"]
let len = cars.length;
dee=""
for (; i < len; i++) {
  dee += cars[i] + "<br>";
}
console.log(dee);

let pushUps=""
for (let b = 1; b <= 20; b++){
  pushUps += "The number is " + b + "<br>" ;
}
console.log(pushUps)

let number = 1;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
//using two bindings
let numberOfRiceBags = 3;
let numberOfGroceryBags = 2;
let food = 3;
while (food <= 12) {
  console.log(`${numberOfGroceryBags}g of groceries and ${numberOfRiceBags* 10}g of rice is enough to prepare ${food * 60}g of food for ${food} people`);
  food = food + 1;
  numberOfGroceryBags = numberOfGroceryBags + 1;
  numberOfRiceBags = numberOfRiceBags + 3;
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
//do-while
// let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

if (1 == 2) {
  console.log("That makes sense.");
} else if(1 > 2) {
    console.log("No surprise there.");
} else {
  console.log('It is okay')
}
  
// breaking loops
// for (let current = 88; ; current = current + 1) {
//   if (current + 7 == 102) {
//     console.log(current);
//     break;
//   }
// }
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

// const doyinObject = {
//   firstName: "Adedoyin",
//   lastName: "Zainab",
//   country: "Nigeria",
//   birthYear : 2003,
//   currentAgeFunct: function(){
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   }
// }
// console.log(this.age)

//looping a triangle
// for (let hashtag = '#'; hashtag <= "#######"; hashtag = hashtag+ '#'){
//   console.log(hashtag);
// }

// for (let numbers = 0; numbers <= 100; numbers++)
//   if (numbers % 3==0){
//     console.log('Fizz');
//   }else if (numbers % 5==0){
//     console.log('Buzz');
//   }else if (numbers % 5 == 0 || numbers % 3 == 0){
//     console.log('fizzBuzz');
//   } else {
//     console.log(numbers)
//   }

// let space = " ";
// for (let hashtag = "#"; hashtag <= "#####"; hashtag = hashtag + space){
//   console.log(h
// }
  
//DOM
let Triumph = document.getElementById("triumph").innerHTML
document.write(Triumph);


document.body.style.background = "red";
document.body.style.color = "white";
setTimeout(() => document.body.style.background = "black", 1000);



