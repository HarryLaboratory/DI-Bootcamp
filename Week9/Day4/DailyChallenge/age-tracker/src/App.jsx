import React from 'react';
import AgeDisplay from './components/AgeDisplay';
import AgeControls from './components/AgeControls';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Age Tracker</h1>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
}

export default App;

