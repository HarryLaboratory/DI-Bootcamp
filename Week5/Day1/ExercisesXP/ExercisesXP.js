//Exercise 1

// 1 :
// When using let, the value of 'a' inside funcOne will be 3 after the if block. 
// Using const would cause an error because you can't reassign a const variable.

// 2 :
// The global variable 'a' is changed by funcTwo, so funcThree will show the updated value. 
// If 'a' were const, it would throw an error because you can't change the value of a const variable.

// 3 :
// By assigning to window.a, it becomes a global variable. 
// After calling funcFour, the value of 'a' is "hello", and funcFive will display that value.

// 4 :
// Inside funcSix, the local variable 'a' is different from the outer 'a', so the local value is displayed. 
// Using const would not change this behavior because it still creates a new local variable.

// 5 :
// The 'let' inside the if block shadows the outer 'a'. 
// Changing 'let' to 'const' would still create a separate variable inside the block, but the value can't be reassigned inside the block.

//Exercise 2

//const winBattle = () => true;

//const experiencePoints = winBattle() ? 10 : 1;

//console.log(experiencePoints);


//Exercise 3

//const isString = (value) => typeof value === 'string';

//console.log(isString('hello')); // true
//console.log(isString([1, 2, 4, 0])); // false

// Exercise 4

//const sum = (a, b) => a + b;

// Exercise 5

// Function Declaration
//function kgToGrams(kg) {
//    return kg * 1000;
//  }
  
//  console.log(kgToGrams(5)); 
  
// Function Expression
//const kgToGrams = function(kg) {
//    return kg * 1000;
//  };
  
//  console.log(kgToGrams(5)); 

// Arrow Function
//const kgToGrams = (kg) => kg * 1000;

//console.log(kgToGrams(5)); 

// Function Declaration can be used before it's defined, but Function Expression can only be used after it's defined.


// Exercise 6

//(function(numberOfChildren, partnerName, geoLocation, jobTitle) {
//    document.body.innerHTML = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
//  })(3, "Harry", "Paris", "developer");
  