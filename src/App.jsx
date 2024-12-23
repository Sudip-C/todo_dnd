
import { useEffect, useState } from 'react'
import './App.css'
import { TaskColumn } from './components/TaskColumn';
import { useDispatch, useSelector } from 'react-redux';
import { getdata, postData, updtaeData } from './redux/action';


function App() {

const Data=useSelector((e)=>e.dataReducer.data);
const [task,setTask]=useState([])
const [searchData,setSearchData]=useState([]);
const [ActiveCard, setActiveCard] = useState(null);
const [Input,setInput]=useState('');
const [search,setSearch]=useState("");


const [options,setOptions]=useState("todo")

const dispatch=useDispatch();

useEffect(()=>{
  dispatch(getdata())
},[dispatch])

const onDrop = async(status,position)=>{
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
        status:options
      }
dispatch(postData(obj))
.then(()=>dispatch(getdata()))
setInput("")
setOptions("todo")
}





  return (
    
   <div className='App'>
   <div>
   <input className='inputBox' value={Input} 
    onChange={e=>setInput(e.target.value)}
    type='text' placeholder='add your task'/>

   <button onClick={handleClick} >Add Task</button>

<select onChange={(e)=>setOptions(e.target.value)}  name="" id="">

  <option value="todo">todo</option>
  <option value="pending">pending</option>
  <option value="completed">completed</option>
</select>


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
