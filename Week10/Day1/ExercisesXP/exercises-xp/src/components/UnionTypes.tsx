import React from 'react';

const UnionTypes: React.FC = () => {
  let id: string | number = "123ABC";
  console.log(id); // Outputs: 123ABC

  id = 456;
  console.log(id); // Outputs: 456
  
  return <div>Check the console for ID!</div>;
};

export default UnionTypes;
