"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Unsplash image: https://unsplash.com/photos/an-aerial-view-of-a-lush-green-rice-field-9lh7H8AW39k
  // Use the official download endpoint which 302 redirects to the image CDN
  const heroBgUrl =
    "https://unsplash.com/photos/9lh7H8AW39k/download?force=true&w=2400"

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Background image layer */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBgUrl})`,
          filter: "grayscale(10%) saturate(60%) brightness(0.6)",
        }}
      />
      {/* Contrast overlay (light/dark aware) */}
      <div className="pointer-events-none absolute inset-0 bg-white/60 dark:bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground text-balance">
              Obama Nzang
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light">Multilingual Engineer & Translator</p>
          </div>

          <p className="text-lg sm:text-xl text-foreground/90 max-w-2xl leading-relaxed">
            Civil engineering graduate student, Spanish translator, and educator bridging technical expertise with
            linguistic versatility across international markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Shanghai, China</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+86 136 4166 0326</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>zacndong21@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" onClick={scrollToContact} className="text-base">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

