import React, { useState } from 'react';

export default function SeparateApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <div>
      <h1>Separate App</h1>
      <div>
        <button type="button" onClick={decrement}>
          -
        </button>
        {count}
        <button type="button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
