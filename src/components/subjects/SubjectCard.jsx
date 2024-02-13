import React from 'react'
import { CgAdd } from 'react-icons/cg'


const SubjectCard = ({SubjectName,BackgroundColor}) => {
  return (
    <div className={` text-center w-56 p-2 h-32 ${BackgroundColor} rounded-lg mr-4`}>
        <div>
            <p className='font-bold text-slate-50 text-xl mt-2'>{SubjectName}</p>
            <div className='w-10 h-10 ml-20 mt-1 rounded-lg bg-slate-100'>
                <CgAdd className='w-8 text-center ml-1 mt-2 text-blue-500 h-10 cursor-pointer' /> 
            </div>
            <h1 className='font-bold text-white text-md '>Add Question</h1>
        </div>
        
    </div>
  )
}

export default SubjectCard