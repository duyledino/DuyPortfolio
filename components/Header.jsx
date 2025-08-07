import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Information from './Information'

const Header = () => {
  return (
    <header className='container mx-auto'>
        <div className='flex items-center justify-between w-full p-3 px-5 lg:px-0'>
            <Link href={'/'}>
                <h1 className='text-4xl lg:text-6xl'>
                    Duy<span className='text-[var(--highlight)]'>.</span>
                </h1>
            </Link>
            <Nav/>
            <MobileNav/>
        </div>
    </header>
  )
}

export default Header