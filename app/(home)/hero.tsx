"use client"
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row place-content-center place-items-center  md:justify-center lg:space-x-30 space-y-10 lg:mt-20 mt-10   '>
        <motion.div
         style={{overflow:"hidden"}}
        initial={{x:-180,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1,ease:"easeIn"}}>
            <img src="/logo2.png" className='lg:h-80 lg:w-100 h-50 w-60' alt="" />
        </motion.div>
        <motion.div
        
        style={{overflow:"hidden"}}
        initial={{x:180,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1,ease:"easeIn"}}>
        <motion.div 
        style={{overflow:"hidden", whiteSpace:"nowrap"}} 
        initial={{width:0}}
        animate={{ width:"100%"}}
        transition={{duration:1,ease:"easeIn"}}

        className='text-black font-bold lg:text-5xl text-2xl h-15 place-content-center text-center'>
            Next-Gen Learning Starts Here
        </motion.div>
        <motion.div
        className='text-black text-sm md:text-xl text-center'>Interactive lessons, mock tests, and personalized guidance for every student.</motion.div>
        </motion.div>
    </div>
  )
}

export default Hero