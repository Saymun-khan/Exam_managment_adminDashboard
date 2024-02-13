import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../dashboard/Navbar'
import Sidebar from '../dashboard/Sidebar'
import SubjectCard from './SubjectCard'

const Subject = () => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <div className='flex-3 bg-slate-100 h-screen w-72 text-white font-semibold'>
                <Sidebar />
            </div>
            <div className='grid grid-cols-4 p-4 ml-8'>
                <Link to='/physics'>
                  <SubjectCard SubjectName="Physics" BackgroundColor="bg-orange-500"/>
                </Link>
                <Link to='/chemistry'>
                  <SubjectCard SubjectName="Chemistry" BackgroundColor="bg-green-500"/>
                </Link>
                <Link to='/math'>
                  <SubjectCard SubjectName="Math" BackgroundColor="bg-blue-500"/>
                </Link>
                <Link to='/biology'>
                  <SubjectCard SubjectName="Biology" BackgroundColor="bg-pink-500"/>
                </Link>
            </div>
            
        </div>
        
    </div>
  )
}

export default Subject