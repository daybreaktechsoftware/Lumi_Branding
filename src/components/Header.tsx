import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface HeaderProps {
  onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    // { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-beige-1/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img
              src="/PHOTO-2025-07-10-19-19-34.jpg"
              alt="Lumi Branding"
              className="h-12 w-auto mx-auto object-contain drop-shadow-2xl"
            />
            <span className="text-2xl font-bold text-[#B08D57] duration-300">
              Lumi Branding
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-text-dark hover:text-light-green"
                    : "text-text-dark hover:text-white"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-text-dark hover:bg-gray-100"
                : "text-white hover:bg-beige-1/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-beige-1 backdrop-blur-md border-b border-gray-00 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-text-dark hover:text-light-green transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onLoginClick?.();
                }}
              ></button>
              <a
                href="#form"
                className="block text-center bg-light-green hover:bg-dark-green text-bla px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
