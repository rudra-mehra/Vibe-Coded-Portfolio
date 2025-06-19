import { Github, Linkedin, Download, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Alex Chen Profile"
                width={300}
                height={300}
                className="rounded-full border-4 border-teal-400 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-teal-400">Alex Chen</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              First-Year Engineering Student | Passionate About Innovation & Technology
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl">
              Currently pursuing Computer Engineering at MIT, with a focus on robotics, AI, and sustainable technology
              solutions. Always eager to learn and build something amazing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Download size={20} />
                Download Resume
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                <Mail size={20} />
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
