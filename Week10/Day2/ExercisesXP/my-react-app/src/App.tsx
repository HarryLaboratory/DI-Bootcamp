import React from 'react';
import Employee from './components/Employee';
import Product from './components/Product';
import Dog from './components/Dog';
import Calculator from './components/Calculator';
import './App.css';

// The interface for Exercise 5 (User and PremiumUser)
interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser) {
  console.log(`User Details:`);
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  }
}

const App: React.FC = () => {
  // Employee Example
  const employee = new Employee("John Doe", 50000, "Software Engineer", "IT");

  // Product Example
  const product = new Product(1, "Laptop", 1000);

  // Dog Example (Inheritance)
  const dog = new Dog("Rex");

  // Calculator Example
  const sum = Calculator.add(10, 5);
  const difference = Calculator.subtract(10, 5);

  // PremiumUser Example
  const premiumUser: PremiumUser = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    membershipLevel: 'Gold',
  };

  // To print user details to console
  printUserDetails(premiumUser);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Exercise 1: Employee Info</h1>
      <p>{employee.getEmployeeInfo()}</p>

      <h1>Exercise 2: Product Info</h1>
      <p>{product.getProductInfo()}</p>

      <h1>Exercise 3: Dog Sound</h1>
      <p>{dog.makeSound()}</p>

      <h1>Exercise 4: Calculator</h1>
      <p>Sum: {sum}</p>
      <p>Difference: {difference}</p>

      <h1>Exercise 5: Premium User Info</h1>
      <p>Name: {premiumUser.name}</p>
      <p>Email: {premiumUser.email}</p>
      <p>Membership Level: {premiumUser.membershipLevel}</p>
    </div>
  );
};

export default App;



