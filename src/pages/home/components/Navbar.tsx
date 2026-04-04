import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Why Zennova', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100/80 shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5 cursor-pointer group">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center shadow-[0_2px_12px_rgba(37,99,235,0.3)] transition-transform duration-200 group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)' }}
          >
            <span className="text-white font-bold text-sm font-outfit">Z</span>
          </div>
          <span className="font-outfit font-bold text-[17px] text-gray-900 tracking-tight">Zennova</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer font-inter relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2563EB] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="whitespace-nowrap text-sm text-white px-5 py-2.5 rounded-xl font-semibold cursor-pointer transition-all duration-200 font-inter shadow-[0_2px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:-translate-y-px"
            style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)' }}
            onClick={() => window.dispatchEvent(new CustomEvent('switch-form-tab', { detail: 'access' }))}
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer font-inter py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="whitespace-nowrap text-sm text-white px-4 py-3 rounded-xl font-semibold cursor-pointer text-center font-inter mt-1"
            style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)' }}
            onClick={() => { setMenuOpen(false); window.dispatchEvent(new CustomEvent('switch-form-tab', { detail: 'access' })); }}
          >
            Get Early Access
          </a>
        </div>
      )}
    </header>
  );
}
