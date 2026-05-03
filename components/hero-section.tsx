import { Mail, MapPin, Phone, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Andrew Eliezer
            <span className="block text-primary">Tarigan</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
          Software Engineer & Cloud Engineer
        </p>
        
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          A Software Engineer with a strong foundation in web development and cloud computing. 
          Experienced in building applications and understanding end-to-end system development, 
          from design to deployment. Adaptable, quick to learn, and able to collaborate 
          effectively in dynamic team environments.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Yogyakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <a href="https://wa.me/+6282246274577">+62 822-4627-4577</a>
          </div>
          <a 
            href="mailto:andrewetarigan@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>andrewetarigan@gmail.com</span>
          </a>
          <a 
            href="https://linkedin.com/in/andrewelitar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4 text-primary" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="mt-12">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View My Experience
          </a>
        </div>
      </div>
    </section>
  )
}
