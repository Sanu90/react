import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
      useEffect(() => {
    console.log("Mounting..........");
    return () => {
      console.log("unmounting.........");
    };
  },[]);
  

  return (
    <>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Add</button>{" "}
      <button onClick={() => setCount(count >= 1 && count - 1)}>
        Subtract
      </button>{" "}
      <button onClick={() => setCount(0)}>Zero</button>
    </>
  );
}

export default Counter;
