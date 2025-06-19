"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always excited to connect with fellow engineers, potential collaborators, or anyone interested in
            discussing technology and innovation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-8">Let's Connect</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-500 p-3 rounded-full">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Email</h4>
                    <p className="text-gray-600">alex.chen@student.mit.edu</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Location</h4>
                    <p className="text-gray-600">Cambridge, MA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-navy-600 p-3 rounded-full">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Phone</h4>
                    <p className="text-gray-600">Available upon request</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-navy-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>MIT Campus Location</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-all duration-200 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
