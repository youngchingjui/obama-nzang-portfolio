import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Spanish Translator",
      company: "Sichuan Lan-Bridge Info Technology",
      location: "Remote, China",
      period: "2021 – 2025",
      type: "Part-time",
      responsibilities: [
        "Delivered accurate translations of business, legal, and technical documents",
        "Localized specialized content in mechanical engineering, renewable energy, and automotive sectors",
        "Performed real-time interpreting during negotiations, expos, and meetings",
      ],
    },
    {
      title: "Spanish Teacher",
      company: "Upfun Training Center",
      location: "Shanghai, China",
      period: "2023 – 2025",
      type: "Part-time",
      responsibilities: [
        "Designed and delivered Spanish language courses aligned with CEFR standards",
        "Provided DELE exam preparation and business Spanish training",
        "Developed tailored lessons for both native and non-native contexts",
      ],
    },
    {
      title: "Sales Associate",
      company: "Jiangchun Machinery Trading Co., Ltd",
      location: "Shanghai, China",
      period: "2022 – 2025",
      type: "Part-time",
      responsibilities: [
        "Promoted and sold heavy machinery across multiple markets",
        "Built new client relationships through Alibaba International and Google",
        "Negotiated contracts and managed customer inquiries and quotations",
      ],
    },
    {
      title: "Logistics Assistant",
      company: "China Global Co., Ltd",
      location: "Shanghai, China",
      period: "Summer 2022",
      type: "Internship",
      responsibilities: [
        "Coordinated with freight forwarders to reduce transportation costs",
        "Prepared import/export documentation and monitored shipment status",
        "Resolved logistics issues to maintain operational efficiency",
      ],
    },
    {
      title: "Spanish Game Instructor",
      company: "Yongtang Info Tech Co., Ltd",
      location: "Shanghai, China",
      period: "2020 – 2021",
      type: "Part-time",
      responsibilities: [
        "Executed end-to-end localization and linguistic quality assurance for Spanish-language interfaces",
        "Collaborated with product teams on user experience improvements",
      ],
    },
    {
      title: "Production Engineering Technician",
      company: "Terra Madre",
      location: "Malabo, Equatorial Guinea",
      period: "2016 – 2018",
      type: "Full-time",
      responsibilities: [
        "Prepared detailed technical reports and engineering documentation",
        "Assisted in design and supervision of irrigation networks and drainage systems",
        "Supported flood-control infrastructure projects",
      ],
    },
    {
      title: "High School Mathematics Teacher",
      company: "INES Bioko",
      location: "Malabo, Equatorial Guinea",
      period: "2014 – 2016",
      type: "Part-time",
      responsibilities: [
        "Delivered engaging mathematics instruction to senior secondary students",
        "Combined demonstrations, lesson plans, and interactive activities",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Experience</h2>
            <p className="text-lg text-muted-foreground">
              A diverse professional journey spanning engineering, translation, education, and international business.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Briefcase className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-base text-muted-foreground font-medium">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="self-start">
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pl-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground leading-relaxed list-disc">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
