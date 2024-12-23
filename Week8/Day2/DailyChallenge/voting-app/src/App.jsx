import { useState } from 'react'
import './App.css'

function App() {
  // Step 1: Set up
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ])

  // Step 2: function that increases the vote count by 1.
  const increaseVotes = (index) => {
    const updatedLanguages = [...languages]; 
    updatedLanguages[index].votes += 1; 
    setLanguages(updatedLanguages); 
  };

  return (
    <div className="App">
      <h1>Vote for your favorite programming language</h1>
      <div className="languages">
        {/* Step 3: Render buttons and display vote counts */}
        {languages.map((language, index) => (
          <div key={index} className="language">
            <button onClick={() => increaseVotes(index)}>
              Vote for {language.name}
            </button>
            <p>{language.name} has {language.votes} votes</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

