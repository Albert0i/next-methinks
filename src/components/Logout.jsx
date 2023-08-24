"use client"
import React from 'react'
import { logout } from '@/server-actions/authServerAction'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Logout = () => {
    const router = useRouter()

    const handleClick = () => {
        logout()
        .then (res => {
            //console.log(res)
            if (res.success) {
                toast.success('Logout success')
                router.refresh()
                setTimeout(()=>{router.push('/posts/')}, 1000)
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
                <h1 className='text-2xl font-bold'>Are you sure to logout?</h1>
            </div>            
            <div className='m-4'>
                <button className='px-4 py-2 mr-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-400' onClick={handleClick}>Proceed</button>
            </div>   
            <div>
                <Toaster position="bottom-center" reverseOrder={true} />
            </div>       
        </div>
      )
}

export default Logout