"use client"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import { Josefin_Sans } from 'next/font/google'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselObjects } from "@/components/lib/CarouselObjects"
const josefin = Josefin_Sans({
  subsets: ['latin'],
})

export function CarouselDemo() {
  return (
    <Carousel
     plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
     className=" max-w-7xl mx-auto">
      <CarouselContent className="">
    {
    CarouselObjects.map((item)=>
    (
       <CarouselItem key={item.id} className={`md:basis-1/2 lg:basis-1/4 ${josefin.className}`}>
        
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square ">
                  <div className="flex flex-col w-full flex-1 place-items-center md:space-y-5  place-content-center">
                  <div className="text-2xl font-semibold"><item.icon className="h-10 w-10"/></div>
                  <div>{item.heading}</div>
                  <div className="space-y-2">{item.Points.map((point)=>(
                    <div key={point.PointId}>{point.MainPoint}</div>
                  ))}</div>
                  <div></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
 ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
