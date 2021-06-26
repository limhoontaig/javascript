
console.log('Hello World!');
'use strict';
let a;
a = 6;
console.log(a)
// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var splash (dont ever use it)
// var hoisting(move declaration from bottom to top)
// has no block scope
{

  console.log(age)
  age = 4;
  var age;
}
console.log(age)