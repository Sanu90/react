//import { useState } from 'react'

import './App.css'

function App() {

  let details=[{
    name:'sanup', email:'sanup@gmail.com'
  },
  {
    name:'aswin', email:'aswin@yahoo.com'
  }
  ] 

  let data=details.map((val,index)=>{
    return (
      <div className='profile_card' key={index}>
      <h2 key={val.name}>name {val.name}</h2>
      <h3 key={val.email}>email {val.email}</h3>{' '}
      <br/>
</div>
    )
  })
  

  return (
    <>
      <h1>Reusable Components</h1> 
      {data}
    </>
  )
}

export default App
