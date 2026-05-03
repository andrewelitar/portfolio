const skillCategories = [
  {
    title: "Full-Stack Development",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL", "Python", "Golang", "Laravel"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "GCP", "Containerization", "Linux", "Bash Scripting"],
  },
  {
    title: "Networking",
    skills: ["IP Addressing", "Routing", "VPC", "Network Isolation", "Security Configuration"],
  },
  {
    title: "Tools & Technology",
    skills: ["Git", "VS Code", "Trello", "Jira", "Notion", "MS Office"],
  },
  {
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Problem Solving", "Technical Communication", "Adaptability", "Team Collaboration"],
  },
]

const certifications = [
  "AWS Certified Cloud Practitioner",
  "IELTS Band 6",
  "JFT-Basic (Score 222)",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-accent" />
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider">Certifications</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="px-5 py-3 rounded-lg bg-card/60 backdrop-blur-md border border-border/40 hover:border-accent/50 transition-colors"
              >
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
