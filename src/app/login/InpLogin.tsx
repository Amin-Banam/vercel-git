'use client'
import React, { useRef, useState } from 'react'

export default function InpLogin() {
    const ref = useRef<HTMLInputElement>(null)
    const [inpVal , setinpVal] = useState('')
    // setinpVal(ref.current?.value)
  return (
    <>
      <input type="text" ref={ref} name="" className='w-80 hover:bg-[#352d2d] border rounded-xl h-12 flex justify-center items-center mt-3 border-[rgb(31_31_31)] px-3' placeholder='Email Address' />
    </>
  )
}
