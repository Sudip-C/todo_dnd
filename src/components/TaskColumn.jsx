import React from 'react'
import { DropArea } from './DropArea'
import { TaskCard } from './TaskCard';
import './TaskColumn.css'

export const TaskColumn = ({title,tasks,status,setActiveCard,onDrop}) => {
  return (
    <section className='task-Column'>
    <h1>{title}</h1>
    <hr></hr>
    <DropArea onDrop={()=>onDrop(status,0)}/>
    {tasks?.map((e,index)=>e.status===status && (
        <React.Fragment key={e.id}>
        <TaskCard  
        title={e.title} 
        index={index} 
        setActiveCard={setActiveCard} />
        <DropArea onDrop={()=>onDrop(status,index+1)} />
        </React.Fragment>
    ))}


    </section>
  )
}
