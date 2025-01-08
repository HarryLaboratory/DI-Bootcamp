import React from 'react';
import './App.css';
import { handleData, User, Product, Order } from './utils/handleData';

const App: React.FC = () => {
  // The example data : User, Product, Order
  const data: (User | Product | Order)[] = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 25.99 },
    { type: 'order', orderId: 'ORD123', amount: 59.99 }
  ];

  // To process the data using handleData function
  const result = handleData(data);

  return (
    <div className="App">
      <h1>Data Handling Results</h1>
      <ul>
        {result.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

