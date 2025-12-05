"use client"
import { navlinks } from './lib/navlinks'
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
const links = navlinks
const navVariant = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], 
    },
  },
};

  return (
    <motion.div animate="visible" variants={navVariant} initial="hidden" className='flex bg-white justify-around h-20 place-items-center  shadow-md w-full  top-0 fixed z-1'>
        <Image src="/logo.png" alt='' width={100} height={80}/>
    <div className='flex gap-8 ' >{links.map((item)=>(
        <Link key={item.id} href={item.link} target='__blank'>
        <div className='text-blue-900 relative font-bold hover:text-blue-600 group hidden md:flex'>{item.name}<div className='absolute scale-x-0 group-hover:scale-x-100 -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-blue-600 duration-300 ease-out'></div></div>
        </Link>
    ))}</div>
    </motion.div>
  )
}

export default Navbar