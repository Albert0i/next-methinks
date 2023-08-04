import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='text-center text-4xl font-bold text-white bg-slate-400 h-[66px] pt-4'>
        <h1>
            <Link href='/'>
                meThinks
            </Link>            
        </h1>
    </header>
  )
}

export default Header