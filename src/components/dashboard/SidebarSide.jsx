import React from 'react'

const SidebarSide = ({Header}) => {
  return (
    <div>
        <div>
          <ul className='text-slate-700 mb-6'>
          <li className='-mt-4 mb-2 hover:mb-6 w-10/12 rounded-lg m-auto h-10 hover:bg-blue-600 text-center'>
              <h1 className='-mb-2 hover:text-slate-50'>{Header}</h1>
          </li>
          </ul>
        </div>
    </div>
  )
}

export default SidebarSide