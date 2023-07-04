// document.write(5 - 2);
// document.getElementById("bedroom").innerHTML = "This text used to be a bedroom picture";

// function buttonColor(){
//     document.getElementById('button').style.backgroundColor = '#911';
//     document.getElementById('button').style.color = '#ffffff';
// }


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

document.getElementById('demo1').innerHTML = 'I learnt about JS objects and JS events';

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function () {
    return this.firstName + " " + this.lastName;
  }
}
  