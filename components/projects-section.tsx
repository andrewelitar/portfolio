"use client"

import {
  Cloud,
  Globe,
  Database,
  Server,
  Smartphone,
  ShoppingCart,
  Bot,
  BarChart3,
  ExternalLink,
  Github,
  Code2,
  Layers,
  Cpu,
  Lock,
  Palette,
  Rocket,
  Terminal,
  Workflow
} from "lucide-react"
import Image from "next/image"


interface Project {
  id: number
  title: string
  description: string
  icon: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "LiQuiz",
    description: "AI-Powered Practice Question Generator - Turn your study materials, including PDF files, into a dynamic and interactive learning experience with our AI-powered question generator.",
    icon: "/liquiz.png",
    technologies: ["React", "Next", "LangChain", "OpenAI", "Google Cloud PLatform"],
    liveUrl: "https://liquiz.app",
    githubUrl: "https://github.com/edwintantawi/liquiz",
    featured: false,
  },
  {
    id: 2,
    title: "Swalokal",
    description: "An app using object detection scans products, shows their locations with maps, helping users find items fast while boosting visibility for small businesses.",
    icon: "/swalokal.png",
    technologies: ["Kotlin", "FastAPI", "SQLite", "TensorFlow", "Google Cloud Platform"],
    githubUrl: "https://github.com/swalokal/swalokal",
    featured: false,
  },
  {
    id: 3,
    title: "Toko Kampung Nelayan",
    description: "Toko Nelayan, from Kampung Nelayan Belawan, is an e-commerce platform offering fish-based snacks and fresh seafood..",
    icon: "olahankampungnelayan.jpg",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    liveUrl: "http://olahankampungnelayan.com/",
    featured: false,
  },
]

function ProjectCard({ project }: { project: Project }) {

  return (
    <div
      className={`group relative bg-card/60 backdrop-blur-md rounded-xl p-6 border border-border/40 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${project.featured ? "md:col-span-1" : ""
        }`}
    >
      {project.featured && (
        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
          Featured
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Image width = {24} height = {24} src = {project.icon} alt = "" className="w-6 h-6 object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Source</span>
          </a>
        )}
        {!project.liveUrl && !project.githubUrl && (
          <span className="text-sm text-muted-foreground/60">Private Project</span>
        )}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
                 </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
