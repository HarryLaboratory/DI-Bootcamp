// Exercise 1

//const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//colors.forEach((color, index) => {
//  console.log(`${index + 1}# choice is ${color}.`);
//});

//if (colors.includes("Violet")) {
//  console.log("Yeah");
//} else {
//  console.log("No...");
//}


// Exercise 2

//const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//const ordinal = ["th", "st", "nd", "rd"];

//colors.forEach((color, index) => {
//  const choiceNumber = index + 1;
  
//  const suffix = (choiceNumber % 10 === 1 && choiceNumber !== 11) ? ordinal[1] : 
//                 (choiceNumber % 10 === 2 && choiceNumber !== 12) ? ordinal[2] : 
//                 (choiceNumber % 10 === 3 && choiceNumber !== 13) ? ordinal[3] : 
//                 ordinal[0];
                 
//  console.log(`${choiceNumber}${suffix} choice is ${color}.`);
//});

// Exercise 3

//------1------
//const fruits = ["apple", "orange"];
//const vegetables = ["carrot", "potato"];

//const result = ['bread', ...vegetables, 'chicken', ...fruits];
//console.log(result);

//Explaination
//The ...vegetables spreads ["carrot", "potato"] into the new array.
//The ...fruits spreads ["apple", "orange"] into the new array.
//The final array is: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange'].

//Output
//['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']


//------2------
//const country = "USA";
//console.log([...country]);

//Explaination
//The ...country spreads each character of the string "USA" into an array.
//The result is an array of characters: ['U', 'S', 'A'].

//Output
//['U', 'S', 'A']


//------Bonus------
//let newArray = [...[,,]];
//console.log(newArray);

//Explaination
//[,,] is a sparse array with two empty slots.
//The ... operator spreads the empty slots, creating a sparse array.
//The result is an array with two empty slots: [ <2 empty slots> ].

//Output
//[ <2 empty slots> ]


// Exercise 4

//const users = [
//    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
//    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
//  ];
  // Using Map
//  const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
  
//  console.log(welcomeStudents);
  
//const users = [
//    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
//    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
//  ];
  
  // Using Filter
//  const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
  
//  console.log(fullStackResidents);
 
// Chain The Filter with Map to get only the lastName of the Full Stack Residents.
//const fullStackLastNames = users
//  .filter(user => user.role === 'Full Stack Resident')
//  .map(user => user.lastName);

//console.log(fullStackLastNames);


// Exercise 5

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedEpic = epic.reduce((accumulator, currentValue) => {
  return accumulator + ' ' + currentValue;
});

console.log(combinedEpic);

// Exercise 6

const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
  ];
  
  const passedStudents = students.filter(student => student.isPassed);
  
  console.log(passedStudents);

// Bonus 

passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });
  
