import { useState } from 'react';

const DISCOMS = [
  'TANGEDCO', 'BESCOM', 'MSEDCL',
  'TSSPDCL', 'UPPCL', 'GETCO',
  'KSEB', 'PGVCL', 'HVPNL',
];

function AutoGenerationViz() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative border border-gray-100 rounded-2xl p-6 bg-[#F8FAFC] h-full min-h-[320px] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-400 font-inter uppercase tracking-widest">Template Engine</p>
        <span className="text-[11px] bg-[#2563EB]/10 text-[#2563EB] px-2.5 py-1 rounded-full font-inter font-medium">Live Preview</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {DISCOMS.map((name, i) => (
          <button
            key={name}
            onClick={() => setActive(i)}
            className={`rounded-lg border py-2 px-1 text-center cursor-pointer transition-all duration-200 ${
              active === i
                ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB]'
                : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
            }`}
          >
            <span className="text-[10px] font-semibold font-inter leading-tight block">{name}</span>
          </button>
        ))}
      </div>
      <div className="border border-[#2563EB]/20 rounded-xl p-4 bg-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-[11px] text-gray-400 font-inter">Generating form for</p>
            <p className="text-sm font-semibold text-gray-900 font-outfit mt-0.5">{DISCOMS[active]}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[10px] text-[#10B981] font-medium font-inter">Auto-populated</span>
          </div>
        </div>
        {['Project Name', 'Load Capacity', 'Applicant KYC', 'SLD Reference'].map((field, i) => (
          <div key={field} className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-sm bg-[#2563EB]/20 shrink-0" />
            <span className="text-[10px] text-gray-400 font-inter w-24">{field}</span>
            <div className={`flex-1 h-1.5 rounded-full bg-[#2563EB]`} style={{ opacity: 0.15 + i * 0.2, width: `${70 - i * 12}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ValidationViz() {
  const [fixedIndex, setFixedIndex] = useState<number | null>(null);

  const ITEMS = [
    { label: 'PAN card verified', status: 'ok' },
    { label: 'GST registration active', status: 'ok' },
    { label: 'Board resolution present', status: 'ok' },
    { label: 'Form 26AS — Expired Mar 2024', status: 'warn' },
  ];

  return (
    <div className="border border-gray-100 rounded-2xl p-6 bg-[#F8FAFC] min-h-[320px] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-400 font-inter uppercase tracking-widest">Pre-submission Check</p>
        <span className="text-[11px] bg-[#10B981]/10 text-[#10B981] px-2.5 py-1 rounded-full font-inter font-medium">
          {fixedIndex !== null ? '4/4 Ready' : '3/4 Ready'}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {ITEMS.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 ${
              item.status === 'ok' || fixedIndex === i
                ? 'border-[#10B981]/20 bg-white'
                : 'border-[#f59e0b]/30 bg-[#fffbeb]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 flex items-center justify-center shrink-0`}>
                {item.status === 'ok' || fixedIndex === i ? (
                  <i className="ri-checkbox-circle-fill text-[#10B981]" />
                ) : (
                  <i className="ri-information-line text-[#f59e0b]" />
                )}
              </div>
              <span className={`text-xs font-inter ${item.status === 'ok' || fixedIndex === i ? 'text-gray-700' : 'text-[#92400e]'}`}>
                {fixedIndex === i ? item.label.replace('Expired', 'Renewed') : item.label}
              </span>
            </div>
            {item.status !== 'ok' && fixedIndex !== i && (
              <button
                onClick={() => setFixedIndex(i)}
                className="whitespace-nowrap text-[10px] bg-[#2563EB] text-white px-3 py-1 rounded-lg font-medium font-inter cursor-pointer hover:bg-[#1d4ed8] transition-colors"
              >
                Fix
              </button>
            )}
          </div>
        ))}
      </div>
      <div className={`rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-500 ${fixedIndex !== null ? 'bg-[#10B981]/10 border border-[#10B981]/20' : 'bg-gray-50 border border-gray-100'}`}>
        <i className={`ri-shield-check-line ${fixedIndex !== null ? 'text-[#10B981]' : 'text-gray-300'}`} />
        <span className={`text-xs font-medium font-inter ${fixedIndex !== null ? 'text-[#10B981]' : 'text-gray-400'}`}>
          {fixedIndex !== null ? 'All checks passed — Ready for submission' : 'Resolve issues to unlock submission'}
        </span>
      </div>
    </div>
  );
}

function ExtractionViz() {
  const DATA_POINTS = [
    { label: 'Load', value: '50 kW' },
    { label: 'Metering', value: 'Net Billing' },
    { label: 'SLD Ref', value: 'DWG-0042A' },
  ];

  return (
    <div className="border border-gray-100 rounded-2xl p-6 bg-[#F8FAFC] min-h-[320px] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-400 font-inter uppercase tracking-widest">AI Extraction</p>
        <span className="text-[11px] bg-[#2563EB]/10 text-[#2563EB] px-2.5 py-1 rounded-full font-inter font-medium">95% Accuracy</span>
      </div>
      <div className="flex items-start gap-4">
        {/* PDF mock */}
        <div className="w-28 shrink-0 border border-gray-200 rounded-xl bg-white p-3 relative overflow-hidden">
          <div className="flex items-center gap-1.5 mb-3">
            <i className="ri-file-pdf-line text-red-400 text-sm" />
            <span className="text-[9px] text-gray-400 font-inter">Scanned PDF</span>
          </div>
          {[40, 60, 80, 50, 70, 45, 55].map((w, i) => (
            <div key={i} className="h-1 rounded-full bg-gray-200 mb-1.5" style={{ width: `${w}%` }} />
          ))}
          {/* Scanner beam */}
          <div
            className="absolute left-0 right-0 h-0.5 bg-[#2563EB]/40"
            style={{ animation: 'scanPulse 2s ease-in-out infinite', top: '50%' }}
          />
          <style>{`
            @keyframes scanPulse {
              0%, 100% { top: 20%; opacity: 0.3; }
              50% { top: 80%; opacity: 1; }
            }
          `}</style>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center justify-center h-full pt-4 gap-1">
          <div className="flex items-center">
            <div className="w-8 h-px bg-gray-200" />
            <i className="ri-arrow-right-line text-xs text-gray-300" />
          </div>
        </div>

        {/* Extracted data */}
        <div className="flex-1 flex flex-col gap-2">
          {DATA_POINTS.map((dp, i) => (
            <div
              key={dp.label}
              className="flex items-center justify-between border border-[#2563EB]/15 rounded-lg px-3 py-2.5 bg-white"
              style={{ animation: `fadeSlideIn 0.5s ease ${i * 0.2}s both`, animationIterationCount: 1 }}
            >
              <span className="text-[10px] text-gray-400 font-inter">{dp.label}</span>
              <span className="text-[11px] font-semibold text-[#2563EB] font-inter">{dp.value}</span>
            </div>
          ))}
          <style>{`
            @keyframes fadeSlideIn {
              from { opacity: 0; transform: translateX(8px); }
              to { opacity: 1; transform: translateX(0); }
            }
          `}</style>
          <div className="border border-dashed border-[#10B981]/30 rounded-lg px-3 py-2.5 bg-[#10B981]/5 flex items-center gap-2">
            <i className="ri-code-box-line text-[#10B981] text-sm" />
            <span className="text-[10px] text-[#10B981] font-inter font-medium">JSON output ready → ERP/CRM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    num: 'I',
    title: 'Auto-Generation',
    headline: 'One-click generation for any Discom.',
    body: 'Feed in project data once—get submission-ready paperwork for TANGEDCO, BESCOM, MSEDCL and 40+ others in minutes. We handle the templates; you handle the growth.',
    pills: ['Discom-specific templates', 'Auto-populated', 'Version control', 'HT/LT & SECI'],
    Viz: AutoGenerationViz,
  },
  {
    num: 'II',
    title: 'Smart Validation',
    headline: 'Stop losing weeks to rejected applications.',
    body: 'Zennova pre-screens every document for KYC completeness, expired financials, and missing fields before you submit. Catch errors when they\'re free to fix—not after rejection.',
    pills: ['KYC completeness', 'Expiry alerts', 'Financial screening', 'Submission score'],
    Viz: ValidationViz,
  },
  {
    num: 'III',
    title: 'AI Data Extraction',
    headline: 'Don\'t type. Extract.',
    body: 'Pull load schedules, metering details, and SLD references directly from scanned PDFs at 95%+ accuracy. Push structured JSON straight into your CRM or ERP—zero copy-paste.',
    pills: ['Energy-tuned AI', 'Scanned PDF support', 'Structured JSON', 'ERP/CRM ready'],
    Viz: ExtractionViz,
  },
];

export default function FeatureSuite() {
  const [active, setActive] = useState(0);
  const ActiveViz = FEATURES[active].Viz;

  return (
    <section id="features" className="py-20 lg:py-28 px-6 lg:px-10 bg-[#F8FAFC] border-t border-gray-100 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-gray-400 font-inter uppercase tracking-widest mb-3">The Platform</p>
          <h2 className="font-outfit font-700 text-3xl lg:text-4xl text-gray-900 tracking-tight">
            Three pillars. <span className="text-[#2563EB]">One platform.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Feature List */}
          <div className="flex flex-col gap-3">
            {FEATURES.map((f, i) => (
              <button
                key={f.num}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${
                  active === i
                    ? 'border-[#2563EB]/30 bg-white shadow-sm'
                    : 'border-gray-100 bg-white/50 hover:border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`font-outfit text-xs font-600 mt-0.5 w-8 shrink-0 ${active === i ? 'text-[#2563EB]' : 'text-gray-300'}`}>{f.num}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-semibold font-outfit transition-colors ${active === i ? 'text-gray-900' : 'text-gray-500'}`}>{f.title}</span>
                      <i className={`ri-arrow-right-line text-xs transition-all duration-200 ${active === i ? 'text-[#2563EB] translate-x-1' : 'text-gray-300'}`} />
                    </div>
                    {active === i && (
                      <div className="mt-3">
                        <p className="text-base font-semibold text-gray-900 font-outfit leading-snug mb-2">{f.headline}</p>
                        <p className="text-sm text-gray-500 font-inter leading-relaxed mb-4">{f.body}</p>
                        <div className="flex flex-wrap gap-2">
                          {f.pills.map((pill) => (
                            <span key={pill} className="text-[11px] border border-gray-200 text-gray-500 px-3 py-1 rounded-full font-inter">{pill}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Viz */}
          <div className="lg:sticky lg:top-24">
            <ActiveViz />
          </div>
        </div>
      </div>
    </section>
  );
}
