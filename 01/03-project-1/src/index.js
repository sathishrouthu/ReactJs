import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello Sathish.....!</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h1>Chicken Delight</h1>
      <p>Tasty and crunchy...🤩🤩🤩🤩</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
