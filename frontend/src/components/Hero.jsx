import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <div className='p-6'>
           <center className="Center">
                <div>
                <div className=" bg-gray-100 text-gray-700 font-semibold flex items-center justify-center w-max border border-gray-500 bg-white rounded-2xl px-3">
                    Unlimited short links <FaArrowRight className='mx-2' />
                </div>
                <div className='pt-5 mx-5'>
                    <span className='font-bold uppecase text-7xl'> Short Links With</span><br />
                    <span className="font-bold uppercase m-9 text-7xl text-orange-500">
                        Superpowers
                    </span>

                    <div className='font-semibold uppercase text-lg text-gray-500 m-8'>ZyoK is the open-source link management <br /> infrastructure for modern marketing teams.
                    </div>
                </div>
                <div className=''>
                    <button type="button" className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:focus:    ring-gray-700 dark:border-gray-700 capitalize">Start for free</button>
                    <button type="button" className=" border-gray-500 outline-8 text-black bg-gray-300 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 capitalize">signIn</button>
                </div>
                </div>
            </center>

        </div>
    )
}
