import { useState, useEffect, useRef } from 'react';

const DISCOMS = [
  'TANGEDCO', 'BESCOM', 'MSEDCL',
  'TSSPDCL', 'UPPCL', 'GETCO',
  'KSEB', 'PGVCL', 'HVPNL',
];

function AutoGenerationViz() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % DISCOMS.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-[0_4px_40px_rgba(37,99,235,0.07)]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#F8FAFC]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
          <p className="text-xs font-semibold text-gray-500 font-inter uppercase tracking-widest">Template Engine</p>
        </div>
        <span className="text-[11px] bg-[#2563EB]/10 text-[#2563EB] px-2.5 py-1 rounded-full font-inter font-semibold">Live Preview</span>
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-2">
          {DISCOMS.map((name, i) => (
            <button
              key={name}
              onClick={() => setActive(i)}
              className={`rounded-xl border py-2.5 px-1 text-center cursor-pointer transition-all duration-200 ${
                active === i
                  ? 'border-[#2563EB] bg-[#2563EB]/5 shadow-[0_0_0_3px_rgba(37,99,235,0.08)]'
                  : 'border-gray-100 bg-[#F8FAFC] hover:border-gray-200 hover:bg-white'
              }`}
            >
              <span className={`text-[10px] font-bold font-inter leading-tight block ${active === i ? 'text-[#2563EB]' : 'text-gray-400'}`}>{name}</span>
            </button>
          ))}
        </div>

        <div className="border border-[#2563EB]/20 rounded-xl p-4 bg-[#F8FAFC]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[10px] text-gray-400 font-inter">Generating form for</p>
              <p className="text-sm font-bold text-gray-900 font-outfit mt-0.5">{DISCOMS[active]}</p>
            </div>
            <div className="flex items-center gap-1.5 bg-[#10B981]/10 px-2.5 py-1 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[10px] text-[#10B981] font-semibold font-inter">Auto-populated</span>
            </div>
          </div>
          {['NSS Agreement', 'WCR / JIR', 'DCR Undertaking', 'ALMM Declaration'].map((field, i) => (
            <div key={field} className="flex items-center gap-3 mb-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/30 shrink-0" />
              <span className="text-[10px] text-gray-500 font-inter w-28">{field}</span>
              <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#2563EB]/50"
                  style={{ width: `${85 - i * 14}%`, transition: 'width 0.6s ease' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ValidationViz() {
  const [fixedIndex, setFixedIndex] = useState<number | null>(null);

  const ITEMS = [
    { label: 'Name match: e-bill ↔ cheque leaf', status: 'ok' },
    { label: 'Bank statement: PDF format, 6-month period', status: 'ok' },
    { label: 'Geo-tag present on site photographs', status: 'ok' },
    { label: 'ITR assessment year — Expired AY 2022-23', status: 'warn' },
  ];

  const allFixed = fixedIndex !== null;

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-[0_4px_40px_rgba(37,99,235,0.07)]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#F8FAFC]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#10B981]" />
          <p className="text-xs font-semibold text-gray-500 font-inter uppercase tracking-widest">Pre-submission Check</p>
        </div>
        <span className={`text-[11px] px-2.5 py-1 rounded-full font-inter font-semibold transition-all duration-300 ${allFixed ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-amber-50 text-amber-600'}`}>
          {allFixed ? '4/4 Ready' : '3/4 Ready'}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-2.5">
        {ITEMS.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 ${
              item.status === 'ok' || fixedIndex === i
                ? 'border-[#10B981]/20 bg-[#10B981]/3'
                : 'border-amber-200/60 bg-amber-50/60'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                {item.status === 'ok' || fixedIndex === i ? (
                  <i className="ri-checkbox-circle-fill text-[#10B981] text-base" />
                ) : (
                  <i className="ri-error-warning-line text-amber-500 text-base" />
                )}
              </div>
              <span className={`text-xs font-inter ${item.status === 'ok' || fixedIndex === i ? 'text-gray-600' : 'text-amber-800'}`}>
                {fixedIndex === i ? item.label.replace('Expired', 'Renewed') : item.label}
              </span>
            </div>
            {item.status !== 'ok' && fixedIndex !== i && (
              <button
                onClick={() => setFixedIndex(i)}
                className="whitespace-nowrap text-[10px] bg-[#2563EB] text-white px-3 py-1.5 rounded-lg font-semibold font-inter cursor-pointer hover:bg-[#1d4ed8] transition-colors"
              >
                Fix
              </button>
            )}
          </div>
        ))}

        <div className={`rounded-xl px-4 py-3.5 flex items-center gap-3 mt-1 transition-all duration-500 border ${allFixed ? 'bg-[#10B981]/8 border-[#10B981]/25' : 'bg-gray-50 border-gray-100'}`}>
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${allFixed ? 'bg-[#10B981]/15' : 'bg-gray-100'}`}>
            <i className={`ri-shield-check-line text-sm ${allFixed ? 'text-[#10B981]' : 'text-gray-300'}`} />
          </div>
          <span className={`text-xs font-semibold font-inter ${allFixed ? 'text-[#10B981]' : 'text-gray-400'}`}>
            {allFixed ? 'All checks passed — Ready for submission' : 'Resolve issues to unlock submission'}
          </span>
        </div>
      </div>
    </div>
  );
}

function ExtractionViz() {
  const [scanPos, setScanPos] = useState(20);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setScanPos((p) => {
        const next = p + direction * 3;
        if (next >= 80) { setDirection(-1); return 80; }
        if (next <= 20) { setDirection(1); return 20; }
        return next;
      });
    }, 40);
    return () => clearInterval(t);
  }, [direction]);

  const DATA_POINTS = [
    { label: 'KYC — PAN / Aadhaar', value: 'Extracted', color: '#2563EB' },
    { label: 'Finance — ITR + Bank Stmt', value: 'Structured', color: '#2563EB' },
    { label: 'Liaison — TFR Ack + e-Token', value: 'Indexed', color: '#10B981' },
  ];

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-[0_4px_40px_rgba(37,99,235,0.07)]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#F8FAFC]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
          <p className="text-xs font-semibold text-gray-500 font-inter uppercase tracking-widest">AI Extraction</p>
        </div>
        <span className="text-[11px] bg-[#2563EB]/10 text-[#2563EB] px-2.5 py-1 rounded-full font-inter font-semibold">95% Accuracy</span>
      </div>

      <div className="p-5 flex items-start gap-4">
        {/* PDF mock */}
        <div className="w-28 shrink-0 border border-gray-200 rounded-xl bg-white p-3 relative overflow-hidden">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-5 h-5 rounded-md bg-red-50 flex items-center justify-center">
              <i className="ri-file-pdf-line text-red-400 text-xs" />
            </div>
            <span className="text-[9px] text-gray-400 font-inter">Scanned PDF</span>
          </div>
          {[40, 65, 80, 50, 70, 45, 60].map((w, i) => (
            <div key={i} className="h-1 rounded-full bg-gray-100 mb-1.5" style={{ width: `${w}%` }} />
          ))}
          {/* Scanner beam */}
          <div
            className="absolute left-0 right-0 h-0.5"
            style={{
              top: `${scanPos}%`,
              background: 'linear-gradient(90deg, transparent, #2563EB80, transparent)',
              boxShadow: '0 0 6px rgba(37,99,235,0.4)',
              transition: 'top 0.04s linear',
            }}
          />
          <div
            className="absolute left-0 right-0 h-8 pointer-events-none"
            style={{
              top: `calc(${scanPos}% - 16px)`,
              background: 'linear-gradient(180deg, transparent, rgba(37,99,235,0.04), transparent)',
              transition: 'top 0.04s linear',
            }}
          />
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center justify-center pt-8 gap-1 shrink-0">
          <div className="w-6 h-px bg-gray-200" />
          <i className="ri-arrow-right-line text-xs text-gray-300" />
        </div>

        {/* Extracted data */}
        <div className="flex-1 flex flex-col gap-2">
          {DATA_POINTS.map((dp, i) => (
            <div
              key={dp.label}
              className="flex items-center justify-between border border-gray-100 rounded-xl px-3 py-2.5 bg-[#F8FAFC] hover:border-[#2563EB]/20 transition-colors"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="text-[10px] text-gray-500 font-inter">{dp.label}</span>
              <span className="text-[11px] font-bold font-inter" style={{ color: dp.color }}>{dp.value}</span>
            </div>
          ))}
          <div className="border border-dashed border-[#10B981]/40 rounded-xl px-3 py-2.5 bg-[#10B981]/5 flex items-center gap-2 mt-1">
            <i className="ri-code-box-line text-[#10B981] text-sm" />
            <span className="text-[10px] text-[#10B981] font-inter font-semibold">KYC + Finance + Liaison → JSON → ERP/CRM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    num: '01',
    title: 'Auto-Generation',
    headline: 'One-click generation for any Discom.',
    body: 'Feed in project data once—get submission-ready documents for TANGEDCO, BESCOM, MSEDCL, TSSPDCL, UPPCL, GETCO and 40+ others in minutes. NSS Agreement, WCR, JIR, DCR Undertaking, ALMM Declaration, Commissioning Certificate—all auto-populated.',
    pills: ['NSS Agreement', 'WCR & JIR', 'DCR Undertaking', 'ALMM Declaration', 'Commissioning Cert', '6 States Covered'],
    Viz: AutoGenerationViz,
    icon: 'ri-magic-line',
  },
  {
    num: '02',
    title: 'Smart Validation',
    headline: 'Stop losing weeks to rejected applications.',
    body: 'Zennova pre-screens every document against real discom rules—name match between e-bill and cheque leaf, bank statement format (PDF-only, 6-month period), ITR assessment year validity, and geo-tag presence on site photographs.',
    pills: ['Name match: e-bill ↔ cheque', 'Bank stmt: PDF, 6-month', 'ITR assessment year check', 'Geo-tag verification'],
    Viz: ValidationViz,
    icon: 'ri-shield-check-line',
  },
  {
    num: '03',
    title: 'AI Data Extraction',
    headline: "Don't type. Extract.",
    body: 'Pull structured data from KYC docs (PAN, Aadhaar), finance docs (ITR, bank statement, JS approval letter), and liaison docs (TFR acknowledgement, e-token, commissioning certificate) at 95%+ accuracy—straight into your CRM or ERP.',
    pills: ['KYC docs', 'Finance docs (ITR, Bank, JS)', 'Liaison docs (TFR, e-Token)', 'Commissioning Cert', 'Structured JSON output'],
    Viz: ExtractionViz,
    icon: 'ri-brain-line',
  },
];

export default function FeatureSuite() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const ActiveViz = FEATURES[active].Viz;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={ref} className="py-20 lg:py-28 px-6 lg:px-10 w-full relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #ffffff 100%)' }}>
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(#2563EB08 1px, transparent 1px), linear-gradient(90deg, #2563EB08 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xs font-semibold text-gray-400 font-inter uppercase tracking-widest mb-3">The Platform</p>
          <h2 className="font-outfit font-extrabold text-3xl lg:text-4xl text-gray-900 tracking-tight">
            Three pillars.{' '}
            <span style={{ background: 'linear-gradient(135deg, #2563EB, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              One platform.
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-500 font-inter max-w-lg mx-auto">
            Everything your liaison team needs to go from raw project data to submission-ready documents.
          </p>
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
                    ? 'border-[#2563EB]/30 bg-white shadow-[0_4px_24px_rgba(37,99,235,0.08)] border-l-4 border-l-[#2563EB]'
                    : 'border-gray-100 bg-white/60 hover:border-gray-200 hover:bg-white'
                }`}
                style={active === i ? { borderLeftColor: '#2563EB', borderLeftWidth: '3px' } : {}}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${active === i ? 'bg-[#2563EB] shadow-[0_2px_12px_rgba(37,99,235,0.3)]' : 'bg-gray-100'}`}>
                    <i className={`${f.icon} text-sm ${active === i ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold font-inter ${active === i ? 'text-[#2563EB]' : 'text-gray-300'}`}>{f.num}</span>
                        <span className={`text-sm font-bold font-outfit transition-colors ${active === i ? 'text-gray-900' : 'text-gray-500'}`}>{f.title}</span>
                      </div>
                      <i className={`ri-arrow-right-line text-xs transition-all duration-200 ${active === i ? 'text-[#2563EB] translate-x-1' : 'text-gray-300'}`} />
                    </div>
                    {active === i && (
                      <div className="mt-3">
                        <p className="text-base font-bold text-gray-900 font-outfit leading-snug mb-2">{f.headline}</p>
                        <p className="text-sm text-gray-500 font-inter leading-relaxed mb-4">{f.body}</p>
                        <div className="flex flex-wrap gap-2">
                          {f.pills.map((pill) => (
                            <span key={pill} className="text-[11px] border border-[#2563EB]/20 text-[#2563EB] bg-[#2563EB]/5 px-3 py-1 rounded-full font-inter font-medium">{pill}</span>
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
