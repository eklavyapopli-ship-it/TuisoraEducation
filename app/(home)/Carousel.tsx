"use client"
import AutoScroll from 'embla-carousel-auto-scroll'
import { Card, CardContent } from "@/components/ui/card"
import { Josefin_Sans } from 'next/font/google'
import { CircleCheckBig } from 'lucide-react';

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
        AutoScroll({
         direction:"forward",
         speed:0.5,
         stopOnMouseEnter:true,
         stopOnInteraction:false
        }),
        
      ]}
     className=" max-w-7xl mx-auto ">
      <CarouselContent className=" py-10">
    {
    CarouselObjects.map((item)=>
    (
       <CarouselItem key={item.id} className={`md:basis-1/2 lg:basis-1/4 ${josefin.className} `}>
        
            <div className="p-1">
              <Card>
                <CardContent className="flex p-1 place-content-center place-items-center aspect-square">
                  <div className="flex flex-col w-full md:p-0 flex-1 place-items-center md:space-y-5 place-content-center">
                    <div className="flex flex-col place-items-center">
                  <div className="text-2xl font-semibold"><item.icon className="h-10 w-10 text-blue-600"/></div>
                  <div>{item.heading}</div></div>
                  <div className=" space-y-2 flex flex-col flex-1 w-fit">{item.Points.map((point)=>(
                    <div key={point.PointId} className="flex place-items-center lg:text-md text-sm"><CircleCheckBig className="h-3 text-blue-600"/> &ensp;{point.MainPoint}</div>
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
