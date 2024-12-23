import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  // useEffect hook show alert component renders
  useEffect(() => {
    alert("useEffect reached");
  }, []);

  // To change color to blue
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>{favoriteColor}</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Color;
