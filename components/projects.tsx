import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Smart Home Automation System",
      description:
        "Arduino-based IoT system for controlling lights, temperature, and security. Features mobile app integration and voice control capabilities.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["Arduino", "IoT", "Python", "Mobile App"],
      github: "#",
      demo: "#",
      date: "Dec 2024",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "Web application for tracking expenses and budgeting with data visualization. Built with modern web technologies and responsive design.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["JavaScript", "HTML/CSS", "Chart.js", "Local Storage"],
      github: "#",
      demo: "#",
      date: "Nov 2024",
    },
    {
      title: "Robotic Line Follower",
      description:
        "Autonomous robot that follows a predetermined path using sensors and machine learning algorithms for obstacle avoidance.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["C++", "Arduino", "Sensors", "Robotics"],
      github: "#",
      demo: null,
      date: "Oct 2024",
    },
    {
      title: "Weather Station Dashboard",
      description:
        "Real-time weather monitoring system with data logging and web-based dashboard for visualization and historical analysis.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["Python", "Raspberry Pi", "APIs", "Data Viz"],
      github: "#",
      demo: "#",
      date: "Sep 2024",
    },
    {
      title: "Study Buddy App Prototype",
      description:
        "Mobile app prototype designed in Figma for connecting students for collaborative learning and study sessions.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["Figma", "UI/UX", "Prototyping", "User Research"],
      github: null,
      demo: "#",
      date: "Aug 2024",
    },
    {
      title: "LED Matrix Display",
      description:
        "Programmable LED matrix display for showing custom animations, text, and real-time data from various sensors.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["Arduino", "C++", "Electronics", "LEDs"],
      github: "#",
      demo: null,
      date: "Jul 2024",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my learning journey and passion for engineering innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-lg hover:bg-navy-800 transition-colors duration-200 font-semibold"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
