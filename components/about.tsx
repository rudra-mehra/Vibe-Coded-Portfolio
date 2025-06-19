import { GraduationCap, Target, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a first-year Computer Engineering student at MIT with an insatiable curiosity for how technology can
                solve real-world problems. My journey into engineering began in high school when I built my first
                Arduino robot, and I haven't looked back since.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When I'm not coding or studying, you'll find me tinkering with electronics, participating in hackathons,
                or exploring the latest developments in AI and sustainable technology. I believe that engineering is not
                just about building things—it's about building a better future.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                <p className="text-teal-800 font-medium italic">
                  "The best way to predict the future is to invent it." - Alan Kay
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="bg-teal-500 p-3 rounded-full">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Education</h3>
                  <p className="text-gray-700">
                    B.S. Computer Engineering
                    <br />
                    Massachusetts Institute of Technology
                    <br />
                    Class of 2028
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Goals</h3>
                  <p className="text-gray-700">
                    Develop AI-powered solutions for environmental challenges and contribute to sustainable technology
                    innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="bg-navy-600 p-3 rounded-full">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Interests</h3>
                  <p className="text-gray-700">
                    Robotics, Machine Learning, IoT, Renewable Energy Systems, and Human-Computer Interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
