import React from 'react'

const submitButton = ({OnClick}) => {
  return (
    <div>
        <button className='w-72 h-14 bg-emerald-700 text-slate-50 rounded-lg mt-6 ml-10 mb-4' onClick={OnClick}>Submit question</button>
    </div>
  )
}

export default submitButton