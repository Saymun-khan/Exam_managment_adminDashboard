import React from 'react'
import img from '../img/cake.jpg'

const TopCatagories = () => {
  return (
    <div className='justify-center m-auto'>
        
    <div className='w-100 h-96 p-4 shadow-lg shadow-slate-400'>
        <div className='mt-14'>
            <img src={img} alt="" className='w-1/2 justify-center m-auto' />
        </div>
        <h1 className='mt-6 text-3xl font-mono text-center'>Birthday Cake</h1>
        <div className='m-auto justify-center text-center mt-6'>
            <button>SHOP NOW</button>
            <span className='w-24 block h-1 bg-orange-300 m-auto mt-2'></span>
        </div>
    </div>
    </div>
  )
}

export default TopCatagories