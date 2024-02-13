import React from 'react'
import { CgNotifications, CgSearch, CgToggleSquare } from 'react-icons/cg'
import img from '../img/homepic.jpg'
const Navbar = () => {
  return (
    <div className='h-14 p-2 bg-slate-100 shadow-lg text-neutral-900 flex'>
        <div className='grid grid-cols-3 gap-2'>
            <h1 className='pl-10 p-2 text-red-700 font-semibold'>CourseCabb</h1>
            <div className='flex'>
              <div>
                <CgToggleSquare className='w-12 h-10 ml-16 bg-blue-600 rounded-lg text-white' />
              </div>
              <div className='flex ml-10 h-8 bg-gray-800 rounded-lg'>
                <CgSearch className='mt-2 ml-2 mr-2 text-gray-300' />
                <input type="text" className='bg-gray-800 text-gray-300 outline-none' placeholder='Search here' />
              </div>
            </div>
            <div className='justify-end items-end text-end flex'>
              <CgToggleSquare className='w-6 mr-4 mb-3 h-6' />
              <CgSearch className='w-6 mr-4 mb-3 h-6'  />
              <CgNotifications className='w-6 mr-4 mb-3 h-6'  />
              <div className='flex'>
                <img src={img} className="w-10 h-10 rounded-full" alt="" />
                <div>
                  <h1 className='font-bold ml-2 -mt-1'>Sweety khan</h1>
                  <h1 className='text-blue-700'>Administrator</h1>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar