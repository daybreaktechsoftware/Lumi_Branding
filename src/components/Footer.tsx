import {
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Branded Merchandise",
    "Creative Campaigns",
    "Videography & Photography",
    "Content Strategy",
    "Print & Product Design",
    "Social Media Management",
  ];

  const company = [
    "Our Story",
    "How We Work",
    "Client Success",
    "Join Our Team",
    "Journal",
    "Let's Talk",
  ];

  const resources = [
    "Merch Design Guidelines",
    "Creative Brief Template",
    "Brand ROI Calculator",
    "Trend Reports",
    "Workshops & Events",
    "Help Center",
  ];

  return (
    <footer className=" bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 border-b border-white/10">
          {/* Top CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ready to Create Something
                <span className="block text-light-green">Extraordinary?</span>
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let's discuss your next project and bring your vision to life
                with our award-winning creative expertise.
              </p>
              <a
                href="#contact"
                className=" bg-light-green hover:bg-dark-green hover:border-cyan-400 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="bg-beige-1/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h4 className="text-xl font-bold mb-6">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-white/70 mb-6">
                Get the latest creative insights, industry trends, and exclusive
                content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-2xl bg-beige-1/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300"
                />
                <button className="bg-light-green hover:bg-dark-green text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Sparkles className="h-10 w-10 text-light-green" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-light-green rounded-full animate-pulse-slow"></div>
                </div>
                <span className="text-2xl font-bold">Lumi Branding</span>
              </div>
              <p className="text-white/80 mb-8 leading-relaxed max-w-md">
                Shaping Iconic Brands Through Story, Strategy & Cinematic Vision
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-beige-1/10 p-3 rounded-2xl hover:bg-light-green hover:scale-110 transition-all duration-300 text-white hover:text-white border border-white/20"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-light-green transition-colors duration-300 flex items-center group"
                    >
                      <span>{service}</span>
                      <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-light-green transition-colors duration-300 flex items-center group"
                    >
                      <span>{item}</span>
                      <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-light-green transition-colors duration-300 flex items-center group"
                    >
                      <span>{resource}</span>
                      <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-white/60">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-light-green" />
                <span>078 258 6687</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-light-green" />
                <span>LumiBranding25@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-light-green" />
                <span>Cape Town, South Africa</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-light-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-light-green transition-colors">
                Terms of Service
              </a>
              <span>
                &copy; {currentYear} Lumi Branding. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
