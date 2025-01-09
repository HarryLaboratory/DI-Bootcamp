import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const increment = () => {
    setCount(count + 1);
    setLastAction("Incremented");
  };

  const decrement = () => {
    setCount(count - 1);
    setLastAction("Decremented");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Last Action: {lastAction}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
