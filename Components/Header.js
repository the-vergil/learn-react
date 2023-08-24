import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
        <div className='font-serif font-bold px-5 py-5 bg-emerald-600 flex items-center justify-between'>
            <h2>Logo</h2>
            <div className='flex gap-8'>
              <Link href='/About'>About</Link>
              <Link href='/Careers'>Careers</Link>
              <Link href='/Blog'>Blog</Link>
            </div>
        </div>
    </>
  )
}

export default Header