"use client"
import Link from 'next/link'
import React from 'react'

import { useSignIn, useClerk, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContentSign() {
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const { signUp, isLoaded } = useSignUp();
const { signOut } = useClerk();

const handleContinue = async () => {
  if (!isLoaded) return;

  // اگر کاربر قبلاً وارد شده، ابتدا خارجش کن
  await signOut();

  setLoading(true);

  try {
    await signUp.create({
      emailAddress: email,
    });

    await signUp.prepareEmailAddressVerification({
      strategy: "email_link",
      redirectUrl: `${window.location.origin}/verify`,
    });

    setMessage("Check your email.");
  } catch (err: any) {
    console.log(err);
    setMessage(err.errors?.[0]?.message || "Something went wrong.");
  } finally {
    setLoading(false);
  }
};

console.log(signUp);
    return (
        <div className='min-w-135  px-12 py-4 rounded-xl flex flex-col justify-center mt-8 items-center'>
            <div id="clerk-captcha"></div>
            <h4 className='font-semibold leading-10 text-3xl tracking-[-1.28] text-center'>
                Log in to Vercel
            </h4>
            <div className=' border-b border-[rgb(31_31_31)] min-w-80 flex justify-center flex-col items-center mt-10'>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="" className='w-80 hover:bg-[#352d2d] border rounded-xl h-12 flex justify-center items-center mt-3 border-[rgb(31_31_31)] px-3' placeholder='Email Address' />
                <button disabled={loading} onClick={handleContinue} className='w-80 hover:bg-[#bebebe] cursor-pointer bg-[#ebe2e2] text-black border rounded-xl h-12 flex justify-center items-center mt-3 border-[rgb(31_31_31)]'>    
                    <h5 className='ml-3'>{loading ? "Sending..." : "Continue with Email"}</h5>
                </button>ّ
            </div>
            <div className='min-w-80 mt-2 flex justify-center flex-col items-center'>
                <button className='w-80 cursor-pointer hover:bg-[#352d2d] border rounded-xl h-12 flex justify-center items-center mt-3 border-[rgb(31_31_31)]'>
                    <span className=''>
                        <svg strokeLinejoin="round" viewBox="0 0 16 16" width="16" height='16'><path d="M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z" fill="#4285F4"></path>
                            <path d="M3.6764 9.52268L3.09083 9.97093L1.01807 11.5855C2.33443 14.1963 5.03241 16 8.15966 16C10.3196 16 12.1305 15.2873 13.4542 14.0655L10.8578 12.0509C10.1451 12.5309 9.23598 12.8219 8.15966 12.8219C6.07967 12.8219 4.31245 11.4182 3.67967 9.5273L3.6764 9.52268Z" fill="#34A853"></path>
                            <path d="M1.01803 4.41455C0.472607 5.49087 0.159912 6.70543 0.159912 7.99995C0.159912 9.29447 0.472607 10.509 1.01803 11.5854C1.01803 11.5926 3.6799 9.51991 3.6799 9.51991C3.5199 9.03991 3.42532 8.53085 3.42532 7.99987C3.42532 7.46889 3.5199 6.95983 3.6799 6.47983L1.01803 4.41455Z" fill="#FBBC05"></path>
                            <path d="M8.15982 3.18545C9.33802 3.18545 10.3853 3.59271 11.2216 4.37818L13.5125 2.0873C12.1234 0.792777 10.3199 0 8.15982 0C5.03257 0 2.33443 1.79636 1.01807 4.41455L3.67985 6.48001C4.31254 4.58908 6.07983 3.18545 8.15982 3.18545Z" fill="#EA4335"></path>
                        </svg>
                    </span>
                    <h5 className='ml-3'>Continue with Google</h5>
                </button>
                <button className='w-80 cursor-pointer hover:bg-[#352d2d] border rounded-xl h-12 flex justify-center items-center mt-3 border-[rgb(31_31_31)]'>
                    <span className=''>
                        <svg height="20" strokeLinejoin="round" viewBox="0 0 16 16" width="20"><g clipPath="url(#clip0_872_3147)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"></path>
                        </g>
                            <defs>
                                <clipPath>
                                    <rect width="20" height="20" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <h5 className='ml-3'>Continue with GitHub</h5>
                </button>
                <button className='w-80 cursor-pointer hover:bg-[#352d2d] border rounded-xl h-12 flex justify-center items-center mt-3 border-[rgb(31_31_31)]'>
                    <span className=''>
                        <svg height="20" strokeLinejoin="round" viewBox="0 0 16 16" width="20">
                            <path d="M12.4734 12.0221C11.92 12.8488 11.3334 13.6555 10.44 13.6688C9.54671 13.6888 9.26004 13.1421 8.24671 13.1421C7.22671 13.1421 6.91337 13.6555 6.06669 13.6888C5.19335 13.7221 4.53335 12.8088 3.97335 12.0021C2.83335 10.3555 1.96002 7.32213 3.13335 5.28213C3.71335 4.2688 4.75335 3.6288 5.88002 3.6088C6.73337 3.59547 7.54671 4.1888 8.07337 4.1888C8.59337 4.1888 9.58004 3.47547 10.6134 3.58214C11.0467 3.60214 12.26 3.75547 13.04 4.90213C12.98 4.94213 11.5934 5.75547 11.6067 7.44213C11.6267 9.4555 13.3734 10.1288 13.3934 10.1355C13.3734 10.1821 13.1134 11.0955 12.4734 12.0221ZM8.66671 1.35547C9.15337 0.80214 9.96004 0.38214 10.6267 0.35547C10.7134 1.13547 10.4 1.92214 9.93337 2.48214C9.47337 3.0488 8.71337 3.4888 7.96671 3.4288C7.86671 2.66214 8.24004 1.86214 8.66671 1.35547Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <h5 className='ml-3'>Continue with Apple</h5>
                </button>
                <button className='w-80 cursor-pointer hover:bg-[#352d2d] rounded-xl h-12 flex justify-center items-center mt-3'>
                    <h5 className='text-white'>Show other options</h5>
                </button>
                
            </div>
            <div className='w-80 h-12 flex justify-center items-center mt-3'>
                <span>Don't have an account?</span>
                <Link className='ml-3 text-[#52A8FF] cursor-pointer' href='./sign'>Sign UP</Link>
            </div>
        </div>
    )
}
