import React from 'react'

const QuestionCard = ({children,Bg,CardHeader}) => {
  return (
    <div>
        <div className='p-4'>
               <h1 className='text-xl ml-10 font-bold p-4'>{CardHeader}</h1>
               <div className={`w-96 h-auto ${Bg} rounded-md ml-4`}>
                {children}
               </div>
            </div>
    </div>
  )
}

export default QuestionCard