import { Card } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "M.Sc. Civil and Hydraulic Engineering",
      institution: "Tongji University",
      location: "Shanghai, China",
      period: "2023 – 2026",
      status: "In Progress",
    },
    {
      degree: "B.Sc. Civil Engineering",
      institution: "Tongji University",
      location: "Shanghai, China",
      period: "2019 – 2023",
      status: "Completed",
    },
    {
      degree: "Chinese Language Program",
      institution: "Tongji University",
      location: "Shanghai, China",
      period: "2018 – 2019",
      status: "Non-degree",
    },
    {
      degree: "B.Sc. Agricultural Engineering",
      institution: "National University of Equatorial Guinea",
      location: "Malabo, Equatorial Guinea",
      period: "2013 – 2016",
      status: "Completed",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Education</h2>
            <p className="text-lg text-muted-foreground">
              Academic foundation spanning engineering disciplines and language studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold text-foreground leading-tight">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="text-xs font-medium text-accent">{edu.status}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
