import React from 'react'
import HeaderLogin from './HeaderLogin'
import ContentLogin from './ContentLogin'
import FooterSign from '../sign/FooterSign'

export default function page() {
  return (
    <section className='h-[150vh] flex justify-center items-center flex-wrap w-full bg-black'>
    <HeaderLogin/>
    <ContentLogin/>
    <FooterSign/>
    </section>
  )
}
