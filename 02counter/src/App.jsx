import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course guru {counter}</h1>
      <h2>counter value : {counter} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer : </p>

    </>
  )
}

export default App
