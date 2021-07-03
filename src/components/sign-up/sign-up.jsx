import React,{useState} from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signUpStart} from '../../redux/user/users.actions'
import './sign-up.styles.scss'

const SignUp =({signUpStart,})=>{
    const [userCredential,setUserCredential] =useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const {displayName,email,password,confirmPassword} = userCredential

    const handleSubmit= async(e)=>{
        e.preventDefault()

       
        
        if(password !== confirmPassword){
            alert('password does not match')
            return
        }
        signUpStart({displayName,email,password})
    }

    const handleChange=(e)=>{
        const {value,name} = e.target
        setUserCredential({...userCredential,[name]:value})

    }


        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={handleChange}
                        label='Confirrm-Password'
                        required
                    />
                    <CustomButton type='submit'>SIGNUP</CustomButton>
                </form>
            </div>
        )
    }


const mapDispatchToProps=(dispatch)=>({
    signUpStart:(userCredentials)=>dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp)