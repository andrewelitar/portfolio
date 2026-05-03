import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Contact</h2>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {"Let's work together"}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {"I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and cloud computing."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href="mailto:andrewetarigan@gmail.com"
            className="group p-6 rounded-lg bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/50 transition-all hover:bg-card/80"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">andrewetarigan@gmail.com</p>
              </div>
            </div>
          </a>

          <a 
            href="https://wa.me/+6282246274577"
            className="group p-6 rounded-lg bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/50 transition-all hover:bg-card/80"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+62 822-4627-4577</p>
              </div>
            </div>
          </a>

          <a 
            href="https://linkedin.com/in/andrewelitar"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-lg bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/50 transition-all hover:bg-card/80"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground font-medium">linkedin.com/in/andrewelitar</p>
              </div>
            </div>
          </a>

          <div className="group p-6 rounded-lg bg-card/60 backdrop-blur-md border border-border/40">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Yogyakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
