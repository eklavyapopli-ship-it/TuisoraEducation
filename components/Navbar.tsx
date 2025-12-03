import React from 'react'
import { navlinks } from './lib/navlinks'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
const links = navlinks
  return (
    <div className='flex bg-white justify-around h-20 place-items-center place-content-center'>
        <Image src="/logo.png" alt='' width={100} height={80}/>
    <div className='flex gap-8 ' >{links.map((item)=>(
        <Link key={item.id} href={item.link}>
        <div className='text-blue-900  font-bold'>{item.name}</div>
        </Link>
    ))}</div>
    </div>
  )
}

export default Navbar