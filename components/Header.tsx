import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Logo from './Logo'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col md:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
            <Logo />
            <div className="flex-1 flex items-center justify-end spqace-x-4">

            <DarkModeToggle />
            </div>
        </nav>
    </header>
  )
}

export default Header