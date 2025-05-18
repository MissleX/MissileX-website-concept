import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function ProjectShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
      <Card>
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="MX-1 Surveillance Drone"
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-red-600 hover:bg-red-700">UAV</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">MX-1 Surveillance Drone</CardTitle>
          <CardDescription>
            Long-endurance tactical UAV with advanced sensor suite for border surveillance and reconnaissance missions.
          </CardDescription>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" size="sm" className="gap-1">
            Learn More <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Spectrum Shield Jammer"
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-red-600 hover:bg-red-700">Electronic Warfare</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">Spectrum Shield Jammer</CardTitle>
          <CardDescription>
            Advanced radar jamming system capable of disrupting multiple frequency bands simultaneously.
          </CardDescription>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" size="sm" className="gap-1">
            Learn More <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Sentinel Air Defense System"
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-red-600 hover:bg-red-700">Air Defense</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">Sentinel Air Defense System</CardTitle>
          <CardDescription>
            Integrated network of sensors and interceptors for comprehensive airspace protection.
          </CardDescription>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" size="sm" className="gap-1">
            Learn More <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="TrajectSim Missile Simulator"
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-red-600 hover:bg-red-700">Simulation</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">TrajectSim Missile Simulator</CardTitle>
          <CardDescription>
            High-fidelity simulation environment for missile trajectory analysis and guidance system development.
          </CardDescription>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" size="sm" className="gap-1">
            Learn More <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="AeroMRO Service Center"
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-red-600 hover:bg-red-700">MRO</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">AeroMRO Service Center</CardTitle>
          <CardDescription>
            Comprehensive maintenance, repair, and overhaul services for military and civilian aircraft.
          </CardDescription>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" size="sm" className="gap-1">
            Learn More <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Component Reverse Engineering Lab"
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-red-600 hover:bg-red-700">R&D</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">Component Reverse Engineering Lab</CardTitle>
          <CardDescription>
            Advanced facility for analyzing and replicating critical aerospace and defense components.
          </CardDescription>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" size="sm" className="gap-1">
            Learn More <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
