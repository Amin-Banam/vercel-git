'use client'
import React from 'react'

export default function DarkLight() {
    return (
        <>
            <div className='border w-25 flex rounded-2xl'>
                <span className='w-8.25 cursor-pointer rounded-2xl hover:text-white'>
                    <svg className='rounded-sm h-7.75 w-7.75' viewBox="-7.75 0 32 16"><path fill="currentColor" fillRule="evenodd" d="M1 3.25C1 1.45 2.46 0 4.25 0h7.5C13.55 0 15 1.46 15 3.25V16H1V3.25M4.25 1.5c-.97 0-1.75.78-1.75 1.75V14.5h11V3.25c0-.97-.78-1.75-1.75-1.75zM4 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6H4zm5 9h3v-1.5H9z" clipRule="evenodd"></path></svg>
                </span>
                <span className='w-8.25 cursor-pointer rounded-2xl hover:text-white'>
                    <svg className='rounded-sm h-7.75 w-7.75' viewBox="-7.75 0 32 16"><path fill="currentColor" fillRule="evenodd" d="M8.75.75V0h-1.5v2h1.5V.75M3.26 4.32l-.53-.53-.35-.35-.53-.53L2.9 1.85l.53.53.35.35.53.53zm8.42-1.06.53-.53.35-.35.53-.53 1.06 1.06-.53.53-.35.35-.53.53zM8 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5m0 1.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5m6-5.5h2v1.5h-2zm-13.25 0H0v1.5h2v-1.5H.75m1.62 5.32-.53.53 1.06 1.06.53-.53.35-.35.53-.53-1.06-1.06-.53.53zm10.2 1.06.53.53 1.06-1.06-.53-.53-.35-.35-.53-.53-1.06 1.06.53.53zM8.75 14v2h-1.5v-2z" clipRule="evenodd"></path></svg>
                </span>
                <span className='w-8.25 cursor-pointer rounded-2xl hover:text-white'>
                    <svg className='rounded-sm h-7.75 w-7.75' viewBox="-7.75 0 32 16"><path fill="currentColor" fillRule="evenodd" d="M1.5 8a6 6 0 0 1 3.62-5.51 7 7 0 0 0 7.08 9.25A5.99 5.99 0 0 1 1.5 8M6.42.58a7.5 7.5 0 1 0 7.96 10.41l-.92-1.01a5.5 5.5 0 0 1-6.3-8.25zm6.83.42v1.75H15v1.5h-1.75V6h-1.5V4.25H10v-1.5h1.75V1z" clipRule="evenodd"></path></svg>
                </span>
            </div>
        </>
    )
}
