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
        <button onClick={() => setSteps((val) => val - 1)}> - </button>
        Steps : {steps}
        <button onClick={() => setSteps((val) => val + 1)}> + </button>
      </div>
      <div className="counter">
        <button onClick={() => setCount((val) => val - steps)}> - </button>
        Count : {count}
        <button onClick={() => setCount((val) => val + steps)}> + </button>
      </div>
      <p>
        <span>
          {" "}
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
