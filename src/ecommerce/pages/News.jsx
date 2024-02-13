import React from 'react'
import img from '../img/cake.jpg'

const News = () => {
  return (
    <div className='w-100 shadow-lg shadow-slate-400 p-4 ml-4 mt-10'>
        <div className='w-100 justify-center m-auto'>
            <img src={img} alt="" />
        </div>
        <div>
        <h1 className='mt-10 text-xl text-semibold text-slate-900 text-center'>Bake at Home: Coconut Pyramids</h1>
        <p className='text-slate-600 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, tempore.</p>

        <button className='mt-4 text-orange-400'>Read more</button>
        </div>
    </div>
  )
}

export default News