import React, { useEffect } from 'react';

const TypeAssertions: React.FC = () => {
  useEffect(() => {
   
    const inputElement = document.getElementById('inputField') as HTMLInputElement;
    
    if (inputElement) {
      inputElement.value = "Hello, TypeScript!";
    }
  }, []); 

  return <div><input id="inputField" /></div>;
};

export default TypeAssertions;

