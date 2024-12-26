import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [helloMessage, setHelloMessage] = useState('');

  // Fetching the hello message from the Express server when the component mounts
  useEffect(() => {
    const fetchHelloMessage = async () => {
      const response = await fetch('http://localhost:5000/api/hello');
      const message = await response.text();
      setHelloMessage(message);
    };

    fetchHelloMessage();
  }, []);

  // To handle the form input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // To handle the form submission (POST request to Express server)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputValue }),
    });

    const data = await response.json();
    setResponseMessage(data.response);  // To display the response from the server
  };

  return (
    <div className="App">
      <h1>Express + React</h1>
      
      {/* Display the hello message from Express */}
      <h2>{helloMessage}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display the response from the server after form submission */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default App;

