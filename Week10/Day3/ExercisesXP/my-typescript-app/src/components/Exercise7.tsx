import React from 'react';

export const Exercise7: React.FC = () => {
  const formatInput = <T extends { toString: () => string }>(input: T): string => {
    return input.toString();
  };

  const inputNumber: number = 42;
  const inputDate: Date = new Date();

  return (
    <div>
      <h1>Type Assertions and Generic Constraints</h1>
      <p>{formatInput(inputNumber)}</p>
      <p>{formatInput(inputDate)}</p>
    </div>
  );
};
