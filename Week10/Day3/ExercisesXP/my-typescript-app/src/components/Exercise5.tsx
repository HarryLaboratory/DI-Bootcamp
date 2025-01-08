export const Exercise5: React.FC = () => {
    function logLength<T extends { length: number }>(input: T): void {
      console.log("Logging Length: ", input.length); 
    }
  
    const inputValue = 'Hello, World!';
    const arrayValue = [1, 2, 3, 4, 5];
  
    const handleClickString = () => {
      console.log("Button clicked for string!"); 
      logLength(inputValue); 
    };
  
    const handleClickArray = () => {
      console.log("Button clicked for array!"); 
      logLength(arrayValue); 
    };
  
    return (
      <div>
        <h1>Log Length Example</h1>
        <button onClick={handleClickString}>Log String Length</button>
        <button onClick={handleClickArray}>Log Array Length</button>
      </div>
    );
  };
  
  
  
  


