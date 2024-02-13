import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'

const Sidebar = () => {
  return (
    <div>
      <div>
        <h1 className='text-gray-500 ml-4 mb-6 mt-4'>Main Menu</h1>
      </div>
      <Link to='/dashboard'>
        <ListItem Text='Dashboard' />
      </Link>
      <ListItem Text='Students'>

      </ListItem>
      <ListItem Text='Teachers' />
      <ListItem Text='Departments' />
      <Link to='/subject'>
        <ListItem Text='Subjects' />
      </Link>
      <ListItem Text='Question_Add' />
    </div>
  )
}

export default Sidebar