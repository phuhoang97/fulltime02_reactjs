import React, { useRef, useState } from "react";

function DemoUseRef() {
  const [count, setCount] = useState(60);
  let timer = useRef();

  const handleStart = () => {
    timer.current = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timer.current);
  };

  return (
    <div>
      <h2>Demo useRef</h2>
      <h3>{count}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default DemoUseRef;
