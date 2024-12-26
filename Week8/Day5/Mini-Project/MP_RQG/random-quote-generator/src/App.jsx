import { useState } from 'react';
import quotes from './quotes';  
import './App.css';

// To declare getRandomColor as a function declaration 
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  // To initialize state with a random quote index
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [textColor, setTextColor] = useState(getRandomColor());
  const [buttonColor, setButtonColor] = useState(getRandomColor());

  // To generate a new random quote
  const generateRandomQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === quoteIndex);  // To avoid same quote twice
    setQuoteIndex(newIndex);

    // To change colors randomly
    setBgColor(getRandomColor());
    setTextColor(getRandomColor());
    setButtonColor(getRandomColor());
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <div className="quote-box" style={{ color: textColor }}>
        <h1>{quotes[quoteIndex].quote}</h1>
        <p>- {quotes[quoteIndex].author}</p>
        <button 
          style={{ backgroundColor: buttonColor }} 
          onClick={generateRandomQuote}>
          Get New Quote
        </button>
      </div>
    </div>
  );
}

export default App;


