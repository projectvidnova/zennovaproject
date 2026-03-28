import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Why Zennova', href: '#why' },
    { label: 'Pricing', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center">
            <span className="text-white font-bold text-sm font-outfit">Z</span>
          </div>
          <span className="font-outfit font-700 text-[17px] text-gray-900 tracking-tight">Zennova</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer font-inter"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer font-inter transition-colors duration-200"
          >
            Sign in
          </a>
          <a
            href="#early-access"
            className="whitespace-nowrap text-sm bg-[#2563EB] text-white px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-[#1d4ed8] transition-colors duration-200 font-inter"
          >
            Get Early Access
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center text-gray-600 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-xl`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer font-inter"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#early-access"
            className="whitespace-nowrap text-sm bg-[#2563EB] text-white px-4 py-2.5 rounded-lg font-medium cursor-pointer text-center font-inter"
            onClick={() => setMenuOpen(false)}
          >
            Get Early Access
          </a>
        </div>
      )}
    </header>
  );
}
