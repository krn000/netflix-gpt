import React, { useState } from 'react'
import Header from './Header'
import { validateAuth } from '../utils/validateauth'

const Login = () => {

  const emailRef = React.useRef('')
  const passwordRef = React.useRef('')
  const nameRef = React.useRef('')
  const [error, setError] = useState('')
  const [isSignIn, setIsSignIn] = useState(true)
  const background = "https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_medium.jpg"

  const toggleSignUp = () => {
    setError('')
    setIsSignIn(!isSignIn)
  } 

  const handleSubmit = () => {
    if(isSignIn) {
      // sign in
      const error = validateAuth(emailRef.current.value, passwordRef.current.value)
      if(error) {
        setError(error)
      }
    }else{
      // sign up
      const error = validateAuth(emailRef.current.value, passwordRef.current.value)
      if(error) {
        setError(error)
      }
      if(!nameRef.current.value) {
        setError('Name is required')
      }
    }
  }

  return (
    <>
      <Header />
      <img src={background} alt="background" className='w-full h-screen' />
      <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center bg-opacity-80'>
        <form className='bg-black/50 p-10 rounded-lg w-4/12'> 
          
          <h1 className='text-4xl font-bold text-white'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
          <input type="email" placeholder='Email or phone number' className='p-2 my-4 w-full bg-gray-700 rounded-md text-white' ref={emailRef} />
          {!isSignIn && <input type="name" placeholder='Name' className='p-2 my-4 w-full bg-gray-700 rounded-md text-white' ref={nameRef} />}

          <input type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-700 rounded-md text-white' ref={passwordRef} />
          <button className='p-2 my-4 w-full bg-red-700 text-white rounded-md' onClick={handleSubmit}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
          <p className='text-sm text-white'>{isSignIn ? 'New to Netflix?' : 'Already have an account?'} <a href="#" className='pl-3 font-bold' onClick={toggleSignUp}>{isSignIn ? 'Sign up now.' : 'Sign in now.'}</a></p>
          {<div className='text-red-500 p-2 rounded-md'>{error}</div>}
        </form>
      </div>
    </>
  )
}

export default Login