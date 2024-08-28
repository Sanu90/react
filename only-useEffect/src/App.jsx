import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);

  useEffect(() => {
    console.log("useEffect on");
  }, [count1,count2]);

  return (
    <>
      <h1>Hi useEffect</h1>
      <h2>State 1</h2>
      <p>{count1}</p>
      <button
        style={{ backgroundColor: "grey" }}
        onClick={() => setCount1(count1 + 1)}
      >
        +
      </button>{" "}
      <button
        style={{ backgroundColor: "yellow" }}
        onClick={() => count1 > 0 && setCount1(count1 - 1)}
      >
        -
      </button>
      <h1>----</h1>
      <h2>State 2</h2>
      <p>{count2}</p>
      <button
        style={{ backgroundColor: "yellow" }}
        onClick={() => count2 < 100 && setCount2(count2 + 1)}
      >
        +
      </button>{" "}
      <button
        style={{ backgroundColor: "grey" }}
        onClick={() => setCount2(count2 - 1)}
      >
        -
      </button>
    </>
  );
}

export default App;
