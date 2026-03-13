import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, [])



  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handladd = () => {
    if (todo.trim() === "") return;
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    saveToLS()

  }
  const handlchange = (e) => {
    settodo(e.target.value)

  }
  const handledit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    settodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    settodos(newTodos)
    saveToLS()



  }
  const handldelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    settodos(newTodos)
    saveToLS()

  }

  const handlcheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos)
    saveToLS()
    // saveToLS()

  }

  const togglefinished = (e) => {
    setshowFinished(!showFinished)
  }


  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] flex items-start justify-center py-10">

        <div className='w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6 md:p-8 text-white min-h-[75vh]'>

          <h1 className="font-bold text-center text-3xl md:text-4xl mb-6 tracking-wide">
            iTask
            <span className="block text-base md:text-lg font-normal text-slate-300 mt-1">
              Manage your todos at one place
            </span>
          </h1>

          <div className="addtodo mb-4">
            <h2 className='text-lg font-semibold text-slate-200'>Add a Todo</h2>
          </div>


          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <input onChange={handlchange} value={todo} type="text"
              placeholder="Write your next task..."
              className='flex-1 rounded-xl px-4 py-2 bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-300'
            />

            <button
              onClick={handladd}
              className='bg-cyan-500 hover:bg-cyan-600 transition px-6 py-2 rounded-xl font-semibold shadow-lg shadow-cyan-500/20'
            >
              Save
            </button>
          </div>

          <div className="flex items-center justify-between bg-white/10 border border-white/20 rounded-xl px-4 py-3 mb-6">
            <label htmlFor="show" className="font-medium text-slate-200 flex items-center gap-3">
              <input
                type="checkbox"
                checked={showFinished}
                onChange={togglefinished}
                className="accent-cyan-400 scale-110"
              />
              Show Finished Tasks
            </label>

            <span className="text-sm text-slate-300">
              {showFinished ? "Visible" : "Hidden"}
            </span>
          </div>

          <h2 className="text-lg font-semibold mb-3 text-slate-200">Your Todos</h2>

          <div className="todos space-y-3">
            {todos.length === 0 && <div className="text-slate-400">No todos to display</div>}


            {todos.map((item) => {

              return (showFinished || !item.isCompleted) && <div key={item.id} className='todo flex items-center justify-between gap-4 bg-white/10 border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition'>

                <div className="flex items-center gap-3 flex-1">
                  <input
                    name={item.id}
                    onChange={handlcheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                    className="accent-cyan-400 scale-110"
                  />

                  <div className={`${item.isCompleted ? "line-through opacity-60" : ""}`}>
                    {item.todo}
                  </div>
                </div>

                <div className="button flex gap-2">

                  <button
                    onClick={(e) => { handledit(e, item.id) }}
                    className='bg-indigo-500 hover:bg-indigo-600 transition rounded-lg px-3 py-2 text-white shadow-md flex items-center justify-center'
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={(e) => { handldelete(e, item.id) }}
                    className='bg-rose-500 hover:bg-rose-600 transition rounded-lg px-3 py-2 text-white shadow-md flex items-center justify-center'
                  >
                    <MdDelete />
                  </button>
                </div>

              </div>

            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default App