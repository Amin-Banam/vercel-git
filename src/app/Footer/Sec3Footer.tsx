import React from 'react'
import DarkLight from '../DarkLight'

export default function Sec3Footer() {
  return (
    <div className='w-full flex flex-wrap mt-15 '>
        <div className='w-full p-4 flex justify-between'>
            <p className='text-sm sm:text-lg'>Make with love by Mohammad Amin Banam</p>
            <div className='flex items-center justify-between border-[#A1A1A1A1] text-[#A1A1A1A1]'><DarkLight/></div>
        </div>
    </div>
  )
}
