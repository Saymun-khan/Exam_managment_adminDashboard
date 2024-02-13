import React from 'react'
import { FaAccusoft, FaAddressBook, FaAdjust, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
        <div className='grid grid-cols-3'>
            <div>
                <h1 className='font-extalight text-2xl'>LUSION</h1>
            </div>
            <div>
                <ul className='flex font-semibold'>
                    <li className='p-2 ml-6'>Home</li>
                    <li className='p-2 ml-6'>Shop</li>
                    <li className='p-2 ml-6'>Product</li>
                    <li className='p-2 ml-6'>Pages</li>
                    <li className='p-2 ml-6'>Blog</li>
                </ul>
            </div>
            <div className='ml-36'>
                <ul className='flex'>
                    <li className='ml-4 p-3'><FaSearch /></li>
                    <li className='ml-4 p-3'><FaAccusoft /></li>
                    <li className='ml-4 p-3'><FaAdjust /></li>
                    <li className='ml-4 p-3'><FaAddressBook /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar