import React from 'react'

const FooterCard = ({Text,TextNumber,Icon,BackgroundColor}) => {
  return (
    <div className={`flex w-56 mb-2 p-2 h-20 ${BackgroundColor} rounded-lg mr-4`}>
        <div>
            <p className='font-semibold text-slate-50 text-sm mt-2'>{Text}</p>
            <h1 className='font-bold text-slate-100 text-2xl '>{TextNumber}</h1>
        </div>
        <div className='w-14 h-14 ml-2 mt-1 rounded-lg bg-slate-100'>
            <Icon className='w-10 text-center ml-2 mt-2 text-blue-500 h-10' /> 
        </div>
    </div>
  )
}

export default FooterCard