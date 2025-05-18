import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-slate-950 border-t border-slate-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-red-600" />
              <span className="font-bold text-white">MissileX</span>
            </Link>
            <p className="text-sm text-white/70 max-w-md">
              Bangladesh's premier private Aerospace & Defense organization, dedicated to advancing national security
              through innovation and technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#about" className="text-sm text-white/70 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#mission" className="text-sm text-white/70 hover:text-white">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link href="#leadership" className="text-sm text-white/70 hover:text-white">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-sm text-white/70 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Projects</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#uav" className="text-sm text-white/70 hover:text-white">
                    UAV Systems
                  </Link>
                </li>
                <li>
                  <Link href="#radar" className="text-sm text-white/70 hover:text-white">
                    Radar Technology
                  </Link>
                </li>
                <li>
                  <Link href="#defense" className="text-sm text-white/70 hover:text-white">
                    Air Defense
                  </Link>
                </li>
                <li>
                  <Link href="#mro" className="text-sm text-white/70 hover:text-white">
                    MRO Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#privacy" className="text-sm text-white/70 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-sm text-white/70 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#compliance" className="text-sm text-white/70 hover:text-white">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-white/70">&copy; {new Date().getFullYear()} MissileX. All rights reserved.</p>
          <p className="text-xs text-white/70 mt-4 sm:mt-0">Advancing Bangladesh's Aerospace & Defense Capabilities</p>
        </div>
      </div>
    </footer>
  )
}
