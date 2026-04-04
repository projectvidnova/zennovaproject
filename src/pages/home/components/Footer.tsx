export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Security'],
  };

  return (
    <footer className="bg-[#0f172a] w-full">
      {/* Top gradient accent */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #2563EB, #10B981, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)' }}
              >
                <span className="text-white font-bold text-sm font-outfit">Z</span>
              </div>
              <span className="font-outfit font-bold text-[17px] text-white tracking-tight">Zennova</span>
            </div>
            <p className="text-sm text-gray-400 font-inter leading-relaxed max-w-xs">
              AI-powered document automation for Indian solar and energy projects. From Discom-ready generation to intelligent data extraction.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: 'ri-linkedin-box-line', href: '#' },
                { icon: 'ri-twitter-x-line', href: '#' },
                { icon: 'ri-mail-line', href: '#contact' },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200 cursor-pointer"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <p className="text-xs font-bold text-gray-500 font-inter uppercase tracking-widest">{category}</p>
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <a
                    key={item}
                    href="#contact"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-inter"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-inter">
            © {currentYear} Zennova Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs text-gray-500 font-inter">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
