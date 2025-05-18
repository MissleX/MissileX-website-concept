"use client"

import * as React from "react"
import Link from "next/link"
import { Shield, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <div className="mr-4 hidden md:flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Shield className="h-6 w-6 text-red-600" />
          <span className="hidden font-bold sm:inline-block">MissileX</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-900 to-slate-700 p-6 no-underline outline-none focus:shadow-md"
                        href="#mission"
                      >
                        <Shield className="h-6 w-6 text-red-600" />
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Our Mission</div>
                        <p className="text-sm leading-tight text-white/80">
                          Advancing Bangladesh's defense capabilities through innovation and technology.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="#about" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Company Overview</NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="#leadership" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Leadership</NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="#history" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>History</NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Capabilities</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-900 to-slate-700 p-6 no-underline outline-none focus:shadow-md"
                        href="#projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">UAVs & Drones</div>
                        <p className="text-sm leading-tight text-white/80">
                          Advanced unmanned aerial systems for surveillance and defense.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-900 to-slate-700 p-6 no-underline outline-none focus:shadow-md"
                        href="#projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Radar & Electronic Warfare</div>
                        <p className="text-sm leading-tight text-white/80">
                          Signal intelligence and jamming technologies.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-900 to-slate-700 p-6 no-underline outline-none focus:shadow-md"
                        href="#projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Air Defense Systems</div>
                        <p className="text-sm leading-tight text-white/80">
                          Comprehensive air space protection solutions.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-900 to-slate-700 p-6 no-underline outline-none focus:shadow-md"
                        href="#projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">MRO Services</div>
                        <p className="text-sm leading-tight text-white/80">
                          Maintenance, repair, and overhaul for existing aircraft.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#technology" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Technology</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex md:hidden">
        <Link href="/" className="mr-auto flex items-center space-x-2">
          <Shield className="h-6 w-6 text-red-600" />
          <span className="font-bold">MissileX</span>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-red-600" />
                <span className="font-bold">MissileX</span>
              </Link>
              <div className="mt-8 flex w-full flex-col space-y-4">
                <Link
                  href="#about"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#mission"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Mission
                </Link>
                <Link
                  href="#projects"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#capabilities"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Capabilities
                </Link>
                <Link
                  href="#technology"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Technology
                </Link>
                <Link
                  href="#contact"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="default" className="hidden md:flex">
            <Link href="#contact">Partner With Us</Link>
          </Button>
        </nav>
      </div>
    </>
  )
}
