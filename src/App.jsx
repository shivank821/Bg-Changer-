import React, { useState } from 'react'

const App = () => {

const [color,setColor]=useState('olive')

  return (
    <div className='flex justify-center items-end h-100 pb-5' style={{background:color}}>
      <div className='bg-white p-3 rounded-2xl flex gap-5 font-semibold'>
        <button className='bg-red-500 rounded-3xl  py-1 px-5 cursor-pointer' onClick={()=>setColor('red')}>Red</button>
        <button className='bg-green-600 rounded-3xl  py-1 px-5 cursor-pointer' onClick={()=>setColor('green')}>Green</button>
        <button className='bg-black rounded-3xl  py-1 px-5 cursor-pointer' onClick={()=>setColor('black')}>Black</button>
        <button className='bg-blue-600 rounded-3xl  py-1 px-5 cursor-pointer' onClick={()=>setColor('blue')}>Blue</button>
        <button className='bg-gray-500 rounded-3xl  py-1 px-5 cursor-pointer' onClick={()=>setColor('gray')}>Gray</button>
        <button className='bg-orange-400 rounded-3xl  py-1 px-5 cursor-pointer' onClick={()=>setColor('orange')}>Orange</button>
        <button className='bg-yellow-400 rounded-3xl  py-1 px-5 cursor-pointer' onClick={()=>setColor('yellow')}>Yellow</button>
        <button className='bg-purple-600 rounded-3xl  py-1 px-5 cursor-pointer' onClick={()=>setColor('purple')}>Purple</button>
      </div>
    </div>
  )
}

export default App
