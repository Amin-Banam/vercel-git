import React from 'react'
// import { SignUp } from '@clerk/nextjs'
import HeaderSign from './HeaderSign'
import ContentSign from './ContentSign'
// import FooterSign from './FooterSign'
import FooterAnimation from './FooterSign'
export default function page() {
  return (
    <section className='h-[150vh] flex justify-center items-center flex-wrap w-full bg-black'>
      
        <HeaderSign />
        <ContentSign/>
        <FooterAnimation/>
    </section>
  )
}
