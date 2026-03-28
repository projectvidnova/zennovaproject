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
  return (
    <section id="why" className="py-20 lg:py-28 px-6 lg:px-10 bg-white border-t border-gray-100 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-gray-400 font-inter uppercase tracking-widest mb-3">The Difference</p>
          <h2 className="font-outfit font-700 text-3xl lg:text-4xl text-gray-900 tracking-tight">
            Built by people who've done the{' '}
            <span className="text-[#2563EB]">paperwork.</span>
          </h2>
          <p className="mt-4 text-base text-gray-500 font-inter max-w-xl mx-auto leading-relaxed">
            Zennova is purpose-built for the Indian solar and energy sector. We understand the cost of a single rejected submission.
          </p>
        </div>

        <div className="border border-gray-100 rounded-2xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-2">
            <div className="bg-[#F8FAFC] px-8 py-5 border-b border-r border-gray-100 flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-close-circle-line text-gray-300 text-lg" />
              </div>
              <span className="text-sm font-semibold text-gray-400 font-outfit">The Old Way</span>
            </div>
            <div className="bg-[#2563EB] px-8 py-5 border-b border-gray-100 flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-check-double-line text-white text-lg" />
              </div>
              <span className="text-sm font-semibold text-white font-outfit">The Zennova Way</span>
            </div>
          </div>

          {/* Rows */}
          {OLD_WAY.map((old, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-gray-100 last:border-b-0">
              <div className="px-8 py-4 border-r border-gray-100 flex items-start gap-3 bg-white">
                <i className="ri-subtract-line text-gray-200 mt-0.5 shrink-0 text-sm" />
                <span className="text-sm text-gray-400 font-inter leading-relaxed">{old}</span>
              </div>
              <div className="px-8 py-4 flex items-start gap-3 bg-[#F8FAFC]">
                <i className="ri-arrow-right-line text-[#2563EB] mt-0.5 shrink-0 text-sm" />
                <span className="text-sm text-gray-700 font-inter leading-relaxed font-medium">{ZENNOVA_WAY[i]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: 'ri-time-line', value: '1 week', label: 'Average turnaround (vs 4+ weeks)', color: '[#2563EB]' },
            { icon: 'ri-shield-check-line', value: '0 rework', label: 'On validated submissions', color: '[#10B981]' },
            { icon: 'ri-lightbulb-flash-line', value: '40+ discoms', label: 'Supported out of the box', color: '[#2563EB]' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 border border-gray-100 rounded-xl px-5 py-4 bg-white">
              <div className={`w-9 h-9 flex items-center justify-center rounded-lg bg-${stat.color}/10 shrink-0`}>
                <i className={`${stat.icon} text-${stat.color}`} />
              </div>
              <div>
                <p className={`text-sm font-semibold font-outfit text-${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-gray-400 font-inter mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
