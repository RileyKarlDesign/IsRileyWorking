"use client";

import React from 'react'

export default function Header({setMode, mode }) {
  return (


    <div className='flex gap-2 p-4 rounded-none mb-2 absolute top-0 left-0 right-0'>

        <div onClick={()=>setMode(1)} className='cursor-pointer bg-neutral-200 flex items-center h-8 pl-4 pr-4 rounded-full' >
            <p className='text-black'> Schedule </p>
        </div>
        <div onClick={()=>setMode(2)} className= " cursor-pointer bg-neutral-200 flex items-center h-8 pl-4 pr-4 rounded-full "  >
            <p className='text-black'> Infomation </p>
        </div>
    </div>
  )
}
