"use client"
import React, { useState } from 'react'
import { login } from '@/server-actions/authServerAction'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleClick = () => {
        login(username, password)
        .then (res => {
            //console.log(res)
            if (res.success) {
                toast.success('Login success')
                router.refresh()
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
                <h1 className='text-2xl font-bold'>Login</h1>
            </div>            
            <div className='m-4'>
                <input className='p-2 border border-black rounded' type='text' placeholder='username' autoFocus
                    value={username} onChange={e => setUsername(e.target.value) } /> 
            </div>
            <div className='m-4'>
                <input className='p-2 border border-black rounded' type='password' placeholder='password' 
                    value={password} onChange={e => setPassword(e.target.value) } /> 
            </div>
            <div className='m-4'>
                <button className='px-4 py-2 mr-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-400' onClick={handleClick}>Login</button>
            </div>
            
            {/* <div>
            <Link className="mt-3 text-sm text-right" href={"/auth/register"}>
                Don&apos;t have an account? <span className="underline">Register</span>
            </Link>
            </div> */}
            <div>
                <Toaster position="bottom-center" reverseOrder={true} />
            </div>       
        </div>
      )
}

export default Login