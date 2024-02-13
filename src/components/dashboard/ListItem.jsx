import React from 'react'
import { FaArrowAltCircleRight, FaDashcube } from 'react-icons/fa'

const ListItem = ({Text,children,OnClick}) => {
  return (
    <div>
        <ul>
            <button onClick={OnClick} className='text-gray-500 flex'>
              <FaDashcube className='w-5 h-5 ml-4 mb-8 mr-4'/>
              <h1>{Text}</h1>
              <FaArrowAltCircleRight  className='w-3 h-3 mt-2 justify-end content-end ml-10 mb-8 mr-4' />
            </button>
        </ul>
        <div>
          {children}
        </div>
    </div>
  )
}

export default ListItem