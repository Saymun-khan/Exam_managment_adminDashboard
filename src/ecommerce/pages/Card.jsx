import React from 'react'
import { FaAirFreshener } from 'react-icons/fa'

const Card = () => {
  return (
    <div className='w-1/4 p-8 rounded-md shadow-lg shadow-slate-400 mt-12 ml-20'>
        <div>
            <FaAirFreshener />
        </div>
        <div className='mt-6'>
            <h1 className='text-2xl font-medium'>Freshly:BAKED</h1>
            <p className='font-extralight mt-4'>Choose your desired delivary date at checkout - we can also leave in a safe place if not home!</p>
        </div>
    </div>
  )
}

export default Card