import React from 'react'
import img from '../img/cake.jpg'

const BestSeller = () => {
  return (
    <div className='justify-center m-auto'>
        
    <div className='w-100 h-96 p-4 shadow-lg shadow-slate-400'>
        <div className='p-2'>
           <h1 className='mt-2 text-slate-500'>Greenbox with macaroon</h1>
           <h1 className='text-xl mt-2'>$32.00</h1>
        </div>
        <div className='mt-14'>
            <img src={img} alt="" className='w-1/2 justify-center m-auto' />
        </div>
    </div>
    </div>
  )
}

export default BestSeller