import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-950 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Advancing Bangladesh's Aerospace & Defense Capabilities
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                MissileX is Bangladesh's first private Aerospace & Defense organization, dedicated to developing
                cutting-edge technologies for national security.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#projects">
                <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white gap-1">
                  Explore Our Projects <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 gap-1">
                  Partner With Us <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20"></div>
    </section>
  )
}
