import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Cloud Engineer Apprentice",
    company: "Elite Academy",
    period: "Mar 2023 - Aug 2023",
    highlights: [
      "Provisioned Amazon EC2 instances with custom configurations and secure access",
      "Configured Amazon S3 for object storage, static website hosting, and lifecycle rules",
      "Implemented relational and NoSQL data layers using Amazon RDS and DynamoDB",
      "Built isolated network environments using Amazon VPC with public/private subnets",
      "Implemented elasticity and monitoring using Auto Scaling Groups and CloudWatch",
    ],
  },
  {
    title: "Cloud Computing Cohort",
    company: "Bangkit by Google",
    period: "Feb 2023 - Jul 2023",
    highlights: [
      "Developed backend services using Node.js with modular structure and RESTful API design",
      "Deployed and tested applications in GCP environments through hands-on lab scenarios",
      "Applied stateless service design and horizontal scalability principles",
      "Configured IAM roles and permissions for controlled access to cloud resources",
      "Completed Google Cloud Skills Boost labs simulating real-world tasks",
    ],
  },
  {
    title: "Web Developer",
    company: "PT. Mega Inovasi Jayatama",
    period: "Apr 2022 - Nov 2022",
    highlights: [
      "Implemented Laravel MVC architecture with routing, controllers, and Blade templating",
      "Built responsive UI using Tailwind CSS with utility-first styling",
      "Managed development environment using Laravel Sail (Docker)",
      "Implemented CRUD operations and server-side validation",
      "Integrated frontend and backend via RESTful routes",
    ],
  },
]

const volunteer = {
  title: "IT Development",
  company: "BITSMIKRO - PHP2D",
  period: "Apr 2022 - Nov 2022",
  highlights: [
    "Designed and deployed an e-commerce platform using WordPress with WooCommerce",
    "Configured WooCommerce modules including product catalog, pricing, and inventory",
    "Deployed and managed the application on Hostinger hosting",
    "Implemented responsive design for mobile accessibility",
    "Facilitated transition from offline to online sales for local fishermen",
  ],
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group relative pl-8 border-l border-border hover:border-primary transition-colors"
            >
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-secondary group-hover:bg-primary transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Volunteer Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-[2px] bg-accent" />
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider">Volunteer</h2>
          </div>

          <div className="group relative pl-8 border-l border-border hover:border-accent transition-colors">
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-secondary group-hover:bg-accent transition-colors" />
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{volunteer.title}</h3>
                <p className="text-accent font-medium">{volunteer.company}</p>
              </div>
              <span className="text-sm text-muted-foreground mt-1 md:mt-0">{volunteer.period}</span>
            </div>

            <ul className="space-y-2">
              {volunteer.highlights.map((highlight, i) => (
                <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-accent mt-1.5 shrink-0">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
