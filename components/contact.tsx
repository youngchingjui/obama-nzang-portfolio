"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zacndong21@gmail.com",
      href: "mailto:zacndong21@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone / WeChat",
      value: "+86 136 4166 0326",
      href: "tel:+8613641660326",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Shanghai, China",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or projects. Feel free to reach out
              through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-3 text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-foreground hover:text-accent transition-colors block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MessageSquare className="h-5 w-5" />
                  <h3 className="text-xl font-semibold">Ready to collaborate?</h3>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Let's discuss how my multilingual expertise and technical skills can benefit your organization.
                </p>
              </div>
              <Button size="lg" variant="secondary" asChild className="flex-shrink-0">
                <a href="mailto:zacndong21@gmail.com">Send Message</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Obama Nzang. All rights reserved.</p>
      </footer>
    </section>
  )
}
