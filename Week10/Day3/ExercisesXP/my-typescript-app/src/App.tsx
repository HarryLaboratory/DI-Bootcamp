import React from 'react';
import { Exercise1 } from './components/Exercise1';
import { Exercise2 } from './components/Exercise2';
import { Exercise3 } from './components/Exercise3';
import { Exercise4 } from './components/Exercise4';
import { Exercise5 } from './components/Exercise5';
import { Exercise6 } from './components/Exercise6';
import { Exercise7 } from './components/Exercise7';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>TypeScript Exercises</h1>
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
      <Exercise5 />
      <Exercise6 />
      <Exercise7 />
    </div>
  );
};

export default App;
