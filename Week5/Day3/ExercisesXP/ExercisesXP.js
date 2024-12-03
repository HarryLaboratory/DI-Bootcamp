// Exercise 1

// The code extracts values from a nested object and logs a sentence with the person's name, city, country, and coordinates.

// Exercise 2

/*function displayStudentInfo({first, last}) {
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last: 'Schoppik'}));
*/

// Exercise 3
/*
const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1
const userArray = Object.entries(users);

// 2
const modifiedUserArray = userArray.map(([user, id]) => [user, id * 2]);

console.log(modifiedUserArray);
*/

// Exercise 4

// The code will output "object" because member is an instance of the Person class, which is considered an object in JS .


// Exercise 5

// 1 : Incorrect, because super() is missing before using this.
// 2 : Correct, as it properly calls super(name) before accessing this.
// 3 : Incorrect, because name is not defined and super(name) is used improperly.
// 4 : Incorrect, as it directly uses this without calling super() first.

// Exercise 6

// Part 1

// [2] === [2]: False, because arrays are compared by reference, not by value.
// {} === {}: False, because objects are compared by reference, not by structure.

// Part 2

// object2.number : 4 because object2 references object1, which was updated.
// object3.number : 4 because object3 also references object1 through object2.
// object4.number : 5 because object4 is a separate object and wasn't modified.

// Part 3

// Animal class
class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  // Mammal class 
  class Mammal extends Animal {
    constructor(name, type, color) {
      super(name, type, color); 
    }
  
    sound(animalSound) {
      return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
  }
  
  // Instance of the Mammal class for farmerCow
  const farmerCow = new Mammal("Lily", "cow", "brown and white");
  
  console.log(farmerCow.sound("Moooo"));
  