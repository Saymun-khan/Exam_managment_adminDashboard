import React from 'react'
import img from '../img/cake3.jpg'

const Image = () => {
  return (
    <div className='mt-10'>
        <div className='w-100 shadow-lg shadow-slate-300'>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Image