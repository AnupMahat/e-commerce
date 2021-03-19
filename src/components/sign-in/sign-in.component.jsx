import React,{useState} from 'react'
import {connect} from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

import {googleSignInStart,emailSignInStart} from '../../redux/user/users.actions'

const SignIn =({emailSignInStart,googleSignInStart})=>{
    
    const [userCredintial,setCredential] = useState({email:'',password:''})
    const {email,password} = userCredintial
    const handleSubmit=async (e)=>{
        e.preventDefault()
        
       
        emailSignInStart(email,password)
    }
    const handleChange=(e)=>{
        const{value,name} = e.target
        setCredential({...userCredintial,[name]:value})
    }


        return(
            <div className='sign-in'>
                <h2>I Already Have an Account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    name ='email' 
                    type='email' 
                    value={email} 
                    label='email'
                    handleChange={handleChange}
                    required
                    />
                    <FormInput 
                    type='password' 
                    name ='password' 
                    value={password} 
                    label='password'
                    handleChange={handleChange}
                    required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        {" "}
                        Sign in with Google
                        {" "}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    
}
const mapDispatchToProps = dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)