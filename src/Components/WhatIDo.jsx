import { useState, useEffect } from "react";

export default function WhatIDo() {
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

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Full-Stack Development",
      description:
        "Build complete web applications from frontend to backend using modern technologies like React, Node.js, and databases.",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      features: [
        "React",
        "Node.js & Express",
        "Database Design",
        "API Development",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Create beautiful, intuitive, and responsive user interfaces that provide exceptional user experiences across all devices.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      features: [
        "Responsive Design",
        "User Research",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      title: "API Integration",
      description:
        "Seamlessly integrate third-party services and APIs like Supabase, Chapa, and other payment gateways into your applications.",
      icon: "🔗",
      color: "from-green-500 to-emerald-500",
      features: ["REST APIs", "GraphQL", "Authentication", "Payment Systems"],
    },
    {
      title: "DevOps & Deployment",
      description:
        "Deploy and maintain applications with modern DevOps practices, ensuring scalability, security, and performance.",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      features: [
        "CI/CD Pipelines",
        "Cloud Deployment",
        "Performance Optimization",
        "Security",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-indigo-600 uppercase text-sm font-semibold tracking-wider mb-4">
            Services
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            What I Do?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            I offer comprehensive web development services to help bring your
            digital ideas to life. From concept to deployment, I handle every
            aspect of your project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}
                      ></div>
                      <span className="text-xs text-gray-600 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect border */}
              <div
                className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${service.color} rounded-2xl transition-colors duration-300 pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality. I'm here to
              help you build something amazing that your users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
