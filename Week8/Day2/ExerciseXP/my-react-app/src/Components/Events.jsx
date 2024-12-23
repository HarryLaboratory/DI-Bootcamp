import React, { useState } from 'react';

function Events() {
  const [inputText, setInputText] = useState('');
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Alert message 
  const clickMe = () => {
    alert('I was clicked');
  };

  // Alert message 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You pressed Enter. Text: ${inputText}`);
    }
  };

  // Toggle ON and OFF
  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      {/* Button to trigger clickMe function */}
      <button onClick={clickMe}>Click me</button>

      {/* Input field with onKeyDown event */}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Button to toggle ON/OFF */}
      <button onClick={toggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
