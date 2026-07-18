import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

export default function MainHeader() {
  return (
    <header className='flex bg-black justify-around h-16 fixed top-0 left-0 items-center w-full z-10'>
        <LeftHeader/>
        <RightHeader/>
    </header>
  )
}
