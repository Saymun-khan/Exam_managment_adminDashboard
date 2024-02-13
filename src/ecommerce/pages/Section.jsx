import React from 'react'
import img from '../img/cake2.jpg'

const Section = () => {
  return (
    <div className='p-8 bg-pink-300 mt-24 grid grid-cols-2'>
        <div>
        <h1 className='mt-8 text-xl font-semibold text-slate-50'>NEW IN</h1>
        <h1 className='mt-4 text-3xl font-medium text-slate-200'>Lemon Drizzle Cake</h1>
        <p className='mt-6 text-slate-700'>Lorem ipsum, dolor sit amet<br></br> consectetur adipisicing elit. Assumenda, sapiente<br></br> corporis? Dolorum, voluptatum<br></br> cupiditate. Voluptatem harum sequi quas assumenda expedita.</p>
        <h1 className='text-xl mt-4 font-bold text-white'>$29.00</h1>
        <button className='mt-4 w-28 rounded-sm p-2 bg-slate-200 h-12 border-b-teal-200 border-solid'>Buy Now</button>
        </div>
        <div className='w-100'>
            <img src={img} alt="" className='w-96 ml-24' />
        </div>
    </div>
  )
}

export default Section