import React from 'react'
import Navbar from '../dashboard/Navbar'
import Sidebar from '../dashboard/Sidebar'

const DashboardHome = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <div className='flex-3 bg-slate-100 h-screen w-72 text-white font-semibold'>
                <Sidebar />
            </div>
            <div className='ml-10'>
                {children}
            </div>
            
        </div>
        
    </div>
  )
}

export default DashboardHome