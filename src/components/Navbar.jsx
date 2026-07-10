import React, { useState } from 'react'
import ColorPicker from './ColorPicker';

const Navbar = ({isVisible, setIsVisible}) => {

  return (
    <button onClick={()=>{
        console.log("Clicked")
        setIsVisible(!isVisible)
    }} className='cursor-pointer h-fit w-fit'>{isVisible?"Hide":"Show"} Color Picker</button>

  )
}

export default Navbar