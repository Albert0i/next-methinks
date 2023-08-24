"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { isLogin } from '@/server-actions/authServerAction'
import { getNumberOfPosts } from '@/server-actions/postServerAction'

const Filter = () => {
  const [filterValue, setFilterValue] = useState('')
  const [disabled, setDisabled] = useState('disabled')
  const [showLogout, setShowLogout] = useState(false)
  const [count, setCount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    isLogin().then(res => setShowLogout(res))        
  })

  useEffect(()=>{
    setDisabled(filterValue==='')
    getNumberOfPosts(filterValue).then(res => setCount(res.count)) 
  }, [filterValue])

  const handleClick = () => {
    router.push(`/posts?_st=${filterValue}`)
  }

  return (
    <div className='flex flex-row justify-between'>
      <div className='pl-2 text-sm font-bold align-bottom'>{ count }</div>
      <div className='flex flex-row justify-end px-2 mb-1'>
          <input className='w-1/4 px-1 border border-black rounded' placeholder='full text value' autoFocus type='text' value={filterValue} onChange={ e => setFilterValue(e.target.value)}></input>
          
          <button className='px-1 ml-2 font-bold text-white bg-green-600 rounded hover:bg-green-400 disabled:bg-gray-400 disabled:cursor-not-allowed' onClick={ handleClick } disabled={disabled}>Filter</button>

          { showLogout ? <Link className='px-1 ml-2 font-bold text-white bg-orange-600 rounded hover:bg-orange-400' href='/auth/logout'>Logout</Link> : ''}
      </div>
    </div>
    
  )
}

export default Filter