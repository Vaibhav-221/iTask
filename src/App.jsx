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
      <div className='container mx-auto my-5 rounded-xl p-5 bg-slate-400 text-black min-h-[75vh]'>
        <div className="addtodo">
          <h2 className='text-black text-lg font-bold'>Add a todo</h2>
        </div>
        <input type="text" />
        <button className='bg-slate-800 mx-2 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-6 py-2 text-sm font-bold text-white' >Add</button>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          <div className='todo flex'>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className="button">
              <button className='bg-slate-800 mx-2 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-6 py-2 text-sm font-bold text-white' >Edit</button>
              <button className='bg-slate-800 mx-1 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-6 py-2 text-sm font-bold text-white' >Delete</button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
