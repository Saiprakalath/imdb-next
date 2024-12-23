import React from 'react'
import MenuItem from '../menu-item'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <MenuItem title ="home"  address="/" Icon={AiFillHome}/>
            <MenuItem title ="about"  address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className='flex gap-1 items-center'>
            <Link href={"/"} className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMdb</Link>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </div>
    </div>
  )
}
