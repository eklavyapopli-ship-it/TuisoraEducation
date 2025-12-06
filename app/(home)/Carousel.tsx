"use client"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  BrainCircuit,
  CalendarCheck,
  MessageCircle,
  BarChart3,
  FileCheck,
  BookOpen,
  BellRing,
  Users2,
  Fingerprint,
  Compass,
  Icon
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselObjects } from "@/components/lib/CarouselObjects"
export function CarouselDemo() {
  return (
    <Carousel
     plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
     className=" max-w-7xl mx-auto">
      <CarouselContent className="-ml-1">
    {
    CarouselObjects.map((item)=>(
       <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold"></span>
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
