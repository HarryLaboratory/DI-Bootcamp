import { useState } from 'react';
import './App.css';
import { validateUnionType } from './utils/validateUnionType';

function App() {
  const [inputValue, setInputValue] = useState<string>('');  
  const [isValid, setIsValid] = useState<boolean | null>(null);  

  const handleSubmit = () => {
    // To try to parse the value based on its format
    let parsedValue: any = inputValue;

    // To check if it's a valid number
    if (!isNaN(Number(inputValue))) {
      parsedValue = Number(inputValue);  
    }
    // To check if it's a valid boolean (either 'true' or 'false')
    else if (inputValue === 'true' || inputValue === 'false') {
      parsedValue = inputValue === 'true';  // Convert to boolean
    }

    
    const allowedTypes = ['string', 'number'];
    const validationResult = validateUnionType(parsedValue, allowedTypes);
    setIsValid(validationResult);  
  };

  return (
    <div className="App">
      <h1>Union Type Validator</h1>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a value"
      />
      <button onClick={handleSubmit}>Validate</button>
      {isValid !== null && (
        <p className={isValid ? 'valid' : 'invalid'}>
          {isValid ? 'Valid Type!' : 'Invalid Type!'}
        </p>
      )}
    </div>
  );
}

export default App;



