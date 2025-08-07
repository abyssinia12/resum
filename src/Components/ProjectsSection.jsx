import { useState } from "react";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Travel Booking Website",
      description:
        "A comprehensive hotel, tour & car booking system built with modern web technologies. Features real-time availability, secure payments, and user management.",
      image: "/tour.PNG",
      link: "#",
      technologies: ["React", "Supabase", "Chapa", "Tailwind CSS"],
      category: "Full-Stack",
      github: "https://github.com/abyssinia12/graduation-project.git",
      live: "https://graduation-project-frontend.vercel.app/",
    },
    {
      title: "Kids Programming Site",
      description:
        "Interactive learning platform designed for children aged 7-13 to learn HTML, CSS, and JavaScript through gamified lessons and hands-on coding exercises.",
      image: "/kids1.JPG",
      link: "#",
      technologies: ["React", "Node.js", "Supabase"],
      category: "Educational",
      github: "https://github.com/abyssinia12/KidsLearn.git",
      live: "https://kids-learn.vercel.app/",
    },
    // {
    //   title: "This Portfolio",
    //   description:
    //     "Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance.",
    //   image: "/project3.png",
    //   link: "#",
    //   technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    //   category: "Frontend",
    //   github: "#",
    //   live: "#",
    // },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one represents a
            unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    title="View Code"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    title="Live Demo"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
