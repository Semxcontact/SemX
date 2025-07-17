import React from 'react'
import heroImg from '../../assets/hero.png'
import factoryImg from '../../assets/factory.png'
// import other images as needed

const projects = [
  {
    title: "Sem factories production system",
    type: "System",
    demo: true,
    image: factoryImg,
    description: "Production management and analytics for factories.",
  },
  {
    title: "School Supplies Sales Application",
    type: "Mobile App",
    demo: true,
    image: heroImg,
    description: "Mobile app for school supplies sales and delivery.",
  },
  {
    title: "School Supplies Sales Application",
    type: "Mobile App",
    demo: true,
    image: heroImg,
    description: "Mobile app for school supplies sales and delivery.",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-950 py-16 px-4 min-h-screen">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800 flex flex-col">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-4 py-1 rounded-full text-sm font-semibold
                  ${project.type === 'System' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                  {project.type}
                </span>
                {project.demo && (
                  <span className="px-4 py-1 rounded-full text-sm font-semibold bg-red-500 text-white">
                    Demo
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
              <button className="mt-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}