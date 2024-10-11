'use client'

import { Github, ExternalLink, BookOpen, Code, Database, Cloud } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI StoryTelling Platform",
    description: "An interactive platform leveraging AI to create dynamic storytelling experiences.",
    technologies: ["ReactJS", "TailwindCSS", "Python", "Flask", "OpenAI API", "Heroku PostgreSQL"],
    github: "https://github.com/Minsukim2827/Interactive-AI-Storytelling-Platform",
    website: null,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "PagePulse",
    description: "A dynamic web application for book enthusiasts to discover and track their reading journey.",
    technologies: ["TypeScript", "TailwindCSS", "NextJS", "PostgreSQL", "Google Books API"],
    github: "https://github.com/Minsukim2827/pagepulse",
    website: "https://pagepulse.netlify.app/",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "LinguaAI",
    description: "An AI-powered language learning platform for personalized language acquisition.",
    technologies: ["OpenAI API", "NextJS", "TypeScript", "shadcn", "Supabase"],
    github: null,
    website: null,
    image: "/placeholder.svg?height=200&width=400"
  }
]

export function ProjectsPageComponent() {
  return (
    (<div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {getTechIcon(tech)}
                    <span className="ml-1">{tech}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.website && (
                <Button variant="outline" asChild>
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Site
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>)
  );
}

function getTechIcon(tech) {
  switch (tech.toLowerCase()) {
    case 'reactjs':
    case 'nextjs':
    case 'typescript':
      return <Code className="h-4 w-4" />;
    case 'postgresql':
    case 'supabase':
      return <Database className="h-4 w-4" />;
    case 'heroku postgresql':
    case 'google books api':
    case 'openai api':
      return <Cloud className="h-4 w-4" />;
    default:
      return <BookOpen className="h-4 w-4" />;
  }
}