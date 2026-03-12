import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-5 rounded-xl p-5 bg-slate-500 text-white'>
        <div className="addtodo">
          <h1 className='text-white text-xl font-bold'>Add a todo</h1>
        </div>
        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todo">

        </div>
      </div>
    </>
  )
}

export default App
