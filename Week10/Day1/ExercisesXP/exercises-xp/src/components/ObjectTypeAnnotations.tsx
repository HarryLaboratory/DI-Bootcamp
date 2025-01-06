import React from 'react';

interface Person {
  name: string;
  age: number;
}

const createPerson = (name: string, age: number): Person => {
  return { name, age };
};

const ObjectTypeAnnotations: React.FC = () => {
  const person = createPerson("Alice", 30);
  console.log(person);  // Output: { name: "Alice", age: 30 }
  
  return <div>Check the console for the person object!</div>;
};

export default ObjectTypeAnnotations;
