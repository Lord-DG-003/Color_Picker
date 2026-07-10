import React, { useState } from 'react'

const ColorPicker = ({color,setColor}) => {
    

    function colorChange(e){
        setColor(e.target.value)
    }

  return (
    <div className='mt-42.5'>
        <input id="color-picker" type="color" value={color} onChange={colorChange} />
    </div>
  )
}

export default ColorPicker