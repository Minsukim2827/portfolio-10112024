import * as React from "react"
import Image from "next/image"
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

const skills = {
  languages: [
    "Java", "Python", "C", "C#", "SQL", "JavaScript", "TypeScript", "HTML/CSS", "R", "Bash"
  ],
  frameworks: [
    "Git", "React", "Node.js", "Express.js", "JEST", "JUnit", "AWS", "Azure", "Google Firebase",
    "Linux", "TailwindCSS", "Pandas", "Matplotlib", "Flask", "Heroku"
  ]
}

function SkillCarousel({
  title,
  items
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    (<div className="w-full mb-8">
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
        className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((skill, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Image
                    src={`/placeholder.svg?height=48&width=48`}
                    width={48}
                    height={48}
                    alt={skill}
                    className="mb-2" />
                  <span className="text-xs sm:text-sm font-medium text-center">{skill}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>)
  );
}

export function SkillsSectionComponent() {
  return (
    (<section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="space-y-8">
          <SkillCarousel title="Languages" items={skills.languages} />
          <SkillCarousel title="Frameworks / Dev Tools" items={skills.frameworks} />
        </div>
      </div>
    </section>)
  );
}