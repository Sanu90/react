import { useState } from 'react'
import './App.css'

function App() {
  const [text,setText]=useState()

  let toggle=()=>{
    if(text){
      setText('')
    }else{
      setText('Hi Toggle')
    }
    console.log("toggle clicked");
    
  }
  

  return (
    <>
      <h1>Toggle Text</h1>
      <h2 id='hColor'>{text}</h2>

      <button className='b1' onClick={toggle}>toggle</button>
    </>
  )
}

export default App
