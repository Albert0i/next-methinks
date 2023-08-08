"use client"
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1>Login</h1>
      <div>
        <input type='text' placeholder='username' /> 
      </div>
      <div>
        <input type='password' placeholder='password' /> 
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default LoginPage