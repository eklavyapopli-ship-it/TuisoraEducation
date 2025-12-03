"use client"
import { motion } from 'framer-motion'
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section className='w-full flex justify-center'>
    <div className='flex flex-col lg:flex-row place-content-center place-items-center  md:justify-center lg:space-x-30 space-y-10 lg:mt-20 mt-10  max-w-6xl'>
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
        transition={{duration:0.5,ease:"easeIn"}}>
        <div className='text-xl md:text-2xl font-bold text-gray-900 mb-6'>
       <TypeAnimation
      sequence={["Next-Gen Learning Starts Here",1000]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></div>
        <motion.div
        className='text-black text-sm md:text-xl md:text-justify text-center '>Interactive lessons, mock tests, and personalized guidance for every student.</motion.div>
        </motion.div>
    </div>
    </section>
  )
}

export default Hero