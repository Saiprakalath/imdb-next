import React from 'react'
import MenuItem from '../menu-item'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import { DarkModeSwitch } from '../dark-mode-switch'

export default function Header() {
  return (
    <div className='flex justify-between max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <MenuItem title ="home"  address="/" Icon={AiFillHome}/>
            <MenuItem title ="about"  address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className=' flex items-center gap-4'>
            <DarkModeSwitch/>
            <Link href={"/"} className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</Link>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </div>
    </div>
  )
}
