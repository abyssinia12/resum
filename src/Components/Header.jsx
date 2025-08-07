import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                A
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Abyssinia
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/malad-resume.pdf"
              download
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 flex items-center justify-center hover:border-indigo-300 transition-all duration-300 group"
            >
              <div className="flex flex-col space-y-1">
                <span
                  className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl mt-4 p-6 shadow-xl border border-gray-200">
            <nav className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-indigo-50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Resume Button */}
              <a
                href="/malad-resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Download Resume
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
