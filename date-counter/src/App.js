import "./index.css";

import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="steps">
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
        <span className="stepslabel">{steps}</span>
      </div>
      <div className="counter">
        <button onClick={() => setCount((val) => val - steps)}> - </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((val) => val + steps)}> + </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(count !== 0 || steps !== 1) && (
        <button
          onClick={() => {
            setCount(0);
            setSteps(1);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
