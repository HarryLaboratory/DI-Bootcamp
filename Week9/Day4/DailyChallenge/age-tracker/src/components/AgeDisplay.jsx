import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {
  const { age, loading } = useSelector((state) => state.age);

  return (
    <div>
      <h2>Age: {age}</h2>
      {loading && <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Loading_icon.gif" alt="Loading..." />}
    </div>
  );
};

export default AgeDisplay;
