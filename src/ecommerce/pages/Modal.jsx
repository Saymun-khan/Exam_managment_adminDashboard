import React from 'react'
import { FaAccusoft } from 'react-icons/fa'
import img from '../img/cake.jpg'
const Modal = () => {
    //https://gpsdemo.myshopify.com/
  return (
    <div className='mt-10 ml-16 p-8 m-auto justify-center'>
        <div className='w-1/2 h-72 p-4 rounded-sm bg-slate-300'>
            <div className='flex'>
               <h1 className='flex-1'> 1 item added to your cart</h1>
               <div className='justify-end m-auto text-right'><FaAccusoft /></div>
            </div>
            <span className='block w-100 h-1 mt-4 bg-slate-400'></span>
            <div className='flex mt-6 mb-8'>
                <div className='flex-3'>
                  <img className='w-28 mr-4' src={img} alt="" />
                </div>
                <div className='flex-1 text-slate-600 font-medium mb-8'>
                   <h1>Chocolate Cake</h1>
                   <h1>Quantity: 1</h1>
                   <h1>Cart subtotal: $1064.00</h1>
                </div>
            </div>
            <div className=' justify-end m-auto text-right'>
                <button className='w-40 h-14 bg-orange-300 ml-4'>Proceed to cart</button>
                <button className='w-40 h-14 bg-orange-300 ml-4'>Continue Shoping</button>
            </div>
        </div>
    </div>
  )
}

export default Modal