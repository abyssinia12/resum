import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const skills = ["React", "Node.js", "TypeScript", "MongoDB", "Aws"];

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-20 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Greeting */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-600 animate-pulse">
                👋 Hello, I'm
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Abyssinia Solomon
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 text-lg">
                  Available for new opportunities
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Full-stack developer from Ethiopia with a passion for creating
              beautiful, functional, and user-centric digital experiences. I
              love turning complex problems into simple, elegant solutions.
            </p>

            {/* Skills */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Technologies I work with:
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 hover:border-indigo-300 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-indigo-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <p className="text-2xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                      {stat.number}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#projects"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold text-center hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full p-3 w-80 h-80 overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/first.png"
                  alt="Abyssinia Solomon - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>

                <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-3 shadow-lg">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>

              {/* Title below image */}
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Full-Stack Developer
                </h3>
                <p className="text-gray-600 mt-1">
                  Crafting digital experiences with passion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
