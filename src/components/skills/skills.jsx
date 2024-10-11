import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { skills } from "./_components/skills"
import { skillIcons } from "./_components/skillIcons"


function SkillCarousel({ title, items }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  
    return (
      <div className="w-full mb-8">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((skill, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 "
              >
                <Card className="h-full bg-neutral-950">
                  <CardContent className="flex flex-col items-center justify-center p-4 ">
                  <img
  src={skillIcons[skill] || "/icons/default.svg"}
  width={48}
  height={48}
  alt={skill}
  className="mb-2 transform transition-transform duration-200 hover:scale-110"
/>

                    <span className="text-xs sm:text-sm font-medium text-center text-white">{skill}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-neutral-950 text-red-500 border-red-500"/>
          <CarouselNext className="bg-neutral-950 text-red-500 border-red-500"/>
        </Carousel>
      </div>
    )
  }
  

  export default function Skills() {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white font-bold text-center mb-8">My Skills</h2>
          <div className="space-y-8">
            <SkillCarousel title="Languages" items={skills.languages} />
            <SkillCarousel title="Frameworks / Dev Tools" items={skills.frameworks} />
          </div>
        </div>
      </section>
    )
  }