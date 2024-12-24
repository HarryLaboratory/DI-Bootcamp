import { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent'; 

function App() {
  // To hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false,
    nutsFree: false,
    vegan: false,
  });

  // To handle input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // To handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // To construct query string for the URL
    const queryString = new URLSearchParams(formData).toString();
    window.history.pushState({}, '', `?${queryString}`);
  };

  return (
    <div className="App">
      <h1>React Form Challenge</h1>
      
      {/* Render the FormComponent with necessary props */}
      <FormComponent 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />
      
      {/* Display current form data */}
      <div>
        <h3>Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;

