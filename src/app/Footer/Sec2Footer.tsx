import Link from 'next/link'
import React from 'react'

export default function Sec2Footer() {
    return (
        <>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col mt-12'>
                    <h5 className='text-white text-[12px]'>Frameworks</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Next.js</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Nuxt</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Svelte</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Nitro</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Turbo</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col mt-12'>
                    <h5 className='text-white text-[12px]'>SDKs</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>AI SDK</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Workflow SDK</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Flags SDK</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Chat SDK</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Streamdown AI</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col mt-12'>
                    <h5 className='text-white text-[12px]'>Use Cases</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Composable commerce</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Multi-tenant platforms</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Web apps</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Marketing sites</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Platform engineers</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Design engineers</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col mt-12'>
                    <h5 className='text-white text-[12px]'>Company</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>About</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Careers</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Help</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Press</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Legal</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Privacy Policy</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Security</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col mt-12'>
                    <h5 className='text-white text-[12px]'>Community</h5>
                    <Link className='mt-2 text-[14px] hover:text-white text-[#888888]' href=''>Open source program</Link>
                    <Link className='mt-2 text-[14px] hover:text-white text-[#888888]' href=''>Events</Link>
                    <Link className='mt-2 text-[14px] hover:text-white text-[#888888]' href=''>Shipped on Vercel</Link>
                    <Link className='mt-2 text-[14px] hover:text-white text-[#888888]' href=''>GitHub</Link>
                    <Link className='mt-2 text-[14px] hover:text-white text-[#888888]' href=''>X</Link>
                    <Link className='mt-2 text-[14px] hover:text-white text-[#888888]' href=''>YouTube</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col mt-12'>
                </div>
        </>
    )
}
