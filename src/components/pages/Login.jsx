import Axios from 'axios'
import React, { useState } from 'react'
import AuthoButton from './AuthButton'
import AuthHeader from './authHeader'
import Input from './Input'

const Login = () => {
  const init = {
    mobile:'',
    password:''
  }
  const [value,setValue] = useState({...init})
  const [errors,setErrors] = useState({...init})
  const [login,setLogin] = useState(false)
  //handle cheker
  const handleChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  //post request handler
  const SignIn = () => {
    const data = {
      mobile:value.mobile,
      password:value.password
    }

    Axios.post("http://localhost:4500/auth/login",data)
    .then((result) => {
      setLogin(true)
      
      //redirect user to the auth page
      window.location.href = "/dashboard"

    })
    .catch((error) => {
      error = new Error
    })
  }
  //submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    const {errors,isValid} = checkValidity(value)
    if(isValid){
      console.log(value)
      setErrors('')
      SignIn()
    }else{
      setErrors({...errors})
    }
  }
  //error handler
  const checkValidity = (value) => {
    const errors = {}
    const {mobile,password} = value
    if(!mobile){
      errors.mobile = 'Invalid mobile'
    }
    if(!password){
      errors.password = 'Invalid password'
    }
    return{
      errors,
      isValid:Object.keys(errors).length === 0
    }
  }
  return (
    <div className='bg-gray-800 p-6'>
        <div className='w-1/2 h-auto bg-gray-500 rounded-md shadow-2xl justify-center m-auto mt-10 p-8'>
        <AuthHeader AuthHeader='Admin Login' />
        {login ? (<h1>Logged in successfully</h1>) : ''}
        <div className='mt-4 mb-4'>
            <Input 
            Name='mobile'
            Type='number'
            Value={value.mobile}
            Placeholder='Enter your mobile'
            clickHandler={handleChange}
            Errors={errors.mobile}
            />
            <Input 
            Name='password'
            Type='password'
            Value={value.password}
            Placeholder='Enter your password'
            clickHandler={handleChange}
            Errors={errors.password}
            />
        </div>
        <AuthoButton AuthButton='Log in' OnClick={handleSubmit}/>
        </div>

    </div>
  )
}

export default Login