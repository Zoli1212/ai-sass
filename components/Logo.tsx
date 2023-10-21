'use client'
import React from 'react'
import LogoImage from '@logos/black.svg'
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from './ui/aspect-ratio'




function Logo() {
  return (
    <Link href='/'>
        <div className="flex items-center w-72 h-14">
            <AspectRatio 
            ratio={16/9}
            className='flex items-center justify-center'>

            <Image
            priority
            src={LogoImage}
            alt='Logo'
            className='dark:filter dark:invert'
            width={30}
            height={30}

            />
            </AspectRatio>
        </div>

    </Link>
  )
}

export default Logo