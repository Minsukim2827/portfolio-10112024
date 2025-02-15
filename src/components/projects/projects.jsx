
import { Github, ExternalLink, BookOpen, Code, Database, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from './_components/projects';
import FadeInWrapper from "@/components/FadeInWrapper";

export default function Projects() {
  return (
    <FadeInWrapper>
      <div className="min-h-screen text-white p-8 md:py-24">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-zinc-900 shadow-md hover:shadow-xl transition-shadow duration-300 border-none">
              <CardHeader>
                <CardTitle className="text-red-500">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-48 object-cover rounded-md mb-4 project-image"
                />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-gray-800 bg-red-200 flex items-center">
                      {getTechIcon(tech)}
                      <span className="ml-1">{tech}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.github && (
                  <Button variant="outline" className="project-button text-red-500 border-red-500 hover:bg-red-500 hover:text-white">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                )}
                {project.website && (
                  <Button variant="outline" className="project-button text-red-500 border-red-500 hover:bg-red-500 hover:text-white">
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Visit Site</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </FadeInWrapper>
  );
}

function getTechIcon(tech) {
  switch (tech.toLowerCase()) {
    case 'reactjs':
    case 'nextjs':
    case 'typescript':
      return <Code className="h-4 w-4 text-red-500" />;
    case 'postgresql':
    case 'supabase':
      return <Database className="h-4 w-4 text-red-500" />;
    case 'heroku postgresql':
    case 'google books api':
    case 'openai api':
      return <Cloud className="h-4 w-4 text-red-500" />;
    default:
      return <BookOpen className="h-4 w-4 text-red-500" />;
  }
}
