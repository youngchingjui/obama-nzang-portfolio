import { Card } from "@/components/ui/card"
import { Globe, Languages, Briefcase, GraduationCap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Languages,
      title: "Multilingual Professional",
      description: "Native Spanish speaker with HSK6 Chinese proficiency, fluent English, and French capabilities",
    },
    {
      icon: GraduationCap,
      title: "Engineering Background",
      description:
        "M.Sc. in Civil & Hydraulic Engineering from Tongji University, with expertise in CAD, Abaqus, and OpenFOAM",
    },
    {
      icon: Briefcase,
      title: "Diverse Experience",
      description:
        "Professional translator, educator, sales associate, and engineering technician across multiple industries",
    },
    {
      icon: Globe,
      title: "International Perspective",
      description: "Cross-cultural expertise spanning Equatorial Guinea, China, and global markets",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">About</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              I am a versatile professional combining technical engineering expertise with advanced linguistic
              capabilities. Currently pursuing my Master's degree in Civil and Hydraulic Engineering at Tongji
              University, I bring a unique blend of analytical problem-solving and cross-cultural communication skills
              to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
