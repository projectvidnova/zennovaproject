export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white py-10 px-6 lg:px-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#2563EB] flex items-center justify-center">
            <span className="text-white font-bold text-xs font-outfit">Z</span>
          </div>
          <span className="font-outfit font-600 text-[15px] text-gray-700 tracking-tight">Zennova</span>
          <span className="text-gray-300 text-sm mx-2">|</span>
          <span className="text-xs text-gray-400 font-inter">AI Document Automation for Indian Solar</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a key={link} href="#contact" className="text-xs text-gray-400 hover:text-gray-700 cursor-pointer font-inter transition-colors">
                {link}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-300 font-inter whitespace-nowrap">© {currentYear} Zennova</p>
        </div>
      </div>
    </footer>
  );
}
