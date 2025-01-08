import React from 'react';

export const Exercise3: React.FC = () => {
  let someValue: any = 42;
  const castedValue = someValue as string;

  return (
    <div>
      <h1>Type Casting</h1>
      <p>{castedValue}</p>
    </div>
  );
};
