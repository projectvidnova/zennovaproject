import { useState, useEffect, useRef } from 'react';

const DOC_LABELS = ['Technical Feasibility', 'KYC Package', 'SLD Drawing', 'Load Sanction', 'Metering Schema', 'NOC Certificate'];

function AnimatedDotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #2563EB18 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
    </div>
  );
}

function PipelineCard() {
  const [activeDoc, setActiveDoc] = useState(0);
  const [outputVisible, setOutputVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setOutputVisible(false);
      setTimeout(() => {
        setActiveDoc((prev) => (prev + 1) % DOC_LABELS.length);
        setOutputVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[520px]">
      {/* Glow behind card */}
      <div className="absolute -inset-4 bg-[#2563EB]/6 rounded-3xl blur-2xl" />

      {/* Main card */}
      <div className="relative border border-gray-200/80 rounded-2xl bg-white overflow-hidden shadow-[0_4px_40px_rgba(37,99,235,0.08)]">
        {/* Card header bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-[#F8FAFC]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
          </div>
          <span className="text-[11px] text-gray-400 font-inter ml-2">zennova — document pipeline</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[10px] text-[#10B981] font-inter font-medium">Live</span>
          </div>
        </div>

        <div className="p-6">
          <p className="text-[10px] font-medium text-gray-400 font-inter uppercase tracking-widest mb-5">Document Processing Pipeline</p>

          <div className="flex items-center gap-4">
            {/* Input Stack */}
            <div className="flex flex-col gap-2 w-[148px] shrink-0">
              {DOC_LABELS.slice(0, 5).map((label, i) => (
                <div
                  key={label}
                  className={`h-9 rounded-lg border flex items-center px-3 gap-2 transition-all duration-400 ${
                    i === activeDoc % 5
                      ? 'border-[#2563EB]/50 bg-[#2563EB]/5 shadow-[0_0_0_3px_rgba(37,99,235,0.06)]'
                      : 'border-gray-100 bg-[#F8FAFC]'
                  }`}
                >
                  <i className={`ri-file-text-line text-xs ${i === activeDoc % 5 ? 'text-[#2563EB]' : 'text-gray-300'}`} />
                  <span className="text-[10px] text-gray-500 font-inter truncate">{label}</span>
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="w-px h-6 bg-gradient-to-b from-transparent to-gray-200" />
              <div className="relative w-11 h-11 rounded-full border-2 border-[#2563EB] bg-white flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#2563EB]/10 animate-ping" style={{ animationDuration: '2.5s' }} />
                <span className="font-outfit font-bold text-[#2563EB] text-sm relative z-10">Z</span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-gray-200 to-transparent" />
            </div>

            {/* Output */}
            <div className="flex-1">
              <div
                className={`border border-[#2563EB]/25 rounded-xl p-4 bg-white transition-all duration-400 ${
                  outputVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#10B981]/10 flex items-center justify-center">
                      <i className="ri-file-check-line text-[#10B981] text-xs" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-700 font-inter">Processed</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                </div>
                <p className="text-[11px] text-[#2563EB] font-semibold font-inter truncate">{DOC_LABELS[activeDoc % DOC_LABELS.length]}</p>
                <div className="mt-3 flex gap-1.5">
                  <span className="text-[9px] bg-[#10B981]/10 text-[#10B981] px-2 py-0.5 rounded-full font-inter font-medium">Validated</span>
                  <span className="text-[9px] bg-[#2563EB]/10 text-[#2563EB] px-2 py-0.5 rounded-full font-inter font-medium">Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-full w-[75%] transition-all duration-700" />
            </div>
            <span className="text-[10px] text-gray-400 font-inter whitespace-nowrap">5 of 6 docs processed</span>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-gray-100 px-6 py-3 bg-[#F8FAFC] flex items-center justify-between">
          <div className="flex items-center gap-4">
            {['TANGEDCO', 'BESCOM', 'MSEDCL'].map((d) => (
              <span key={d} className="text-[9px] font-semibold text-gray-400 font-inter">{d}</span>
            ))}
            <span className="text-[9px] text-gray-300 font-inter">+37 more</span>
          </div>
          <span className="text-[9px] text-[#10B981] font-medium font-inter">All systems operational</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref} className="relative pt-28 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-10 bg-white w-full overflow-hidden">
      <AnimatedDotGrid />

      {/* Ambient glow blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Text */}
          <div
            className={`flex flex-col gap-7 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#2563EB]/20 bg-[#2563EB]/4 rounded-full px-4 py-1.5 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs text-[#2563EB] font-semibold font-inter tracking-wide">Now in Early Access</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-outfit font-extrabold text-5xl lg:text-[64px] text-gray-900 leading-[1.05] tracking-tight">
                Energy paperwork,
              </h1>
              <h1 className="font-outfit font-extrabold text-5xl lg:text-[64px] leading-[1.05] tracking-tight mt-1">
                <span
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 50%, #10B981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  simplified.
                </span>
              </h1>
            </div>

            <p className="text-lg text-gray-500 font-inter leading-relaxed max-w-[480px]">
              Zennova automates the complex document lifecycle for Indian solar projects. From Discom-ready generation to AI data extraction—zero manual effort.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
              <a
                href="#early-access"
                className="whitespace-nowrap relative overflow-hidden bg-[#2563EB] text-white px-7 py-3.5 rounded-xl text-sm font-semibold font-inter cursor-pointer hover:bg-[#1d4ed8] transition-all duration-200 group shadow-[0_4px_20px_rgba(37,99,235,0.3)]"
              >
                <span className="relative z-10">Get Early Access</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>
              <a
                href="#features"
                className="whitespace-nowrap flex items-center gap-2 text-sm text-gray-500 hover:text-[#2563EB] cursor-pointer font-inter transition-colors duration-200 group"
              >
                <span>See how it works</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Inline stats */}
            <div className="flex items-center gap-6 pt-5 border-t border-gray-100">
              {[
                { val: '40+', label: 'Discoms' },
                { val: '95%', label: 'AI Accuracy' },
                { val: '3×', label: 'Faster Liaison' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-4">
                  {i > 0 && <div className="w-px h-8 bg-gray-200" />}
                  <div className="flex flex-col gap-0.5">
                    <span className="font-outfit font-bold text-xl text-gray-900">{s.val}</span>
                    <span className="text-xs text-gray-400 font-inter">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pipeline Card */}
          <div
            className={`flex items-center justify-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <PipelineCard />
          </div>
        </div>

        {/* Trusted by strip */}
        <div className={`mt-20 pt-8 border-t border-gray-100 transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-gray-400 font-inter text-center mb-6 uppercase tracking-widest">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            {['NTPC Solar', 'Torrent Power', 'ReNew Energy', 'SB Energy', 'Adani Green', 'Greenko'].map((co) => (
              <span key={co} className="text-sm font-semibold text-gray-300 font-outfit hover:text-gray-500 transition-colors cursor-default">{co}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
