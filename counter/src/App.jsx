import { useState } from 'react'

import './App.css'

function App() {
 // let counter=0;

  let [counter,setCounter]=useState(0)

  let increment = ()=>{
    setCounter(counter+1);
    console.log('increment counter', counter);
    
}

let decrement = () =>{
  if(counter>=1){
  setCounter(counter-1);
  }else setCounter(0);
  
  console.log('decrement counter', counter);
}

let reset = ()=>{
  setCounter(0);
}

  return (
    <>
    <h1>Counter using React</h1>
    <p>{counter}</p>

    <button className="b1" onClick={increment}>Increment</button>  {" "}
    <button className='b2' onClick={decrement}>Decrement</button> <br/><br/>
    <button className='b2' onClick={reset}>Reset</button>

    <p>{counter}</p>

    </>
  )
}

export default App
