import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="container">
      <h1>👋 Welcome to the Real-Time Clock App</h1>
      <p className="subtitle">Your local date and time is:</p>
      <div className="clock-box">
        <h2>{currentTime.toLocaleDateString()}</h2>
        <h3>{currentTime.toLocaleTimeString()}</h3>
      </div>
    </div>
  );
}

export default App;
