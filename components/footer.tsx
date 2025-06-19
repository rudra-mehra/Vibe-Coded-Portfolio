import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Alex Chen</h3>
            <p className="text-gray-300 leading-relaxed">
              First-year engineering student passionate about innovation, technology, and building solutions for a
              better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>alex.chen@student.mit.edu</p>
              <p>Cambridge, MA</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">© {currentYear} Alex Chen. All rights reserved.</p>
            <p className="text-gray-300 flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
