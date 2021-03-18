import React,{Component} from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signUpStart} from '../../redux/user/users.actions'
import './sign-up.styles.scss'

class SignUp extends Component{
    state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    handleSubmit= async(e)=>{
        e.preventDefault()

        const {signUpStart} = this.props
        const {displayName,email,password,confirmPassword} = this.state
        if(password !== confirmPassword){
            alert('password does not match')
            return
        }
        signUpStart({displayName,email,password})
    }

    handleChange=(e)=>{
        const {value,name} = e.target
        this.setState({[name]:value})

    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirrm-Password'
                        required
                    />
                    <CustomButton type='submit'>SIGNUP</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    signUpStart:(userCredentials)=>dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp)