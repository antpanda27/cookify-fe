import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const HeroCarousel = () => {
  return (
    <Carousel className="w-full my-10">
      <CarouselContent className="-ml-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-10 md:basis-8/9 lg:basis-8/9">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-2/1 items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default HeroCarousel
