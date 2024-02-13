import React from 'react'
import { FaFacebook, FaGlassWhiskey, FaShare, FaStar, FaTwitter } from 'react-icons/fa'
import img from '../img/cake4.jpg'
import Footer from './Footer'
import Navbar from './Navbar'

const ByeNow = () => {
  return (
    <div>
        <div className='ml-16 mt-10'>
         <Navbar />
        </div>
        <div className='p-6 grid grid-cols-2 mt-8'>
        <div>
            <img className='w-11/12' src={img} alt="" />
        </div>
        <div>
            <h1 className='mb-2 mt-6 text-slate-500 font-medium'>Home/Lemon Drizzle Cake</h1>
            <h1 className='text-3xl font-medium mt-4'>Lemon Drizzle Cake</h1>
            <div className='flex gap-2 mt-6'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> 
                <h1 className='-mt-1 text-slate-600 font-semibold'>No reviews</h1>
            </div>
            <h1 className='text-2xl mt-4 text-slate-800'>$29.00</h1>
            <div className='mt-4'>
                <button className='w-16 h-10 bg-slate-300'>-</button>
                <button className='w-16 h-10 bg-slate-300 ml-2'>0</button>
                <button className='w-16 h-10 bg-slate-300 ml-2'>+</button>
                <button className='w-44 h-10 bg-orange-600 ml-2'>ADD TO CART</button>
                <button className='w-16 h-10 bg-slate-300 ml-2'><FaGlassWhiskey className='ml-5' /></button>
            </div>
            <div>
                <button className='w-1/2 h-10 bg-black text-white text-xl font-bold mt-6 justify-center m-auto ml-10'>Bye It Now</button>
            </div>
            <div>
                <h1 className='mt-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Deserunt voluptatem accusamus perferendis saepe, tempora animi.</h1>
            </div>
            <div>
                <ul className='mt-4'>
                    <li className='font-medium text-slate-700 mt-2 first-letter:text-red-400'>Avaiability: In stock</li>
                    <li className='font-medium text-slate-700 mt-2 first-letter:text-red-400'>Vendor:lusion-demo</li>
                    <li className='font-medium text-slate-700 mt-2 first-letter:text-red-400'>Delivary & return</li>
                </ul>
            </div>
            <div className='mt-6'>
                <button className='w-14 h-10 bg-blue-800 ml-2'><FaFacebook className='ml-4 text-red-50' /></button>
                <button className='w-14 h-10 bg-sky-500 ml-2'><FaTwitter className='ml-4 text-red-50' /></button>
                <button className='w-14 h-10 bg-green-500 ml-2'><FaShare className='ml-4 text-red-50' /></button>
            </div>
        </div>
    </div>
    <div className='justify-center m-auto text-center mt-4'>
        <button className='text-xl font-semibold text-orange-500 ml-4'>Details</button>
        <button className='text-xl font-semibold text-pink-500 ml-8'>Reviws</button>
    </div>
    <h1 className='p-2 ml-16 text-slate-600 font-semibold mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sint itaque accusantium, pariatur ea distinctio?</h1>
    <div className='ml-10'>
      <Footer />
    </div>
    </div>
  )
}

export default ByeNow