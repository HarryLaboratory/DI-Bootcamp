import React from 'react';
import './Exercise.css';
import Counter from './counter';
import Exercise3 from './Exercise3';
import UserFavoriteAnimals from './UserFavoriteAnimals';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
};

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Exercises</h1>
      
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      
      <Counter />

      <Exercise3 />
    </div>
  );
}

export default App;


