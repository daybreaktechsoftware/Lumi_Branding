import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden"
    >
      {/* Blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-[#f6e7c3] via-[#e2c7a2] to-[#c9ae89] opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-gradient-to-br from-[#c9ae89] via-[#e2c7a2] to-[#f6e7c3] opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-10 max-w-6xl mx-auto">
        <h1 className="relative inline-block text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8C7853] via-[#B08D57] to-[#e9c977] animate-shine">
          Lumi Branding
        </h1>

        <p className="text-xl md:text-2xl text-[#F3EFE6] mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-light">
          At Lumi Branding, we help South African businesses stand out by
          creating custom-branded gifts, apparel, and stationery that feel
          personal, professional, and truly memorable — because your brand
          deserves to be seen and remembered.
        </p>

        <div className="flex flex-col sm:flex-row gap-9 justify-center items-center animate-slide-up">
          {/* CTA Button */}
          <a
            href="#contact"
            className="group bg-white hover:bg-[#f3f3f3] text-black px-14 py-6 rounded-full font-semibold text-3xl transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center space-x-4"
          >
            <span>Get Started</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          {/* Watch Reel Button */}
          <a
            href="#catalog"
            className="group flex items-center space-x-4 text-white hover:text-[#D4AF37] transition-all duration-300"
          >
            <div className="relative bg-[#f6f6f6] p-4 rounded-full group-hover:bg-[#D4AF37]/20 group-hover:scale-110 transition-all duration-500 border border-white/10">
              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 animate-ping z-0"></div>
              <Eye className="h-6 w-6 ml-1 relative z-10 text-black" />
            </div>
            <span className="font-medium text-3xl">View Our Inventory</span>
          </a>
        </div>

        {/* Placeholder grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          {/* Add cards/blocks here later */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
