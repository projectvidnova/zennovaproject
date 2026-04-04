import { useEffect, useRef, useState } from 'react';

const OLD_WAY = [
  'Manual data entry for every Discom',
  'Rejected applications with 4-week delays',
  'Expired KYC slips through unnoticed',
  'Spreadsheets to track 20+ doc types',
  'Liaison engineers waste hours on templates',
  'No visibility into submission readiness',
];

const ZENNOVA_WAY = [
  'AI-generated, Discom-specific forms instantly',
  'Validated submissions—first time, every time',
  'Automated expiry alerts before issues arise',
  'Single dashboard for all project documents',
  'Engineers focus on execution, not paperwork',
  'Real-time submission readiness score',
];

export default function WhyUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" ref={ref} className="py-20 lg:py-28 px-6 lg:px-10 bg-white border-t border-gray-100 w-full">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xs font-semibold text-gray-400 font-inter uppercase tracking-widest mb-3">The Difference</p>
          <h2 className="font-outfit font-extrabold text-3xl lg:text-4xl text-gray-900 tracking-tight">
            Built by people who&apos;ve done the{' '}
            <span style={{ background: 'linear-gradient(135deg, #2563EB, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              paperwork.
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-500 font-inter max-w-xl mx-auto leading-relaxed">
            Zennova is purpose-built for the Indian solar and energy sector. We understand the cost of a single rejected submission.
          </p>
        </div>

        <div className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header Row */}
          <div className="grid grid-cols-2">
            <div className="bg-[#F8FAFC] px-8 py-5 border-b border-r border-gray-100 flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gray-200/60 flex items-center justify-center">
                <i className="ri-close-circle-line text-gray-400 text-sm" />
              </div>
              <span className="text-sm font-bold text-gray-400 font-outfit">The Old Way</span>
            </div>
            <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)' }}>
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <i className="ri-check-double-line text-white text-sm" />
              </div>
              <span className="text-sm font-bold text-white font-outfit">The Zennova Way</span>
            </div>
          </div>

          {/* Rows */}
          {OLD_WAY.map((old, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-b border-gray-100 last:border-b-0 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className="px-8 py-4 border-r border-gray-100 flex items-start gap-3 bg-white hover:bg-[#F8FAFC] transition-colors">
                <i className="ri-subtract-line text-gray-200 mt-0.5 shrink-0 text-sm" />
                <span className="text-sm text-gray-400 font-inter leading-relaxed">{old}</span>
              </div>
              <div className="px-8 py-4 flex items-start gap-3 bg-[#F8FAFC] hover:bg-[#EFF6FF] transition-colors">
                <i className="ri-arrow-right-line text-[#2563EB] mt-0.5 shrink-0 text-sm" />
                <span className="text-sm text-gray-700 font-inter leading-relaxed font-medium">{ZENNOVA_WAY[i]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className={`mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            { icon: 'ri-time-line', value: '1 week', label: 'Average turnaround (vs 4+ weeks)', gradient: 'from-[#2563EB]/10 to-[#2563EB]/5', iconColor: '#2563EB' },
            { icon: 'ri-shield-check-line', value: '0 rework', label: 'On validated submissions', gradient: 'from-[#10B981]/10 to-[#10B981]/5', iconColor: '#10B981' },
            { icon: 'ri-building-2-line', value: '40+ discoms', label: 'Supported out of the box', gradient: 'from-[#2563EB]/10 to-[#2563EB]/5', iconColor: '#2563EB' },
          ].map((stat) => (
            <div key={stat.label} className={`flex items-center gap-4 border border-gray-100 rounded-2xl px-5 py-5 bg-gradient-to-br ${stat.gradient} hover:border-gray-200 transition-all duration-200 group`}>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                <i className={`${stat.icon} text-base`} style={{ color: stat.iconColor }} />
              </div>
              <div>
                <p className="text-sm font-bold font-outfit" style={{ color: stat.iconColor }}>{stat.value}</p>
                <p className="text-xs text-gray-500 font-inter mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
