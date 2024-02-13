import React from 'react'
import { CgAdd } from 'react-icons/cg'

const Input = ({Placeholder,Value,OnChange,Name,Errors}) => {
  return (
    <div>
        <div  className='flex'>
        <CgAdd className='w-8 text-center ml-1 mt-3 text-blue-500 h-10 cursor-pointer' />
        <div className='w-1 h-8 bg-gray-700 mt-4 ml-1'>
        </div> 
        <input type="text" className='mt-2 border-b-2 border-b-amber-400 ml-2 outline-none bg-gray-600 text-slate-50' value={Value} placeholder={Placeholder} onChange={OnChange} name={Name} />
        </div>
        <h1 className='ml-10 mt-1 text-red-300'>{Errors}</h1>
    </div>
  )
}

export default Input