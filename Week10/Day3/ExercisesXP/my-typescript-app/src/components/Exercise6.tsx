import React from 'react';
import { Employee } from '../types'; 

export const Exercise6: React.FC = () => {
  const describeEmployee = (employee: Employee): string => {
    if (employee.position === 'Manager') {
      return `${employee.name} is a Manager in the ${employee.department} department.`;
    } else if (employee.position === 'Developer') {
      return `${employee.name} is a Developer in the ${employee.department} department.`;
    } else {
      return `${employee.name} works in the ${employee.department} department.`;
    }
  };

  const employee: Employee = {
    name: 'John Doe',
    age: 30,
    position: 'Developer',
    department: 'Engineering',
  };

  return (
    <div>
      <h1>Intersection Types and Type Guards</h1>
      <p>{describeEmployee(employee)}</p>
    </div>
  );
};



