import Axios from 'axios'
import React, { useState } from 'react'
import DashboardHome from '../dashboard/DashboardHome'
import Question from '../question/Question'

const BiologyQuestion = () => {
  const init = {
    question:'',
    optionOne:'',
    optionTwo:'',
    optionThree:'',
    optionFour:'',
    answer:''
  }
  const [value,setValue] = useState({...init})
  const [errors,setErrors] = useState({...init})
  const [submit,setSubmit] = useState(false)
  const handleInput = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  //post form data on database
  const handleForm = () => {
    const {question,optionOne,optionTwo,optionThree,optionFour,answer} = value
    const formData = {
      question,
      answer:[optionOne,optionTwo,optionThree,optionFour],
      correctAnswer:answer,
      typesOfQuestion:'engineering'
    }

    Axios.post('http://localhost:4500/auth/biology',formData)
    .then((result) => {
      setSubmit(true)
    })
    .catch((error) => {
      error = new Error
    })
  }

  //handle errors function
  const errorHandler = (value) => {
    const errors = {}
    const {question,optionOne,optionTwo,optionThree,optionFour,answer} = value
    if(!question){
      errors.question = "Invalid question"
    }if(!optionOne){
      errors.optionOne = "Invalid optionOne"
    }if(!optionTwo) {
      errors.optionTwo = "Invalid optionTwo"
    }if(!optionThree) {
      errors.optionThree = "Invalid optionThree"
    }
    if(!optionFour) {
      errors.optionFour = "Invalid optionFour"
    }
    if(!answer) {
      errors.answer = "Invalid answer"
    }
    return{
      errors,
      isValid:Object.keys(errors).length === 0
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const {errors,isValid} = errorHandler(value)
    if(isValid){
      setErrors('')
      handleForm()
      console.log(value)
    }else{
      setErrors({...errors})
    }
  }
  return (
    <DashboardHome>
      <Question 
      Header='Biology Question Inputer' 
      OnClick={handleSubmit} 
      ValueOne={value.question} 
      ValueTwo={value.optionOne} 
      ValueThree={value.optionTwo} 
      ValueFour={value.optionThree} 
      ValueFive={value.optionFour} 
      ValueSix={value.answer} 
      OnChange={handleInput} 
      ErrorsOne={errors.question} 
      ErrorsTwo={errors.optionOne} 
      ErrorsThree={errors.optionTwo} 
      ErrorsFour={errors.optionThree} 
      ErrorsFive={errors.optionFour} 
      ErrorsSix={errors.answer}
      Submit={submit ? 'Question submitted' : ''} />
    </DashboardHome>
  )
}

export default BiologyQuestion