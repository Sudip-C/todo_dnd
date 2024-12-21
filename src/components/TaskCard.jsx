import './TaskCard.css'
export const TaskCard = ({title,index,setActiveCard}) => {
  return (
    <div className='task-card' draggable onDragStart={()=>setActiveCard(index)} 
    onDragEnd={()=>setActiveCard(null)} >
        <h2>
            {title}
        </h2>
    </div>
  )
}
