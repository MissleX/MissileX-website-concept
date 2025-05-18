import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-sm text-red-600">Contact Us</div>
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white">
                Partner With MissileX
              </h2>
              <p className="max-w-[85%] leading-normal text-white/80 sm:text-lg sm:leading-7">
                Interested in collaborating with Bangladesh's premier aerospace and defense organization? Reach out to
                discuss partnership opportunities, technology licensing, or joint research initiatives.
              </p>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-white/80">contact@missilex.com.bd</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="text-white/80">+880 2 XXXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-medium text-white">Address</h3>
                  <p className="text-white/80">
                    MissileX Headquarters
                    <br />
                    Defense Technology Park
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
              <p className="text-sm text-white/80">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Organization"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Message"
                  className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
