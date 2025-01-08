import React from 'react';

export const Exercise2: React.FC = () => {
  const describeValue = (value: number | string): string => {
    if (typeof value === 'number') {
      return 'This is a number';
    } else {
      return 'This is a string';
    }
  };

  return (
    <div>
      <h1>Type Guards with Union Types</h1>
      <p>{describeValue(42)}</p>
      <p>{describeValue('Hello')}</p>
    </div>
  );
};
