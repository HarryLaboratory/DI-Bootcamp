// src/App.tsx
import React from 'react';
import HelloWorld from './components/HelloWorld';
import TypeAnnotations from './components/TypeAnnotations';
import UnionTypes from './components/UnionTypes';
import ControlFlow from './components/ControlFlow';
import TupleTypes from './components/TupleTypes';
import ObjectTypeAnnotations from './components/ObjectTypeAnnotations';
import TypeAssertions from './components/TypeAssertions';
import SwitchStatement from './components/SwitchStatement';
import FunctionOverloading from './components/FunctionOverloading';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>TypeScript Exercises</h1>
      <HelloWorld />
      <TypeAnnotations />
      <UnionTypes />
      <ControlFlow />
      <TupleTypes />
      <ObjectTypeAnnotations />
      <TypeAssertions />
      <SwitchStatement />
      <FunctionOverloading />
    </div>
  );
};

export default App;

