import "./App.css";
import { useState } from "react";
import Name from "./Component/Name";
import Counter from "./Component/Counter";

function App() {
  const [state, setState] = useState(true);
  let toggle = () => {
    setState(!state);
  };

  let lName = "Divakaran";

  return (
    <>
      <h2>Toggle statement using useState</h2>
      <button onClick={toggle}>Click</button>
      {state && <Name lname={lName} />}
      <h2>Counter using useState</h2>
      <Counter />
    </>
  );
}

export default App;
