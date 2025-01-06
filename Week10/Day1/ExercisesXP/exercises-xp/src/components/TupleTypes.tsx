import React from 'react';

const getDetails = (name: string, age: number): [string, number, string] => {
  return [name, age, `Hello, ${name}! You are ${age} years old.`];
};

const TupleTypes: React.FC = () => {
  const details = getDetails("Alice", 25);
  console.log(details);  // Output: ["Alice", 25, "Hello, Alice! You are 25 years old."]
  
  return <div>Check the console for the tuple!</div>;
};

export default TupleTypes;
