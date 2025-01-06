import React from 'react';

const ControlFlow: React.FC = () => {
  const checkNumber = (num: number): string => {
    if (num > 0) {
      return 'Positive';
    } else if (num < 0) {
      return 'Negative';
    } else {
      return 'Zero';
    }
  };

  console.log(checkNumber(5));   // Positive
  console.log(checkNumber(-2));  // Negative
  console.log(checkNumber(0));   // Zero

  return <div>Check the console for number status!</div>;
};

export default ControlFlow;
