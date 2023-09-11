"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { isLogin } from '@/server-actions/authServerAction'

import { useDebounce } from 'use-debounce';
import { getNumberOfPosts } from '@/server-actions/postServerAction'

const Filter = ({ page, perPage }) => {
  const [filterValue, setFilterValue] = useState('')
  const [disabled, setDisabled] = useState('disabled')
  const [showLogout, setShowLogout] = useState(false)
  const router = useRouter()

  const [debouncedValue] = useDebounce(filterValue, 1000);
  const [count, setCount] = useState(0)

  useEffect(() => {
    isLogin().then(res => setShowLogout(res))        
  }, [])

  useEffect(()=>{
    setDisabled(filterValue==='')
  }, [filterValue])

  useEffect(()=>{
    getNumberOfPosts(debouncedValue).then(res => setCount(res.count)) 
  }, [debouncedValue])

  useEffect(() => {    
    setDisabled(count === 0)
  }, [count])

  const handleClick = () => {
    router.refresh()
    router.push(`/posts?_st=${filterValue}`)
  }
  
  const generateIndexes = () => {
    let indexes = []
    
    if (count > perPage)
      indexes.push((<span key='index1'>
                      { Number(page * perPage) + 1}~{ (Number(page) + 1) * perPage <= count? (Number(page) + 1) * perPage : count}/
                    </span>))

    indexes.push((<span key='index2'>{ count } </span>))

    if (count > perPage)
      for (let i = 0; i <= Math.floor(count / perPage) ; i++) {
        if (page == i)
          indexes.push(
            <span key={i+1} 
                  className='px-2 py-0 ml-2 text-white bg-gray-400 rounded-full' >
              { Number(i+1) }
            </span>)
        else 
          indexes.push(
            <Link key={i+1}
                  className='px-2 py-0 ml-2 text-white bg-green-600 rounded-full hover:bg-green-400' 
                  href={`/posts?_page=${i}`} >
              {i+1}
            </Link>
          )
    }      
    return indexes
  }

  return (
    <div className='flex flex-row justify-between'>      
        <div className='pl-2 text-sm font-bold align-bottom'>
          { generateIndexes() }          
        </div>

      <div className='flex flex-row justify-end px-2 mb-1'>
          <input className='w-1/3 px-1 border border-black rounded' placeholder='text to search' autoFocus type='text' value={filterValue} onChange={ e => setFilterValue(e.target.value)}></input>
          
          <button className='px-1 ml-2 font-bold text-white bg-green-600 rounded hover:bg-green-400 disabled:bg-gray-400 disabled:cursor-not-allowed' onClick={ handleClick } disabled={disabled}>Filter</button>

          { showLogout ? <Link className='px-1 ml-2 font-bold text-white bg-orange-600 rounded hover:bg-orange-400' href='/auth/logout'>Logout</Link> : ''}
      </div>
    </div>
    
  )
}

export default Filter