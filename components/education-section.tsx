import { GraduationCap, Users } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Education</h2>
        </div>

        <div className="p-8 rounded-lg bg-card/60 backdrop-blur-md border border-border/40">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground">Universitas Mikroskil</h3>
              <p className="text-muted-foreground">Medan, North Sumatra</p>
              <div className="mt-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className="text-primary font-medium">{"Bachelor's degree in Computer Science"}</span>
                <span className="text-muted-foreground text-sm">GPA 3.81</span>
                <span className="text-muted-foreground text-sm">2020 - 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Organizations */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-accent" />
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider">Organizations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-card/60 backdrop-blur-md border border-border/40 hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Google Developer Student Club</h4>
                  <p className="text-accent text-sm font-medium">Co-Lead</p>
                  <p className="text-muted-foreground text-sm mt-1">2023 - 2024</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card/60 backdrop-blur-md border border-border/40 hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">BITSMIKRO</h4>
                  <p className="text-accent text-sm font-medium">Human Resource Division Staff</p>
                  <p className="text-muted-foreground text-sm mt-1">2022 - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
