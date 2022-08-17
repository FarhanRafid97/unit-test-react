import React, { useState } from 'react';

const Counter = ({ number }) => {
  const [count, setCount] = useState(number);

  return (
    <div className="flex items-center">
      <button
        className="btn mr-4"
        type="submit"
        aria-label="increment"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
      <p className="text-lg" data-testid="counter">
        {count}
      </p>
      <button
        className="btn ml-4"
        aria-label="decrement"
        name="incremenet"
        onClick={() => setCount((c) => (c <= 0 ? 0 : c - 1))}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
