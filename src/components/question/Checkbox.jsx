import React from 'react'

const Checkbox = ({Text,Value,Name,CheckboxOnClick}) => {
  return (
    <div>
        <input type="checkbox" name={Name} className='ml-2 mr-2' value={Value} onClick={CheckboxOnClick} />
        <label htmlFor={Name} className='text-white font-semibold'>{Text}</label>
    </div>
  )
}

export default Checkbox