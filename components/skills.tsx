import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Languages, Code, Wrench, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Languages,
      title: "Languages",
      skills: [
        { name: "Spanish", level: "Native" },
        { name: "Chinese", level: "HSK6" },
        { name: "English", level: "Fluent" },
        { name: "French", level: "Conversational" },
      ],
    },
    {
      icon: Code,
      title: "Engineering Software",
      skills: [{ name: "CAD" }, { name: "Abaqus" }, { name: "OpenFOAM" }, { name: "Avizo" }],
    },
    {
      icon: Wrench,
      title: "Translation Tools",
      skills: [{ name: "MemoQ" }, { name: "SDL Trados" }, { name: "Microsoft Office Suite" }],
    },
    {
      icon: Users,
      title: "Core Competencies",
      skills: [
        { name: "Client Communication" },
        { name: "Public Speaking" },
        { name: "Teamwork" },
        { name: "Problem-Solving" },
        { name: "Critical Thinking" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive skill set combining technical, linguistic, and interpersonal capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {skill.name}
                        {skill.level && <span className="ml-1 text-xs text-accent">• {skill.level}</span>}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-accent/5 border-accent/20">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Interests & Activities</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Active in running, reading, and public speaking through Toastmasters. Regular volunteer at community
                events, demonstrating commitment to social engagement and continuous personal development.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
