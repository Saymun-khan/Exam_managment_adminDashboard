import React from 'react'

const StarStudents = () => {
  return (
    <div className='ml-4 p-4'>
        <table className='w-11/12'>
            <thead className='font-bold p-2 bg-slate-200'>
                <td>Id</td>
                <td>Name</td>
                <td>Marks</td>
                <td>Percentag</td>
                <td>Week</td>
            </thead>
            <tr className='text-gray-700 font-semibold'>
                <td>123456</td>
                <td>Saymun Khan</td>
                <td>1185</td>
                <td>98%</td>
                <td>First</td>
            </tr>
            <tr className='text-gray-700 font-semibold'>
                <td>123456</td>
                <td>Saymun Khan</td>
                <td>1185</td>
                <td>98%</td>
                <td>First</td>
            </tr>
        </table>
    </div>
  )
}

export default StarStudents