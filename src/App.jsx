import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ColorPicker from './components/ColorPicker'
import { readableColor } from 'polished'


const App = () => {

  const [isVisible, setIsVisible]=useState(false);
  const [color,setColor]=useState("#ffffff");
  const dynamicTextColor= readableColor(color);

  return (
    <div id="page" className='h-screen w-full flex flex-col items-center relative transition-colors duration-150 ease-in-out' style={{backgroundColor: color, color:dynamicTextColor}}>
      <div className='items-center flex flex-col'>
         <Navbar isVisible={isVisible} setIsVisible={setIsVisible}/>
         {isVisible&&<ColorPicker color={color} setColor={setColor}/>}
      </div>
      <div className='flex justify-center flex-1 absolute w-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ease-in-out'>
        <p className='font-bold text-[19px] text-center'>Set your background color by clicking to the Show Color Picker written above</p>
      </div>
      

    </div>
  )
}

export default App