import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)
  const [operation, setOperation] = useState('add')

  // to handle the calculation
  const calculate = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers')
      return
    }

    let calculationResult
    switch (operation) {
      case 'add':
        calculationResult = n1 + n2
        break
      case 'subtract':
        calculationResult = n1 - n2
        break
      case 'multiply':
        calculationResult = n1 * n2
        break
      case 'divide':
        if (n2 === 0) {
          setResult('Cannot divide by zero')
          return
        }
        calculationResult = n1 / n2
        break
      default:
        calculationResult = 0
    }
    setResult(calculationResult)
  }

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <select onChange={(e) => setOperation(e.target.value)} value={operation}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <button onClick={calculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  )
}

export default App

