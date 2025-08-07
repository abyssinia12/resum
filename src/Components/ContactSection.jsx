import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "abyssiniasolomon2123@gmail.com",
      link: "mailto:abyssiniasolomon2123@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+251 934 329 850",
      link: "tel:+251934329850",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Hawassa, Ethiopia",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github />,
      url: "https://github.com/abyssinia12",
      color: "hover:bg-gray-800",
    },
    // {
    //   name: "LinkedIn",
    //   icon: <Linkedin />,
    //   url: "#",
    //   color: "hover:bg-blue-600",
    // },
    // {
    //   name: "Twitter",
    //   icon: <Twitter />,
    //   url: "#",
    //   color: "hover:bg-blue-400",
    // },
    // {
    //   name: "Instagram",
    //   icon: <Instagram />,
    //   url: "#",
    //   color: "hover:bg-pink-600",
    // },
  ];

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-indigo-600 uppercase text-sm font-semibold tracking-wider mb-4">
            Get In Touch
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to start your next project? I'd love to hear about your ideas
            and help bring them to life. Let's create something amazing
            together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with
                amazing people. Whether you have a specific project in mind or
                just want to chat about possibilities, I'd love to hear from
                you.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  className={`flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group cursor-pointer ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-12 h-12 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl flex items-center justify-center text-xl hover:border-indigo-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
