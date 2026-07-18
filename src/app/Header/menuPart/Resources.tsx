import React from 'react'

export default function Resources() {
    return (
        <>
            <div className='w-200 absolute h-96 top-15 left-0 rounded-2xl hidden group-hover:block bg-black border border-[#171717] overflow-hidden'>
                <section className=' w-full  p-2 transition-all duration-500 h-full  group-hover:flex justify-around'>
                    <div className='w-[33%] flex flex-col justify-around h-full p-3'>
                        <h4 className='w-full text-sm'>Company</h4>
                        <section className='p-1 flex items-center w-full cursor-pointer s'>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5249 10.8478L11.8727 10.3286L10.8342 9.6329L10.4863 10.1522C9.94904 10.9543 9.0363 11.4802 8.00098 11.4802C6.96759 11.4802 6.05634 10.9563 5.51863 10.1567L5.16986 9.63804L4.13259 10.3356L4.48137 10.8542C5.2414 11.9844 6.53398 12.7302 8.00098 12.7302C9.47073 12.7302 10.7654 11.9816 11.5249 10.8478ZM6.75 6.75C6.75 7.30228 6.30228 7.75 5.75 7.75C5.19772 7.75 4.75 7.30228 4.75 6.75C4.75 6.19772 5.19772 5.75 5.75 5.75C6.30228 5.75 6.75 6.19772 6.75 6.75ZM10.25 7.75C10.8023 7.75 11.25 7.30228 11.25 6.75C11.25 6.19772 10.8023 5.75 10.25 5.75C9.69771 5.75 9.25 6.19772 9.25 6.75C9.25 7.30228 9.69771 7.75 10.25 7.75Z" fill="currentColor"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Customers</h4>
                                <p className='text-xs'>Trusted by the best teams</p>
                            </div>
                        </section>
                        <section className='p-1 flex items-center w-full cursor-pointer s'>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16"><path fillRule="evenodd" clipRule="evenodd" d="M8.75 0.189331L9.28033 0.719661L15.2803 6.71966L15.8107 7.24999L15.2803 7.78032L13.7374 9.32322C13.1911 9.8696 12.3733 9.97916 11.718 9.65188L9.54863 13.5568C8.71088 15.0648 7.12143 16 5.39639 16H0.75H0V15.25V10.6036C0 8.87856 0.935237 7.28911 2.4432 6.45136L6.34811 4.28196C6.02084 3.62674 6.13039 2.80894 6.67678 2.26255L8.21967 0.719661L8.75 0.189331ZM7.3697 5.43035L10.5696 8.63029L8.2374 12.8283C7.6642 13.8601 6.57668 14.5 5.39639 14.5H2.56066L5.53033 11.5303L4.46967 10.4697L1.5 13.4393V10.6036C1.5 9.42331 2.1399 8.33579 3.17166 7.76259L7.3697 5.43035ZM12.6768 8.26256C12.5791 8.36019 12.4209 8.36019 12.3232 8.26255L12.0303 7.96966L8.03033 3.96966L7.73744 3.67677C7.63981 3.57914 7.63981 3.42085 7.73744 3.32321L8.75 2.31065L13.6893 7.24999L12.6768 8.26256Z" fill="currentColor"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Blog</h4>
                                <p className='text-xs'>The latest posts and changes</p>
                            </div>
                        </section>
                        <section className='p-1 flex items-center w-full cursor-pointer s'>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16"><path fillRule="evenodd" clipRule="evenodd" d="M6.28497 1.5H13V12C13 12.5523 12.5523 13 12 13H6.28497L6.28497 1.5ZM5.03497 1.5H3V12C3 12.5523 3.44772 13 4 13H5.03497L5.03497 1.5ZM5.03497 14.5H4C2.61929 14.5 1.5 13.3807 1.5 12V1.5V0H3H13H14.5V1.5V12C14.5 13.3807 13.3807 14.5 12 14.5H6.28497V15V15.625H5.03497V15V14.5ZM8.505 3.375H9.13H10.13H10.755V4.625H10.13H9.13H8.505V3.375ZM9.13 6.375H8.505V7.625H9.13H10.13H10.755V6.375H10.13H9.13Z" fill="currentColor"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Changelog</h4>
                                <p className='text-xs'>See what shipped</p>
                            </div>
                        </section>
                        <section className='p-1 flex items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16"><path fillRule="evenodd" clipRule="evenodd" d="M6 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V4H5.5V3C5.5 2.72386 5.72386 2.5 6 2.5ZM4 4V3C4 1.89543 4.89543 1 6 1H10C11.1046 1 12 1.89543 12 3V4H14.5H16V5.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V5.5V4H1.5H4ZM12 5.5H10.5H5.5H4H1.5V9.25H7.25V8.5H8.75V9.25L14.5 9.25V5.5H12ZM8.75 10.75L14.5 10.75V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V10.75H7.25V11.5H8.75V10.75Z" fill="currentColor"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Press</h4>
                                <p className='text-xs'>Read the latest news</p>
                            </div>
                        </section>
                        <section className='p-1 flex items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16"><path fillRule="evenodd" clipRule="evenodd" d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z" fill="currentColor"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Events</h4>
                                <p className='text-xs'>Join us at an event</p>
                            </div>
                        </section>
                    </div>
                    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className='w-[33%] flex flex-col h-full p-3'>
                        <h4 className='w-full text-sm mt-2.5'>Learn</h4>
                        <section className='p-1 mt-3.75 flex items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16"><path fillRule="evenodd" clipRule="evenodd" d="M3.75 0C2.50736 0 1.5 1.00736 1.5 2.25V13.744V13.75H1.50001C1.50323 14.9899 2.50935 15.994 3.75 15.994H13H14.5V14.494V13.7296V12.994V11.494V0.75V0H13.75H3.75ZM13 11.494V1.5H3.75C3.33579 1.5 3 1.83579 3 2.25V11.622C3.23458 11.5391 3.48702 11.494 3.75 11.494H13ZM3 13.744C3 14.1582 3.33579 14.494 3.75 14.494H13V13.7296V12.994H3.75C3.33579 12.994 3 13.3298 3 13.744Z" fill="currentColor"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Docs</h4>
                                <p className='text-xs'>Vercel documentation</p>
                            </div>
                        </section>
                        <section className='p-1 mt-3.75 flex items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16"><path fillRule="evenodd" clipRule="evenodd" d="M12.2803 0.719661L11.75 0.189331L11.2197 0.719661L1.09835 10.841C0.395088 11.5442 0 12.4981 0 13.4926V15.25V16H0.75H2.50736C3.50192 16 4.45575 15.6049 5.15901 14.9016L15.2803 4.78032L15.8107 4.24999L15.2803 3.71966L12.2803 0.719661ZM9.81066 4.24999L11.75 2.31065L13.6893 4.24999L11.75 6.18933L9.81066 4.24999ZM8.75 5.31065L2.15901 11.9016C1.73705 12.3236 1.5 12.8959 1.5 13.4926V14.5H2.50736C3.1041 14.5 3.67639 14.2629 4.09835 13.841L10.6893 7.24999L8.75 5.31065Z" fill="currentColor"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Academy</h4>
                                <p className='text-xs'>Linear courses to level up</p>
                            </div>
                        </section>
                        <section className='p-1 mt-3.75 flex items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16"><path fillRule="evenodd" clipRule="evenodd" d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z" fill="currentColor"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Knowledge Base</h4>
                                <p className='text-xs'>Find help quickly</p>
                            </div>
                        </section>
                        <section className='p-1 mt-3.75 flex items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16"><path fillRule="evenodd" clipRule="evenodd" d="M2.5 3.25C2.5 1.45507 3.95507 0 5.75 0H6.25C8.04493 0 9.5 1.45507 9.5 3.25V3.75C9.5 5.54493 8.04493 7 6.25 7H5.75C3.95507 7 2.5 5.54493 2.5 3.75V3.25ZM5.75 1.5C4.7835 1.5 4 2.2835 4 3.25V3.75C4 4.7165 4.7835 5.5 5.75 5.5H6.25C7.2165 5.5 8 4.7165 8 3.75V3.25C8 2.2835 7.2165 1.5 6.25 1.5H5.75ZM1.5 14.5V13.1709C2.31958 11.5377 3.99308 10.5 5.82945 10.5H6.17055C8.00692 10.5 9.68042 11.5377 10.5 13.1709V14.5H1.5ZM5.82945 9C3.35483 9 1.10604 10.4388 0.0690305 12.6857L0 12.8353V13V15.25V16H0.75H11.25H12V15.25V13V12.8353L11.931 12.6857C10.894 10.4388 8.64517 9 6.17055 9H5.82945ZM15.931 12.6857C15.3706 11.4715 14.4561 10.4931 13.3439 9.85058L12.5935 11.1494C13.399 11.6148 14.0681 12.3101 14.5 13.1709V14.5H13.5V16H15.25H16V15.25V13V12.8352L15.931 12.6857ZM11.25 0H10.5V1.5H11.25C12.2165 1.5 13 2.2835 13 3.25V3.75C13 4.7165 12.2165 5.5 11.25 5.5H10.5V7H11.25C13.0449 7 14.5 5.54493 14.5 3.75V3.25C14.5 1.45507 13.0449 0 11.25 0Z" fill="currentColor"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Community</h4>
                                <p className='text-xs'>Join the conversation</p>
                            </div>
                        </section>
                    </div>
                    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className='w-[33%] flex flex-col  h-full p-3'>
                        <h4 className='w-full text-sm mt-2.5'>Open Source</h4>
                        <section className='p-1 mt-3.75 flex items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16" width='16'><g clipPath="url(#clip0_53_108)">
                                <circle cx="8" cy="8" r="7.375" fill="black" stroke="var(--ds-gray-1000)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <path d="M10.63 11V5" stroke="url(#paint0_linear_53_108_r_1eb_)" strokeWidth="1.25" strokeMiterlimit="1.41421"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z" fill="url(#paint1_linear_53_108_r_1eb_)"></path>
                            </g>
                                <defs>
                                    <linearGradient id="paint0_linear_53_108_r_1eb_" x1="11.13" y1="5" x2="11.13" y2="11" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white"></stop>
                                        <stop offset="0.609375" stopColor="white" stopOpacity="0.57"></stop>
                                        <stop offset="0.796875" stopColor="white" stopOpacity="0"></stop>
                                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_53_108_r_1eb_" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white"></stop>
                                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <clipPath id="clip0_53_108">
                                        <rect width="16" height="16" fill="red"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Next js</h4>
                                <p className='text-xs'>The native Next.js platform</p>
                            </div>
                        </section>
                        <section className='p-1 flex mt-3.75 items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16" width='16'><path d="M8.97614 13.3333H14.924C15.1129 13.3333 15.2985 13.2841 15.4621 13.1905C15.6257 13.0968 15.7616 12.9621 15.856 12.8C15.9504 12.6378 16.0001 12.4538 16 12.2666C15.9999 12.0794 15.9501 11.8955 15.8555 11.7334L11.8611 4.87625C11.7667 4.71411 11.6309 4.57946 11.4673 4.48585C11.3037 4.39225 11.1182 4.34295 10.9293 4.34295C10.7404 4.34295 10.5549 4.39225 10.3913 4.48585C10.2277 4.57946 10.0919 4.71411 9.99751 4.87625L8.97614 6.63074L6.97922 3.19987C6.88473 3.03776 6.74885 2.90313 6.58524 2.80953C6.42162 2.71594 6.23604 2.66666 6.04713 2.66666C5.85822 2.66666 5.67264 2.71594 5.50903 2.80953C5.3454 2.90313 5.20953 3.03776 5.11504 3.19987L0.144471 11.7334C0.0499099 11.8955 8.22996e-05 12.0794 1.01863e-07 12.2666C-8.20958e-05 12.4538 0.0495838 12.6378 0.144003 12.8C0.238421 12.9621 0.374263 13.0968 0.537867 13.1905C0.701468 13.2841 0.887063 13.3333 1.07598 13.3333H4.80956C6.28885 13.3333 7.37977 12.6893 8.13042 11.4329L9.95287 8.3048L10.929 6.63074L13.8586 11.6593H9.95287L8.97614 13.3333ZM4.74869 11.6575L2.14313 11.657L6.04887 4.95264L7.99769 8.3048L6.69287 10.5453C6.19436 11.3605 5.62804 11.6575 4.74869 11.6575Z" fill="#00DC82"></path></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Nuxt</h4>
                                <p className='text-xs'>The progressive web platform</p>
                            </div>
                        </section>
                        <section className='p-1 mt-3.75 flex items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16" width='16'><path d="M13.7974 2.11525C12.3195 -0.0135593 9.37709 -0.637288 7.26183 0.705085L3.53302 3.09153C2.51607 3.72881 1.81098 4.77288 1.60759 5.95254C1.43132 6.94237 1.58048 7.95932 2.05505 8.84068C1.72963 9.32881 1.51268 9.87119 1.41776 10.4407C1.20082 11.6475 1.48556 12.8949 2.19065 13.8847C3.68217 16.0136 6.61098 16.6373 8.72624 15.2949L12.4551 12.922C13.472 12.2847 14.1771 11.2407 14.3805 10.061C14.5567 9.07119 14.4076 8.05424 13.933 7.17288C14.2584 6.68475 14.4754 6.14237 14.5703 5.57288C14.8008 4.35254 14.5161 3.10508 13.7974 2.11525Z" fill="#FF3E00"></path>
                                <path d="M6.8958 14.0881C5.68902 14.4 4.428 13.9254 3.72292 12.9085C3.28902 12.3119 3.12631 11.5661 3.24834 10.8339C3.27546 10.7119 3.30258 10.6034 3.3297 10.4814L3.3975 10.2644L3.58733 10.4C4.03478 10.7254 4.52292 10.9695 5.05173 11.1322L5.18733 11.1729L5.17377 11.3085C5.16021 11.4983 5.21445 11.7017 5.32292 11.8644C5.53987 12.1763 5.91953 12.3254 6.28563 12.2305C6.36699 12.2034 6.44834 12.1763 6.51614 12.1356L10.2314 9.76271C10.4212 9.64068 10.5433 9.46441 10.5839 9.24746C10.6246 9.03051 10.5704 8.8 10.4483 8.62373C10.2314 8.31186 9.85173 8.17627 9.48563 8.27119C9.40428 8.29831 9.32292 8.32542 9.25512 8.3661L7.83139 9.27458C7.60089 9.42373 7.34326 9.5322 7.07207 9.6C5.86529 9.91187 4.60428 9.43729 3.89919 8.42034C3.47885 7.82373 3.30258 7.07797 3.43817 6.34576C3.56021 5.64068 3.99411 5.00339 4.60428 4.62373L8.33309 2.25085C8.5636 2.1017 8.82123 1.99322 9.09241 1.91186C10.2992 1.6 11.5602 2.07458 12.2653 3.09153C12.6992 3.68814 12.8619 4.4339 12.7399 5.1661C12.7128 5.28814 12.6856 5.39661 12.645 5.51864L12.5772 5.73559L12.3873 5.6C11.9399 5.27458 11.4517 5.03051 10.9229 4.8678L10.7873 4.82712L10.8009 4.69153C10.8144 4.50169 10.7602 4.29831 10.6517 4.13559C10.4348 3.82373 10.0551 3.68814 9.68902 3.78305C9.60767 3.81017 9.52631 3.83729 9.45851 3.87797L5.74326 6.25085C5.55343 6.37288 5.43139 6.54915 5.39072 6.7661C5.35004 6.98305 5.40428 7.21356 5.52631 7.38983C5.74326 7.7017 6.12292 7.83729 6.48902 7.74237C6.57038 7.71525 6.65173 7.68814 6.71953 7.64746L8.14326 6.73898C8.37377 6.58983 8.63139 6.48136 8.90258 6.4C10.1094 6.08814 11.3704 6.56271 12.0755 7.57966C12.5094 8.17627 12.6721 8.92203 12.55 9.65424C12.428 10.3593 11.9941 10.9966 11.3839 11.3763L7.65512 13.7492C7.42461 13.8983 7.16699 14.0068 6.8958 14.0881Z" fill="white"></path>
                                <defs>
                                    <rect width="16" height="16" fill="white"></rect>
                                </defs></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Svelte</h4>
                                <p className='text-xs'>The web's efficient UI framework</p>
                            </div>
                        </section>
                        <section className='p-1 mt-3.75 flex items-center w-full cursor-pointer s '>
                            <svg height="16" strokeLinejoin="round" className='border rounded-sm h-8.75 w-8.75' viewBox="-6 -1 30 16" width='16'><g clipPath="url(#clip0_872_3188)">
                                <path fillRule="evenodd" className='fill-white' clipRule="evenodd" d="M8 0V2C11.3137 2 14 4.68629 14 8C14 11.1453 11.5798 13.7254 8.5 13.9795V15.9846C12.6854 15.7265 16 12.2504 16 8C16 3.58172 12.4183 0 8 0ZM7.5 15.9846V13.9795C6.2188 13.8738 5.05174 13.3655 4.12558 12.5815L2.70769 13.9994C4.00133 15.1415 5.66717 15.8716 7.5 15.9846ZM2.00058 13.2923C0.755509 11.882 0 10.0292 0 8H2C2 9.47685 2.53358 10.8291 3.41847 11.8744L2.00058 13.2923Z" fill="url(#paint0_linear_872_3188)"></path>
                                <rect x="4.5" y="4.5" width="7" height="7" rx="3.5" stroke="gray-1000" fill="transparent" strokeWidth="2"></rect>
                            </g>
                                <defs>
                                    <linearGradient x1="8.68832" y1="1.98437" x2="1.79792" y2="8.82805" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0096FF"></stop>
                                        <stop offset="1" stopColor="#FF1E56"></stop>
                                    </linearGradient>
                                    <clipPath>
                                        <rect width="16" height="16" fill="white"></rect>
                                    </clipPath>
                                </defs></svg>
                            <div className='ml-2'>
                                <h4 className=' w-full text-white'>Turborepo</h4>
                                <p className='text-xs'>Speed with Enterprise scale</p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}
