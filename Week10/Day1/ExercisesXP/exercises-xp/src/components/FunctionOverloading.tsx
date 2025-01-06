import React from 'react';

function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello, stranger!";
  }
}

const FunctionOverloading: React.FC = () => {
  console.log(greet("Alice")); // Outputs: Hello, Alice!
  console.log(greet()); // Outputs: Hello, stranger!

  return <div>Check the console for greetings!</div>;
};

export default FunctionOverloading;
