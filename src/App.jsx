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
      <div className='container mx-auto my-10 rounded-2xl shadow-xl p-6 md:p-8 bg-[#EBF4DD] text-[#3B4953] min-h-[75vh] max-w-3xl'>

        <div className="addtodo mb-4">
          <h2 className='text-2xl font-bold text-[#3B4953]'>Add a Todo</h2>
        </div>


        <div className="flex flex-col md:flex-row gap-3 mb-5">
          <input onChange={handlchange} value={todo} type="text" placeholder="Write your task..." className='flex-1 rounded-lg px-4 py-2 border border-[#90AB8B] focus:outline-none focus:ring-2 focus:ring-[#5A7863] bg-white' />
          <button onClick={handladd} className='bg-[#5A7863] hover:bg-[#3B4953] transition rounded-lg px-6 py-2 text-sm font-semibold text-white shadow-md'>Save</button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" checked={showFinished} onChange={togglefinished} className="accent-[#5A7863]" />
          <label htmlFor="show" className="font-medium">Show Finished</label>
        </div>

        <h2 className="text-xl font-bold mb-4">Your Todos</h2>

        <div className="todos space-y-3">
          {todos.length === 0 && <div className="text-gray-600">No todos to display</div>}


          {todos.map((item) => {

            return (showFinished || !item.isCompleted) && <div key={item.id} className='todo flex items-center justify-between gap-4 bg-white rounded-xl shadow-md px-4 py-3 border border-[#90AB8B]'>

              <div className="flex items-center gap-3 flex-1">
                <input name={item.id} onChange={handlcheckbox} type="checkbox" value={item.isCompleted} className="accent-[#5A7863] scale-110" />
                <div className={`${item.isCompleted ? "line-through opacity-60" : ""} break-words`}> {item.todo}</div>
              </div>

              <div className="button flex gap-2">

                <button onClick={(e) => { handledit(e, item.id) }} className='bg-[#90AB8B] hover:bg-[#5A7863] transition rounded-lg px-3 py-2 text-white shadow-sm flex items-center justify-center'><FaEdit /></button>

                <button onClick={(e) => { handldelete(e, item.id) }} className='bg-[#3B4953] hover:bg-black transition rounded-lg px-3 py-2 text-white shadow-sm flex items-center justify-center'><MdDelete /></button>
              </div>

            </div>

          })}

        </div>
      </div>
    </>
  )
}

export default App