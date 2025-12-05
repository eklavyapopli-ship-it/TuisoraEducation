"use client"
import { Josefin_Sans } from 'next/font/google'
import { OfferHeads } from '@/components/lib/headings'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
const josefin = Josefin_Sans({
  subsets: ['latin'],
})
const OfferCards = () => {
  return (
    <section className='w-screen h-[80vh]'>
      <motion.div
      style={{overflow:"hidden"}}
      initial={{y:-40,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:1,ease:"easeInOut"}}>
      <div
      className={`text-center lg:text-6xl text-4xl font-bold text-black ${josefin.className} `}>What We <span className='text-blue-600'>Offer</span></div>
      <div className='w-full h-fit flex justify-center lg:space-y-0 space-y-5  mt-15 lg:space-x-8 lg:mt-20 lg:flex-row flex-col lg:place-content-center place-items-center'>
        {OfferHeads.map((item)=>(
          <div className='flex flex-col lg:h-120 h-fit rounded-2xl border-blue-600 place-items-center border py-8 lg:w-100 w-80  px-15 space-y-5' key={item.id}>
            <span className='text-black font-bold'>{item.name}</span>
            <h1 className='font-bold text-black text-2xl'>HOME TUITION</h1>
            <div className='lg:mt-5  space-y-3'>
              {item.features.map((feature)=>(
                <div key={feature.featureId} className='space-y-1'>
                <div className='text-black font-bold lg:text-lg text-sm'>{feature.main}</div>
                <div className='text-gray-400 text-sm relative left-4'>{feature.sub}</div>
                </div>
              ))}
            </div>
            </div>
        ))}
      </div>
      </motion.div>
    </section>
  )
}

export default OfferCards