import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");

  // Counter functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);
  const incrementFive = () => setCount(count + 5);

  return (
    <div className="container">
      <h1>🧮 React Counter App</h1>

      <div className="counter-box">
        <h2>Count: {count}</h2>
        <div className="buttons">
          <button onClick={increment}>+ Increment</button>
          <button onClick={decrement}>- Decrement</button>
          <button onClick={incrementFive}>+5 Increment</button>
          <button onClick={reset}>🔄 Reset</button>
        </div>
      </div>

      <div className="name-section">
        <h2>👤 Enter Your Details</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <p className="display-name">
          Hello, <strong>{firstName} {surname}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;
