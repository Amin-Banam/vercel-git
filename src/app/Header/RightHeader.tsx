import Link from 'next/link'
import React from 'react'
import Burger from './click/Burger'
export default function RightHeader() {
  return (
    <section className='w-[49%] h-full flex justify-end'>
      <div className='w-[40%] hidden xl:flex h-full justify-evenly items-center'>
        <Link className='border border-gray-800 py-1.5 px-2.5 rounded-md text-sm hover:bg-[#352d2d]' target='blank' href='https://chatgpt.com/'>Ask AI</Link>
        <Link className='border border-gray-800 py-1.5 px-2.5 rounded-md text-sm hover:bg-[#352d2d]' href='./login'>Log In</Link>
        <Link className='border border-gray-800 py-1.5 px-2.5 rounded-md text-sm hover:bg-[#e4d0d0] bg-white text-black' href='./sign'>Sign Up</Link>ّ
      </div>
      <div className='w-[40%] flex xl:hidden h-full justify-evenly items-center'>
        <Link className='border border-gray-800 py-1.5 px-2.5 rounded-md text-sm hover:bg-[#352d2d]' href=''>Ask AI</Link>
        <Burger/>
      </div>
    </section>
  )
}
