import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ColorPicker from './components/ColorPicker'

const App = () => {

  const [isVisible, setIsVisible]=useState(false);
  const [color,setColor]=useState("#ffffff");

  return (
    <div id="page" className='h-screen w-full flex flex-col items-center relative' style={{backgroundColor: color}}>
      <div className='items-center flex flex-col'>
         <Navbar isVisible={isVisible} setIsVisible={setIsVisible}/>
         {isVisible&&<ColorPicker color={color} setColor={setColor}/>}
      </div>
      <div className='flex justify-center flex-1 absolute w-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <p className='font-bold text-[19px] text-center'>Set your background color by clicking to the color picker</p>
      </div>
      
    </div>
  )
}

export default App