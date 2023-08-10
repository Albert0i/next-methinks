"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Filter = () => {
  const [filterValue, setFilterValue] = useState('')
  const router = useRouter()

  const handleClick = () => {
    router.push(`/posts?_st=${filterValue}`)
  }

  return (
    <div className='flex flex-row justify-end px-2'>
        <input className='w-1/4 px-1 border border-black rounded' placeholder='full text value' autoFocus type='text' value={filterValue} onChange={ e => setFilterValue(e.target.value)}></input>
        <button className='px-1 ml-2 font-bold text-white bg-green-500 rounded' onClick={ handleClick }>Filter</button>
    </div>
  )
}

export default Filter