import { useEffect, useRef, useState } from 'react';

const METRICS = [
  {
    value: '40+',
    label: 'Discoms Integrated',
    sublabel: 'Across 6 major states',
    icon: 'ri-building-2-line',
    color: '#2563EB',
  },
  {
    value: '20+',
    label: 'Technical Doc Types',
    sublabel: 'HT, LT, SECI & more',
    icon: 'ri-file-list-3-line',
    color: '#2563EB',
  },
  {
    value: '95%',
    label: 'Extraction Accuracy',
    sublabel: 'AI-powered precision',
    icon: 'ri-brain-line',
    color: '#10B981',
  },
  {
    value: '3×',
    label: 'Faster Liaison',
    sublabel: 'Vs. manual process',
    icon: 'ri-flashlight-line',
    color: '#10B981',
  },
];

export default function ValueMetrics() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28 px-6 lg:px-10 bg-white border-t border-gray-100 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-gray-400 font-inter uppercase tracking-widest mb-3">By the Numbers</p>
          <h2 className="font-outfit font-extrabold text-3xl lg:text-4xl text-gray-900 tracking-tight">
            Built for <span style={{ background: 'linear-gradient(135deg, #2563EB, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>scale</span>, proven in the field
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center justify-center py-12 px-6 bg-white transition-all duration-700 group hover:bg-[#F8FAFC] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110"
                style={{ background: `${metric.color}12` }}
              >
                <i className={`${metric.icon} text-lg`} style={{ color: metric.color }} />
              </div>

              {/* Top accent line */}
              <div
                className="w-8 h-0.5 rounded-full mb-4 transition-all duration-300 group-hover:w-12"
                style={{ background: `linear-gradient(90deg, ${metric.color}, transparent)` }}
              />

              <span
                className="font-outfit font-extrabold text-5xl lg:text-6xl tracking-tight leading-none"
                style={{ color: metric.color }}
              >
                {metric.value}
              </span>
              <span className="mt-3 text-sm font-semibold text-gray-800 font-inter text-center">{metric.label}</span>
              <span className="mt-1 text-xs text-gray-400 font-inter text-center">{metric.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
