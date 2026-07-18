import Link from 'next/link'
import React from 'react'
import Sec2Footer from './Sec2Footer'
import Sec3Footer from './Sec3Footer'

export default function Sec1Footer() {
    return (
        <div className='xl:w-full flex flex-wrap mt-15 justify-start'>
            <div className='xl:w-[96%] p-4 flex flex-wrap'>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col'>
                    <h5 className='text-white text-[12px]'>Get Started</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Templates</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Supported frameworks</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Marketplace</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Domains</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col'>
                    <h5 className='text-white text-[12px]'>Build</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Next.js on Vercel</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Turborepo</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>v0</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] mt-12 sm:mt-0 flex flex-col'>
                    <h5 className='text-white text-[12px]'>Scale</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Content delivery network</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Fluid compute</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>CI/CD</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Observability</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>AI Gateway</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Vercel Agent</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col mt-12 lg:mt-0'>
                    <h5 className='text-white text-[12px]'>Secure</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Platform security</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Web Application Firewall</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Bot management</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>BotID</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Sandbox</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col mt-12 xl:mt-0'>
                    <h5 className='text-white text-[12px]'>Resources</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Pricing</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Customers</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Enterprise</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Articles</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Startups</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Solution partners</Link>
                </div>
                <div className='w-[48%] sm:w-[32%] lg:w-[24%] xl:w-[16.50%] flex flex-col mt-12 xl:mt-0'>
                    <h5 className='text-white text-[12px]'>Learn</h5>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Docs</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Blog</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Changelog</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Knowledge Base</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Academy</Link>
                    <Link className='mt-2 text-[14px] text-[#888888] hover:text-white' href=''>Community</Link>
                </div>
                <Sec2Footer />
            </div>

            

            <Sec3Footer />

        </div>
    )
}
