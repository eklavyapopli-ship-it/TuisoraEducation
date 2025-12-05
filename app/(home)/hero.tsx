"use client"
import { motion } from 'framer-motion'
import { TypeAnimation } from "react-type-animation";
import { HeroLinks } from '@/components/lib/navlinks';
import { div } from 'framer-motion/client';
import Link from 'next/link';
const Hero = () => {
  return (
    <section className='w-full flex place-content-center place-items-start md:place-items-center mt-40 lg:mt-0 lg:h-[80vh] h-[60vh]'>
    <div className='flex flex-col lg:flex-row place-content-center place-items-center  md:justify-center lg:space-x-30 space-y-10 mt-10 lg:mt-0  max-w-6xl'>
        <motion.div
         style={{overflow:"hidden"}}
        initial={{x:-180,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.5,ease:"easeIn"}}>
            <img src="/logo2.png" className='lg:h-80 lg:w-100 h-50 w-60' alt="" />
        </motion.div>
        <motion.div
        
        style={{overflow:"hidden"}}
        initial={{x:180,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.5,ease:"easeIn"}} className='flex justify-center flex-col lg:place-items-start place-items-center'>
        <div className='text-2xl md:text-5xl  font-bold text-gray-900 md:w-auto text-center md:text-left'>
       <TypeAnimation
      sequence={["Next-Gen Learning Starts Here",1000]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    /></div>
        <p className='text-black text-sm md:text-xl mt-5 lg:text-justify text-center w-80 sm:w-145'>Interactive lessons, mock tests, and personalized guidance for every student.</p>
        <div className='flex space-x-10 mt-5 place-content-center md:w-fit w-screen'>
        {HeroLinks.map((item)=>(
          <Link key={item.id} href={item.link} ><div className='bg-blue-600 text-white text-center text-md md:px-7 md:py-2 py-1 px-5 font-bold rounded-full hover:bg-blue-700  shadow-lg'>{item.name}</div></Link>
        ))}</div>
        </motion.div>
    </div>
    </section>
  )
}

export default Hero