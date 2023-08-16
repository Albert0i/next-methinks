"use client"
import React, { useState } from 'react'
import { register } from '@/server-actions/authServerAction'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const router = useRouter()

    const handleClick = () => {
        register(username, password)
        .then (res => {
            //console.log(res)
            if (res.success) {
                toast.success('Register success')      
                setTimeout(()=>{router.push( res.url ? res.url :'/posts/' ) }, 1000)
            }
            else 
            {
                toast.error(res.message)      
            }
        })
        .catch(e => {
            console.log(e.message)
            toast.error(e.message)
        })
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='m-4'>
                <h1 className='text-2xl font-bold'>Register</h1>
            </div>            
            <div className='m-4'>
                <input className='p-2 border border-black rounded' type='text' placeholder='username' autoFocus required
                    value={username} onChange={e => setUsername(e.target.value) } /> 
            </div>
            <div className='m-4'>
                <input className='p-2 border border-black rounded' type='password' placeholder='password' required
                    value={password} onChange={e => setPassword(e.target.value) } /> 
            </div>
            <div className='m-4'>
                <input className='p-2 border border-black rounded' type='text' placeholder='email (optional)' required
                    value={email} onChange={e => setEmail(e.target.value) } /> 
            </div>

            <div className='m-4'>
                <button className='px-4 py-2 mr-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-400' onClick={handleClick}>Register</button>
            </div>
            <div>
                
            <Link className="mt-3 text-sm text-right" href={"/auth/login"}>
                Already have an account? <span className="underline">Login</span>
            </Link>
            </div>
            <div>
                <Toaster position="bottom-center" reverseOrder={true} />
            </div>       
        </div>
      )
}

export default Register