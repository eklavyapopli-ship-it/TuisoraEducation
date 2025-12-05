"use client"
import { MaterialCards } from "@/components/lib/StudyMat"
import { Josefin_Sans } from 'next/font/google'
import { motion } from "framer-motion"
const josefin = Josefin_Sans({
  subsets: ['latin'],
})
const StudyMaterial = () => {
  const card = MaterialCards;
  return (
    <section className={`${josefin.className} mt-20`}>
      <motion.div
      style={{overflow:"hidden"}}
      initial={{y:-40,opacity:0}}
      animate={{y:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,ease:"easeInOut"}}
      className="text-center text-black text-4xl lg:text-6xl font-bold">STUDY <span className="text-blue-600">MATERIAL</span></motion.div>
      <div className="w-full h-fit flex flex-col place-items-center mt-20 md:mt-0">
        <div className="place-items-center md:grid lg:grid-cols-4 md:grid-cols-3 flex flex-col gap-x-25 gap-y-20 md:m-20">
          {card.map((item) => (
            <motion.div
            style={{overflow:"hidden",background:item.color}}
      initial={{y:-40,opacity:0}}
      animate={{y:0}}
      whileInView={{opacity:1}}
      whileHover={{scale:1.03}}
      transition={{duration:0.2,ease:"easeInOut"}}
            key={item.id} className="h-80 w-60 relative shadow-sm flex flex-col place-items-center text-black font-bold text-md pt-10 rounded-2xl">
              <div>{item.heading}</div>
              <div className="text-md font-medium text-gray-800">{item.subHead}</div>

            </motion.div>
          ))}</div></div>
    </section>
  )
}

export default StudyMaterial