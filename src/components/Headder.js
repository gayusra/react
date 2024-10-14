import React from 'react'
import './style.css'

function Headder(props) {
  return (
     <>
       <div className='header'>
          <h1>{props.title}</h1>
       </div>
     </>
  )
}

export default Headder