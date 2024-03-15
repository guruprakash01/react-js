import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'guru',
    age: '24',
    address: {
      city: 'chennai',
      state: 'tamilnadu'
    }
  }
  let newArr = [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="guru" myArr={newArr} />
      <Card username='pandi' post='staff engg' />
    </>
  )
}

export default App
