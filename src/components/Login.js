import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"/>
      </div>
      <form className='absolute p-12 bg-black w-4/12 my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
      {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>)}
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'></input>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>
        {!isSignInForm&&(<input type='password' placeholder='Confirm Password' className='p-4 my-4 w-full bg-gray-700'></input>)}
        <button className='p-4 my-4 w-full bg-red-700 rounded-lg'>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix, Sign up now":"Already registered? Sign In Now."}</p>
      </form>
    </div>
  )
}

export default Login
