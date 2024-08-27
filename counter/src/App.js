import "./App.css";
import { useState } from "react";
import { Counter } from "./counter";

function App() {
  let [counter, setCounter] = useState(15);
  let add = () => {
    setCounter(counter + 1);
    console.log("add", counter);
  };
  let minus = () => {
    counter > 0 && setCounter(counter - 1);
    console.log("minus", counter);
  };

  let makeZero = () => {
    setCounter(0);
  };

  let obj=[
    {title:'first',name:'c1', counter},
    {title:'second',name:'c2',counter}
  ]



  return (
    <>
      <Counter {...obj[0]} />
      <Counter {...obj[1]} />
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
      <button onClick={makeZero}>Make Zero</button>
    </>
  );
}

export default App;
