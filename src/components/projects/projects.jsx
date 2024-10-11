
import { Github, ExternalLink, BookOpen, Code, Database, Cloud } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from './_components/projects'
import FadeInWrapper from "@/components/FadeInWrapper";

export default function Projects() {
  return (
    <FadeInWrapper>
    (<div className="min-h-screen text-foreground p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col bg-black">
            <CardHeader>
              <CardTitle className="text-white">{project.title}</CardTitle>
              <CardDescription className="text-white">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="default" className="text-white bg-black">
                    {getTechIcon(tech)}
                    <span className="ml-1">{tech}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {project.github && (
                <Button variant="outline" asChild className="bg-black hover:bg-zinc-900">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 text-white " />
                    <span className="text-white">GitHub</span>
                  </a>
                </Button>
              )}
              {project.website && (
                <Button variant="outline" asChild className="bg-black hover:bg-zinc-900">
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 text-white" />
                    <span className="text-white">Visit Site</span>
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>)
    </FadeInWrapper>
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