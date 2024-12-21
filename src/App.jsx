
import { useEffect, useState } from 'react'
import './App.css'
import { TaskColumn } from './components/TaskColumn';
import { useDispatch, useSelector } from 'react-redux';
import { getdata, postData, updtaeData } from './redux/action';
function App() {
const Data=useSelector((e)=>e.dataReducer.data)
const [task,setTask]=useState([])
const [ActiveCard, setActiveCard] = useState(null);
const [Input,setInput]=useState('')

const dispatch=useDispatch();

useEffect(()=>{
  dispatch(getdata())
},[dispatch])

const onDrop=async(status,position)=>{
if(ActiveCard===null || ActiveCard===undefined) return;

const taskMove=Data[ActiveCard];
const updatedTask=Data.filter((task,index)=>index!==ActiveCard)

updatedTask.splice(position,0,{
  ...taskMove,
  status:status
})
setTask(updatedTask)
dispatch(updtaeData(taskMove.id,status))
.then(()=>dispatch(getdata()))
}

const handleClick=(e)=>{
  e.preventDefault()
      const obj={
        id:Math.random()*10,
        title:Input,
        status:"todo"
      }
dispatch(postData(obj))
.then(()=>dispatch(getdata()))
setInput("")
}



  return (
    
   <div className='App'>
   <div>
   <input className='inputBox' value={Input} 
    onChange={e=>setInput(e.target.value)}
    type='text' placeholder='add your task'/>
   <button onClick={handleClick} >Add Task</button>
   </div>
   <div className='container'>
   <TaskColumn 
   title="Todo"
    tasks={Data}
    setActiveCard={setActiveCard}
    onDrop={onDrop}
    status="todo"
   />
   <TaskColumn
    title="Pending"
    tasks={Data}
    setActiveCard={setActiveCard}
    onDrop={onDrop}
    status='pending'
   />
   <TaskColumn
    title="completed"
    tasks={Data}
    setActiveCard={setActiveCard}
    onDrop={onDrop}
    status='completed'
   />
   </div>
   </div>
  )
}

export default App
