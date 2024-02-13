import React from 'react'

const SidebarRight = ({Text,TextNumber,TextDescription,BackgroundColor,Icon}) => {
  return (
    <div className={`flex p-2 w-60 h-36 rounded-lg ${BackgroundColor} mr-6`}>
      <div>
        <Icon className='w-14 text-slate-50 mt-7 ml-2 h-14' />
      </div>
      <div className='ml-4 mt-2'>
        <h1 className='text-md font-bold text-slate-50'>{Text}</h1>
        <h1 className='text-3xl mt-1 mb-1 font-bold text-slate-50'>{TextNumber}</h1>
        <p className='text-sm font-semibold text-slate-50'>{TextDescription}</p>
      </div>
    </div>
  )
}

export default SidebarRight