import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CgAdd } from 'react-icons/cg'
import FooterCard from '../dashboard/FooterCard'
import Checkbox from './Checkbox'
import Input from './Input'
import QuestionCard from './QuestionCard'
import SubmitButton from './submitButton'

const Question = ({Header,OnClick,ValueOne,ValueTwo,ValueThree,ValueFour,ValueFive,ValueSix,OnChange,ErrorsOne,ErrorsTwo,ErrorsThree,ErrorsFour,ErrorsFive,ErrorsSix,Submit,CheckboxValueOne,CheckboxValueTwo,CheckboxValueThree,CheckboxValueFour,CheckboxOnClick}) => {

    const init = {
        physicsQuestionAmount:'',
        chemistryQuestionAmount:'',
        biologyQuestionAmount:'',
        mathQuestionAmount:''
    }
    const [amount,setAmount] = useState({...init})
    useEffect(() => {

        //module scaffolding
        
        //physics question info
        axios.get('http://localhost:4500/auth/physics')
        .then((response) => {
            setAmount((prev) => ({
                ...prev,
                physicsQuestionAmount:response.data.length
            }))
        }).catch((error) => {
            console.log(error)
        })

        //chemistry question info
        axios.get('http://localhost:4500/auth/chemistry')
        .then((response) => {
            setAmount((prev) => ({
                ...prev,
                chemistryQuestionAmount:response.data.length
            }))
        }).catch((error) => {
            console.log(error)
        })

        //math question info
        axios.get('http://localhost:4500/auth/math')
        .then((response) => {
            setAmount((prev) => ({
                ...prev,
                mathQuestionAmount:response.data.length
            }))
        }).catch((error) => {
            console.log(error)
        })

         //biology question info
         axios.get('http://localhost:4500/auth/biology')
         .then((response) => {
             setAmount((prev) => ({
                 ...prev,
                 biologyQuestionAmount:response.data.length
             }))
         }).catch((error) => {
             console.log(error)
         })

    }, [])
    
    
  return (
    <div>
        <div className='flex'>
            <QuestionCard CardHeader="Add Your Genius Question" Bg="bg-gray-600">
                <h1 className='text-center text-slate-200 font-bold mt-2 mb-2'>{Header}</h1>
                <h1 className='text-center font-bold text-green-400 mb-2'>{Submit}</h1>
                <div className='flex'>
                    <Checkbox Text="Engineering" Value={CheckboxValueOne} Name="Engineering" CheckboxOnClick={CheckboxOnClick} />
                    <Checkbox Text="Medical" Value={CheckboxValueTwo} Name="Medical"
                    CheckboxOnClick={CheckboxOnClick} />
                    <Checkbox Text="Versity"Value={CheckboxValueThree} Name="Versity"
                    CheckboxOnClick={CheckboxOnClick} />
                    <Checkbox Text="HSC" Value={CheckboxValueFour} Name="HSC"
                    CheckboxOnClick={CheckboxOnClick} />
                </div>
                <Input 
                    Placeholder="Enter your question" 
                    Value={ValueOne} 
                    OnChange={OnChange} 
                    Name='question' 
                    Errors={ErrorsOne} />
                <Input 
                    Placeholder="Enter your first option"  
                    Value={ValueTwo} 
                    OnChange={OnChange} 
                    Name='optionOne'
                    Errors={ErrorsTwo}
                     />
                <Input 
                    Placeholder="Enter your second option"  
                    Value={ValueThree} 
                    OnChange={OnChange} 
                    Name='optionTwo' 
                    Errors={ErrorsThree}/>
                <Input 
                    Placeholder="Enter your third option"  
                    Value={ValueFour} 
                    OnChange={OnChange} 
                    Name='optionThree' 
                    Errors={ErrorsFour}/>
                <Input 
                    Placeholder="Enter your fourth option"  
                    Value={ValueFive} 
                    OnChange={OnChange} 
                    Name='optionFour'
                    Errors={ErrorsFive} />
                <Input 
                    Placeholder="Please provide correct answer"  Value={ValueSix} 
                    OnChange={OnChange} 
                    Name='answer'
                    Errors={ErrorsSix} />
                <SubmitButton OnClick={OnClick} />
            </QuestionCard>
            <div className='ml-10 mt-2'>
                <QuestionCard CardHeader="Question Analysis" Bg="bg-red-500">
                    <div className='ml-20'>
                        <FooterCard Text="Physics Question info" TextNumber={amount.physicsQuestionAmount} Icon={CgAdd} BackgroundColor="bg-blue-500" />
                        <FooterCard Text="Chemist Question info" TextNumber={amount.chemistryQuestionAmount} Icon={CgAdd} BackgroundColor="bg-blue-500" />
                        <FooterCard Text="Math Question info" TextNumber={amount.mathQuestionAmount} Icon={CgAdd} BackgroundColor="bg-blue-500" />
                        <FooterCard Text="Biology Question info" TextNumber={amount.biologyQuestionAmount} Icon={CgAdd} BackgroundColor="bg-blue-500" />
                    </div>
                </QuestionCard>
            </div>   
        </div>
    </div>
  )
}

export default Question