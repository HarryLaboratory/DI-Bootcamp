import React from 'react';
import { Person, Address } from '../types';

export const Exercise1: React.FC = () => {
  type PersonWithAddress = Person & Address;

  const personWithAddress: PersonWithAddress = {
    name: 'John Doe',
    age: 30,
    street: '57th street',
    city: 'New York',
  };

  return (
    <div>
      <h1>Intersection Types</h1>
      <p>Name: {personWithAddress.name}</p>
      <p>Age: {personWithAddress.age}</p>
      <p>Street: {personWithAddress.street}</p>
      <p>City: {personWithAddress.city}</p>
    </div>
  );
};
