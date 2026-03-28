import { useEffect, useRef, useState } from 'react';

const METRICS = [
  { value: '40+', label: 'Discoms Integrated', sublabel: 'Across 6 major states' },
  { value: '20+', label: 'Technical Doc Types', sublabel: 'HT, LT, SECI & more' },
  { value: '95%', label: 'Extraction Accuracy', sublabel: 'AI-powered precision' },
  { value: '3×', label: 'Faster Liaison', sublabel: 'Vs. manual process' },
];

export default function ValueMetrics() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28 px-6 lg:px-10 bg-white border-t border-gray-100 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-gray-400 font-inter uppercase tracking-widest mb-3">By the Numbers</p>
          <h2 className="font-outfit font-700 text-3xl lg:text-4xl text-gray-900 tracking-tight">
            Built for <span className="text-[#2563EB]">scale</span>, proven in the field
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center justify-center py-10 px-6 border-b lg:border-b-0 border-r border-gray-100 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } ${i === 0 ? 'border-l' : ''} ${i === METRICS.length - 1 ? 'border-r' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span
                className="font-outfit font-800 text-5xl lg:text-6xl text-gray-900 tracking-tight leading-none"
              >
                {metric.value}
              </span>
              <span className="mt-3 text-sm font-semibold text-gray-700 font-inter text-center">{metric.label}</span>
              <span className="mt-1 text-xs text-gray-400 font-inter text-center">{metric.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
