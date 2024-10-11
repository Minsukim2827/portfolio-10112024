
import { Link } from 'react-router-dom'
import { Github, Linkedin, Code2 } from 'lucide-react'

export default function Intro() {
  return (
    (<div
      className="min-h-[calc(95vh-var(--navbar-height))] bg-background text-foreground flex flex-col md:flex-row items-center justify-center p-8 border border-black">
      <div className="md:w-1/2 space-y-6 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold">Kia ora, I&apos;m Minsu</h1>
        <h2 className="text-2xl font-semibold">I&apos;m a Software Developer</h2>
        <p className="text-lg">Final year Software Development Major at AUT</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode">
            <Code2 className="w-6 h-6" />
          </a>
        </div>
        <Link
          to="./resume.pdf"
          className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
          View Resume
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="./avatar.png"
          alt="Minsu"
          className="rounded-full w-64 h-64 object-cover border-4 border-primary" />
      </div>
    </div>)
  );
}