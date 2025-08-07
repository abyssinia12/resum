import { useState, useEffect } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    { number: "10+", label: "Happy Clients", icon: "👥" },
    { number: "10+", label: "Projects Fixed", icon: "🔧" },
    { number: "5+", label: "Weekly Users", icon: "👤" },
    { number: "2+", label: "Years Experience", icon: "⭐" },
  ];

  const skills = [
    {
      name: "Frontend Development",
      level: 90,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend Development",
      level: 85,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Database Design",
      level: 80,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "DevOps & Deployment",
      level: 75,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-indigo-600 uppercase text-sm font-semibold tracking-wider mb-4">
            About Me
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            I'm a passionate full-stack developer who loves creating innovative
            solutions and turning ideas into reality through clean, efficient
            code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Main image */}
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/first.png"
                  alt="Abyssinia Solomon - Full Stack Developer"
                  className="w-full h-auto rounded-xl border-4 border-white"
                />

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I specialize in modern web development using cutting-edge
                technologies like React, Node.js, Supabase, and Tailwind CSS.
                With over 2 years of experience, I've helped numerous clients
                bring their digital visions to life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My approach combines technical expertise with creative
                problem-solving, ensuring that every project not only meets but
                exceeds expectations. I believe in writing clean, maintainable
                code that scales with your business needs.
              </p>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.label}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-indigo-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{exp.icon}</span>
                    <div>
                      <p className="text-2xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                        {exp.number}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {exp.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Technical Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 200}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
