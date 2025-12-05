"use client"
import { MaterialCards } from "@/components/lib/StudyMat"
import { Josefin_Sans } from 'next/font/google'
const josefin = Josefin_Sans({
    subsets: ['latin'],
  })
const StudyMaterial = () => {
const card = MaterialCards;
  return (
    <section className={`${josefin.className} h-[80vh]`}>
      <div className="text-center text-black text-4xl lg:text-6xl font-bold">STUDY <span className="text-blue-600">MATERIAL</span></div>
      <div className="w-full h-fit flex flex-col place-items-center">
        <div className="place-items-center md:grid md:grid-cols-4 flex flex-col gap-x-25 gap-y-20 m-20">
        {card.map((item)=>(
          <div key={item.id} style={{background:item.color}} className="h-80 w-60 relative shadow-sm rounded-2xl">{}</div>
      ))}</div></div>
    </section>
  )
}

export default StudyMaterial