import React, { useState } from 'react';

function Phone() {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  // To change color to blue
  const changeColor = () => setColor('blue');

  return (
    <div>
      <h2>Brand: {brand}</h2>
      <h3>Model: {model}</h3>
      <p>Color: {color}</p>
      <p>Year: {year}</p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Phone;
