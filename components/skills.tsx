import { Code, Wrench, Users, Lightbulb } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code size={24} />,
      color: "teal",
      skills: [
        { name: "Python", level: 85 },
        { name: "C/C++", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "HTML/CSS", level: 80 },
        { name: "MATLAB", level: 65 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      color: "orange",
      skills: [
        { name: "Arduino", level: 80 },
        { name: "AutoCAD", level: 70 },
        { name: "Figma", level: 75 },
        { name: "Git/GitHub", level: 85 },
        { name: "Linux", level: 60 },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} />,
      color: "navy",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Project Management", level: 75 },
        { name: "Critical Thinking", level: 88 },
      ],
    },
    {
      title: "Learning",
      icon: <Lightbulb size={24} />,
      color: "purple",
      skills: [
        { name: "Machine Learning", level: 40 },
        { name: "React/Next.js", level: 50 },
        { name: "Embedded Systems", level: 45 },
        { name: "Data Structures", level: 60 },
        { name: "Algorithms", level: 55 },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      teal: "bg-teal-500 border-teal-200",
      orange: "bg-orange-500 border-orange-200",
      navy: "bg-navy-600 border-navy-200",
      purple: "bg-purple-500 border-purple-200",
    }
    return colors[color as keyof typeof colors] || colors.teal
  }

  const getProgressColor = (color: string) => {
    const colors = {
      teal: "bg-teal-500",
      orange: "bg-orange-500",
      navy: "bg-navy-600",
      purple: "bg-purple-500",
    }
    return colors[color as keyof typeof colors] || colors.teal
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A growing toolkit of technical and soft skills, with a focus on continuous learning and improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex p-3 rounded-full text-white mb-4 ${getColorClasses(category.color)}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-6">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(category.color)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
