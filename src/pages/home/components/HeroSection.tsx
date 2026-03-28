import { useState, useEffect } from 'react';

const DOC_LABELS = ['Technical Feasibility', 'KYC Package', 'SLD Drawing', 'Load Sanction', 'Metering Schema', 'NOC Certificate'];

export default function HeroSection() {
  const [activeDoc, setActiveDoc] = useState(0);
  const [outputVisible, setOutputVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOutputVisible(false);
      setTimeout(() => {
        setActiveDoc((prev) => (prev + 1) % DOC_LABELS.length);
        setOutputVisible(true);
      }, 400);
    }, 2200);
    setOutputVisible(true);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 lg:px-10 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 border border-[#2563EB]/20 rounded-full px-4 py-1.5 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="text-xs text-[#2563EB] font-medium font-inter tracking-wide">Now in Early Access</span>
            </div>

            <h1 className="font-outfit font-800 text-5xl lg:text-6xl text-gray-900 leading-[1.08] tracking-tight">
              Energy paperwork,{' '}
              <span className="text-[#2563EB]">simplified.</span>
            </h1>

            <p className="text-lg text-gray-500 font-inter leading-relaxed max-w-[480px]">
              Zennova automates the complex document lifecycle for Indian solar projects. From Discom-ready generation to AI data extraction—zero manual effort.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <a
                href="#early-access"
                className="whitespace-nowrap bg-[#2563EB] text-white px-7 py-3.5 rounded-xl text-sm font-semibold font-inter cursor-pointer hover:bg-[#1d4ed8] transition-colors duration-200"
              >
                Get Early Access
              </a>
              <a
                href="#features"
                className="whitespace-nowrap flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 cursor-pointer font-inter transition-colors duration-200"
              >
                <span>See how it works</span>
                <i className="ri-arrow-right-line" />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
              <div className="flex flex-col gap-0.5">
                <span className="font-outfit font-700 text-xl text-gray-900">40+</span>
                <span className="text-xs text-gray-400 font-inter">Discoms</span>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex flex-col gap-0.5">
                <span className="font-outfit font-700 text-xl text-gray-900">95%</span>
                <span className="text-xs text-gray-400 font-inter">AI Accuracy</span>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex flex-col gap-0.5">
                <span className="font-outfit font-700 text-xl text-gray-900">3×</span>
                <span className="text-xs text-gray-400 font-inter">Faster Liaison</span>
              </div>
            </div>
          </div>

          {/* Right: The Funnel Infographic */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[480px]">
              {/* Outer Card */}
              <div className="border border-gray-100 rounded-2xl p-8 bg-[#F8FAFC]">
                <p className="text-xs font-medium text-gray-400 font-inter uppercase tracking-widest mb-6">Document Processing Pipeline</p>

                <div className="flex items-center gap-4">
                  {/* Input Stack */}
                  <div className="flex flex-col gap-2 w-[140px] shrink-0">
                    {DOC_LABELS.slice(0, 5).map((label, i) => (
                      <div
                        key={label}
                        className={`h-9 rounded-md border flex items-center px-3 gap-2 transition-all duration-300 ${
                          i === activeDoc % 5
                            ? 'border-[#2563EB]/40 bg-[#2563EB]/5'
                            : 'border-gray-200 bg-white'
                        }`}
                      >
                        <i className={`ri-file-text-line text-xs ${i === activeDoc % 5 ? 'text-[#2563EB]' : 'text-gray-300'}`} />
                        <span className="text-[10px] text-gray-500 font-inter truncate">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow + Z icon */}
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    <div className="flex items-center gap-0">
                      <div className="w-10 h-px bg-gray-200" />
                      <i className="ri-arrow-right-line text-xs text-gray-300" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#2563EB] bg-white flex items-center justify-center shadow-sm">
                      <span className="font-outfit font-700 text-[#2563EB] text-sm">Z</span>
                    </div>
                    <div className="flex items-center gap-0">
                      <div className="w-10 h-px bg-[#2563EB]/40" />
                      <i className="ri-arrow-right-line text-xs text-[#2563EB]" />
                    </div>
                  </div>

                  {/* Output */}
                  <div className="flex-1">
                    <div
                      className={`border border-[#2563EB]/30 rounded-xl p-4 bg-white transition-all duration-500 ${
                        outputVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <i className="ri-file-check-line text-[#10B981]" />
                          <span className="text-[11px] font-semibold text-gray-700 font-inter">Processed</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      </div>
                      <p className="text-[11px] text-[#2563EB] font-medium font-inter truncate">{DOC_LABELS[activeDoc % DOC_LABELS.length]}</p>
                      <div className="mt-3 flex gap-1.5">
                        <span className="text-[9px] bg-[#10B981]/10 text-[#10B981] px-2 py-0.5 rounded-full font-inter font-medium">Validated</span>
                        <span className="text-[9px] bg-[#2563EB]/10 text-[#2563EB] px-2 py-0.5 rounded-full font-inter font-medium">Ready</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#2563EB] rounded-full w-3/4 transition-all duration-700" />
                  </div>
                  <span className="text-[11px] text-gray-400 font-inter">5 of 6 docs processed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
