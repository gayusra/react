import React, { useRef } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import './style.css'

function Additem({newItem,setNewItem,handleSubmit}) {

  const inputref = useRef('')


  return (
     <>
      <form className='addForm'  onSubmit={handleSubmit}>
        <label htmlFor="additem">Add Item</label>
        <input
        ref={inputref} 
        type="text"
         id='additem' 

        placeholder='Add item' value={newItem} 
        onChange={(e) => setNewItem(e.target.value)}
     
        
        
        />
        <button  type='submit' onClick={() => inputref.current.focus() } ><FaPlusCircle /></button>


      </form>
     </>
  )
}

export default Additem