import  { useState } from 'react'
import './DropArea.css'
export const DropArea = ({onDrop}) => {
    const [showDrop, setshowDrop] = useState(false)
  return (
    <section
     onDragEnter={()=>setshowDrop(true)} 
     onDragLeave={()=>setshowDrop(false)}
     onDrop={()=>{
        onDrop();
        setshowDrop(false)
        }}
    onDragOver={e=>e.preventDefault()}
      className={showDrop?'drop-area':'area-hide'}>Drop Here
      </section>
  )
}
