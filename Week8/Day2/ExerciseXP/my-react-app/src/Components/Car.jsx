import React, { useState } from 'react';
import Garage from './Garage'; 

function Car({ car }) {
  const [color, setColor] = useState('red');  

  return (
    <div>
      <h1>This car is a {color} {car.model}</h1>
      <Garage size="small" /> {/* Pass size prop */}
    </div>
  );
}

export default Car;
