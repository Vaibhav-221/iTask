import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handladd = () => {
    if (todo.trim() === "") return;
  settodos([...todos, {id : uuidv4(),  todo, isCompleted: false }]);
  settodo("");

  }
  const handlchange = (e) => {
    settodo(e.target.value)

  }
  const handledit = (e, id) => {
    let t = todos.filter(i=>i.id === id)
    settodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    settodos(newTodos)



  }
  const handldelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    settodos(newTodos)

  }

  const handlcheckbox = (e) => {
    let id = e.target.name;  
    let index = todos.findIndex(item=>{
      return item.id === id;
    }) 
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos)
    // saveToLS()
    
  }
  

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-5 rounded-xl p-5 bg-slate-400 text-black min-h-[75vh]'>

        <div className="addtodo">
          <h2 className='text-black text-lg font-bold'>Add a todo</h2>
        </div>


        <input onChange={handlchange} value={todo} type="text" className='w-1/2' />
        <button onClick={handladd} className='bg-slate-800 mx-2 
        
        rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-6 py-2 text-sm font-bold text-white' >Save</button>

        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
          {todos.length ===0 &&<div>No todos to display</div> }


          {todos.map((item) => {

             return <div key={item.id} className='todo flex w-1/2 justify-between my-2'>
              <input name={item.id} onChange={handlcheckbox}  type="checkbox" value={item.isCompleted} />
              <div className={item.isCompleted?"line-through":""}> {item.todo}</div>

              <div className="button">

                <button onClick={(e)=>{handledit(e, item.id)}} className='bg-slate-800 mx-2 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-6 py-2 text-sm font-bold text-white' >Edit</button>

                <button onClick={(e)=>{handldelete(e, item.id)}} className='bg-slate-800 mx-1 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-6 py-2 text-sm font-bold text-white' >Delete</button>
              </div>

            </div>

          })}

        </div>
      </div>
    </>
  )
}

export default App
