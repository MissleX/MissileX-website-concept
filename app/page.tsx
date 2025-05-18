import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Shield, Rocket, Radar, Wrench, FileCode, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Bangladesh's Premier Aerospace & Defense Organization
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              MissileX is dedicated to elevating Bangladesh's defense capabilities through innovation, research, and
              development of cutting-edge aerospace and defense technologies.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#mission">
                <Button variant="default" className="gap-1">
                  Our Mission <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#projects">
                <Button variant="outline" className="gap-1">
                  View Projects <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="mission" className="container py-12 md:py-24 lg:py-32 bg-slate-950">
          <div className="mx-auto grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-900 px-3 py-1 text-sm">Our Mission</div>
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white">
                Advancing Defense Capabilities 10 Ranks Ahead
              </h2>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-2">
                  <Shield className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Sovereign Defense Solutions:</strong> Developing self-reliant defense
                    technologies to reduce dependency on foreign imports.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Technological Innovation:</strong> Pioneering advanced aerospace and
                    defense technologies through continuous research.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Radar className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Emergency Response:</strong> Creating rapid solutions to emerging air
                    defense threats and national security challenges.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Global Standards:</strong> Implementing international best practices
                    in aerospace and defense manufacturing.
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="MissileX Mission"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Current Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore our cutting-edge research and development initiatives aimed at strengthening national defense.
            </p>
          </div>

          <ProjectShowcase />
        </section>

        <section id="capabilities" className="container py-12 md:py-24 lg:py-32 bg-slate-950">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white">
              Core Capabilities
            </h2>
            <p className="max-w-[85%] leading-normal text-white/80 sm:text-lg sm:leading-7">
              MissileX offers comprehensive solutions across the aerospace and defense spectrum.
            </p>
          </div>

          <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-12">
            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardHeader>
                <Rocket className="h-12 w-12 text-red-500 mb-2" />
                <CardTitle>UAVs & Drones</CardTitle>
                <CardDescription className="text-white/70">
                  Advanced unmanned aerial systems for surveillance and defense
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Development of tactical and strategic UAVs with advanced payload capabilities, long endurance, and
                  secure communications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardHeader>
                <Radar className="h-12 w-12 text-red-500 mb-2" />
                <CardTitle>Radar & Electronic Warfare</CardTitle>
                <CardDescription className="text-white/70">
                  Signal intelligence and jamming technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Cutting-edge radar jamming systems, electronic countermeasures, and signal intelligence platforms for
                  tactical advantage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-500 mb-2" />
                <CardTitle>Air Defense Systems</CardTitle>
                <CardDescription className="text-white/70">
                  Comprehensive air space protection solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Integrated air defense networks combining detection, tracking, and neutralization capabilities for
                  multi-layered protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardHeader>
                <FileCode className="h-12 w-12 text-red-500 mb-2" />
                <CardTitle>Missile Simulation</CardTitle>
                <CardDescription className="text-white/70">Advanced modeling and research</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  State-of-the-art simulation environments for missile trajectory analysis, propulsion research, and
                  guidance system development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardHeader>
                <Wrench className="h-12 w-12 text-red-500 mb-2" />
                <CardTitle>MRO Services</CardTitle>
                <CardDescription className="text-white/70">Maintenance, Repair & Overhaul</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Comprehensive maintenance and repair services for existing aircraft and defense systems to extend
                  operational lifespan.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardHeader>
                <Globe className="h-12 w-12 text-red-500 mb-2" />
                <CardTitle>Reverse Engineering</CardTitle>
                <CardDescription className="text-white/70">Parts and subsystems analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Detailed studies and replication of critical aerospace components to develop domestic manufacturing
                  capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="technology" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Advanced Technology</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore our technological innovations that are redefining aerospace and defense capabilities.
            </p>
          </div>

          <Tabs defaultValue="drones" className="mt-12 max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="drones">UAV Systems</TabsTrigger>
              <TabsTrigger value="radar">Radar Tech</TabsTrigger>
              <TabsTrigger value="defense">Air Defense</TabsTrigger>
              <TabsTrigger value="simulation">Simulation</TabsTrigger>
            </TabsList>
            <TabsContent value="drones" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Advanced UAV Systems"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Next-Generation UAV Systems</h3>
                  <p>
                    Our unmanned aerial vehicles incorporate advanced composite materials, secure communication links,
                    and autonomous navigation capabilities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Long-endurance flight capabilities (24+ hours)
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Multi-sensor payload integration
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Encrypted communication systems
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      AI-enhanced target recognition
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="radar" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Radar Jamming Technology"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Advanced Radar & Jamming Systems</h3>
                  <p>
                    Our electronic warfare solutions provide comprehensive protection against hostile radar systems and
                    enable tactical advantage in contested environments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Broadband jamming capabilities
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Adaptive frequency response
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Low probability of intercept radar
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Advanced signal processing algorithms
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="defense" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Air Defense Systems"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Integrated Air Defense Solutions</h3>
                  <p>
                    Our multi-layered air defense systems combine detection, tracking, and neutralization capabilities
                    to protect critical infrastructure and airspace.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Multi-band radar integration
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Automated threat assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Scalable deployment configurations
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Rapid response engagement systems
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="simulation" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Missile Simulation"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Advanced Simulation Environments</h3>
                  <p>
                    Our simulation technologies enable comprehensive testing and development of missile systems without
                    the costs and risks of physical testing.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      High-fidelity physics modeling
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Propulsion system optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Guidance algorithm development
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-red-500" />
                      Environmental condition testing
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
