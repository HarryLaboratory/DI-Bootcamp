import React from 'react';

const TypeAnnotations: React.FC = () => {
  const age: number = 30;
  const name: string = "John Doe";
  
  console.log(age, name); // Outputs: 30 "John Doe"
  
  return <div>Check the console for age and name!</div>;
};

export default TypeAnnotations;
