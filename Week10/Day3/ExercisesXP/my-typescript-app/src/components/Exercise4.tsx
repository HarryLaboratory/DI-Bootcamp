import React from 'react';

export const Exercise4: React.FC = () => {
  const getFirstElement = (arr: (number | string)[]): string => {
    return arr[0] as string;
  };

  const mixedArray: (number | string)[] = ['hello', 42];

  return (
    <div>
      <h1>Type Assertions with Union Types</h1>
      <p>{getFirstElement(mixedArray)}</p>
    </div>
  );
};
