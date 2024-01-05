import React, { useState } from 'react'


export default function Navbar() {
    const [onclick, setonclick] = useState(false)
    const handleonclick = () => {
        setonclick(!onclick)
        console.log(onclick)
    }
    return (
        <>
            <nav className=' sm:justify-around  md:justify-around  lg:justify-around  xl:justify-around  p-2 mt-2 flex justify-between  shadow-lg'>
                <div className='text-4xl  font-bold' >ZYOK</div>
                <div className='hidden sm:block md:block lg:block xl:block'>
                    <div className='text-gray-500 font-semibold mt-2 flex space-x-6'>
                        <div>Features </div>
                        <div>Pricing </div>
                        <div>Demo</div>
                    </div>
                </div>
                <div onClick={handleonclick} className='align-middle justify-center block sm:hidden'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='h-6 w-6 text-gray-600'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16m-7 6h7'
                        />
                    </svg>
                </div>

                <div className='hidden sm:block md:block lg:block xl:block flex space-x-4 '>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:    ring-gray-700 dark:border-gray-700 capitalize">Login</button>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:    ring-gray-700 dark:border-gray-700 capitalize">signup</button>
                </div>
            </nav>
            <div className='align-middle justify-center block sm:hidden'    >
                {
                    onclick ?
                        <div className='absolute z-10  w-full bg-white text-gray-500 font-semibold mt-2 grid space-x-6'>
                            <center className='space-x-6'>
                                <div className='m-6 text-2xl'>Features </div>
                                <div className='m-6 text-2xl'>Pricing  </div>
                                <div className='m-6 text-2xl'>Demo </div>
                                <div  className='grid w-64'>
                                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:    ring-gray-700 dark:border-gray-700 capitalize">Login</button>
                                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:    ring-gray-700 dark:border-gray-700 capitalize">signup</button>
                                </div>
                            </center>
                        </div>
                        : ""
                }
            </div>
        </>
    )
}
