import { useState, useEffect, useRef } from 'react';

const PRODUCTS = [
  {
    id: '01',
    tag: 'GENERATION',
    heading: 'Automated Document Generation',
    color: '#2563EB',
    colorRgb: '37,99,235',
    lightBg: '#EFF6FF',
    icon: 'ri-file-add-line',
    description: 'Instantly create complex legal, technical, and regulatory documents for solar projects.',
    bullets: [
      { icon: 'ri-file-text-line', text: 'NSS Agreement & WCR' },
      { icon: 'ri-file-text-line', text: 'JIR & DCR Undertaking' },
      { icon: 'ri-file-text-line', text: 'ALMM Declaration & Commissioning Cert' },
      { icon: 'ri-map-pin-line', text: '6 States: TANGEDCO, BESCOM, MSEDCL, TSSPDCL, UPPCL, GETCO' },
    ],
    statusLabel: 'Auto-generating',
    metric: { val: '6', label: 'Doc Types' },
  },
  {
    id: '02',
    tag: 'VALIDATION',
    heading: 'Intelligent Compliance Validation',
    color: '#10B981',
    colorRgb: '16,185,129',
    lightBg: '#ECFDF5',
    icon: 'ri-shield-check-line',
    description: 'Replace manual spot-checks with precise, rule-based digital auditing before submission.',
    bullets: [
      { icon: 'ri-user-line', text: 'Name match: E-bill vs. Bank Cheque' },
      { icon: 'ri-bank-line', text: 'Bank Statement: PDF-only, 6-month period' },
      { icon: 'ri-calendar-check-line', text: 'ITR Assessment Year verification' },
      { icon: 'ri-map-2-line', text: 'Mandatory Geo-tag presence check' },
    ],
    statusLabel: 'Validating live',
    metric: { val: '4', label: 'Rule Checks' },
  },
  {
    id: '03',
    tag: 'EXTRACTION',
    heading: 'Data Extraction & Categorization',
    color: '#F59E0B',
    colorRgb: '245,158,11',
    lightBg: '#FFFBEB',
    icon: 'ri-scan-line',
    description: 'Pull data from messy PDFs and auto-categorize for streamlined liaison workflows.',
    bullets: [
      { icon: 'ri-id-card-line', text: 'KYC docs: UIDAI, PAN & more' },
      { icon: 'ri-money-rupee-circle-line', text: 'Finance: ITR, Bank Stmt, JS Approval' },
      { icon: 'ri-links-line', text: 'Liaison: TFR Ack, E-token, Commissioning Cert' },
      { icon: 'ri-robot-line', text: 'AI-powered, high-precision extraction' },
    ],
    statusLabel: 'Extracting & routing',
    metric: { val: '3', label: 'Categories' },
  },
];

const TICKER_ITEMS = [
  { icon: 'ri-file-check-line', color: '#2563EB', text: 'NSS Agreement generated for TANGEDCO' },
  { icon: 'ri-shield-check-line', color: '#10B981', text: 'Bank statement validated — PDF, 6-month ✓' },
  { icon: 'ri-scan-line', color: '#F59E0B', text: 'KYC package extracted — UIDAI + PAN matched' },
  { icon: 'ri-file-check-line', color: '#2563EB', text: 'ALMM Declaration auto-filled for BESCOM' },
  { icon: 'ri-shield-check-line', color: '#10B981', text: 'Geo-tag presence verified for site docs' },
  { icon: 'ri-scan-line', color: '#F59E0B', text: 'TFR Acknowledgment routed to liaison queue' },
  { icon: 'ri-file-check-line', color: '#2563EB', text: 'Commissioning Certificate ready — MSEDCL' },
  { icon: 'ri-shield-check-line', color: '#10B981', text: 'ITR Assessment Year verified — FY 2024-25' },
];

function LiveTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const item = TICKER_ITEMS[index];

  return (
    <div className="flex items-center gap-2.5 overflow-hidden">
      <div
        className="transition-all duration-300"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)' }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
            style={{ background: `${item.color}18` }}
          >
            <i className={`${item.icon} text-[10px]`} style={{ color: item.color }} />
          </div>
          <span className="text-[10px] text-gray-500 font-inter truncate">{item.text}</span>
        </div>
      </div>
    </div>
  );
}

function AnimatedProgressBar({ color, delay = 0 }: { color: string; delay?: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setWidth(Math.floor(Math.random() * 30) + 65);
    }, delay + 600);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className="h-0.5 w-full bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${width}%`,
          background: `linear-gradient(90deg, ${color}80, ${color})`,
        }}
      />
    </div>
  );
}

function FloatingParticles({ color }: { color: string }) {
  const particles = [
    { size: 3, x: 15, y: 20, dur: 3.2, delay: 0 },
    { size: 2, x: 75, y: 60, dur: 4.1, delay: 0.8 },
    { size: 2.5, x: 45, y: 80, dur: 3.7, delay: 1.5 },
    { size: 2, x: 85, y: 30, dur: 4.5, delay: 0.3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: color,
            animation: `floatUp ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

function ProductCard({ p, idx, visible }: { p: typeof PRODUCTS[0]; idx: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [bulletVisible, setBulletVisible] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    if (visible) {
      p.bullets.forEach((_, bi) => {
        setTimeout(() => {
          setBulletVisible((prev) => {
            const next = [...prev];
            next[bi] = true;
            return next;
          });
        }, idx * 150 + bi * 120 + 500);
      });
    }
  }, [visible, idx, p.bullets]);

  return (
    <div
      className="relative flex-1 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`,
      }}
    >
      {/* Arrow connector */}
      {idx < PRODUCTS.length - 1 && (
        <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 flex-col items-center">
          <div
            className="w-7 h-px"
            style={{ background: `linear-gradient(90deg, ${p.color}60, ${PRODUCTS[idx + 1].color}60)` }}
          />
          <div
            className="w-0 h-0 -mt-px"
            style={{
              borderTop: '3px solid transparent',
              borderBottom: '3px solid transparent',
              borderLeft: `5px solid ${PRODUCTS[idx + 1].color}80`,
            }}
          />
        </div>
      )}

      {/* Card */}
      <div
        className="relative flex flex-col h-full rounded-2xl bg-white overflow-hidden cursor-default transition-all duration-400"
        style={{
          border: `1px solid ${hovered ? p.color + '40' : p.color + '20'}`,
          boxShadow: hovered
            ? `0 12px 40px rgba(${p.colorRgb},0.14), 0 0 0 1px ${p.color}20`
            : `0 2px 16px rgba(${p.colorRgb},0.06)`,
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FloatingParticles color={p.color} />

        {/* Top gradient bar */}
        <div
          className="h-1 w-full transition-all duration-300"
          style={{
            background: hovered
              ? `linear-gradient(90deg, ${p.color}, ${p.color}cc, ${p.color})`
              : `linear-gradient(90deg, ${p.color}50, ${p.color}90)`,
          }}
        />

        <div className="p-5 flex flex-col gap-3.5 flex-1 relative z-10">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1.5">
              <span
                className="text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full font-inter w-fit"
                style={{ background: `${p.color}12`, color: p.color }}
              >
                PRODUCT {p.id} — {p.tag}
              </span>
              <h3 className="text-[12px] font-bold text-gray-800 font-inter leading-snug max-w-[130px]">
                {p.heading}
              </h3>
            </div>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
              style={{
                background: hovered ? p.color : `${p.color}15`,
              }}
            >
              <i
                className={`${p.icon} text-base transition-colors duration-300`}
                style={{ color: hovered ? '#fff' : p.color }}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-[10.5px] text-gray-500 font-inter leading-relaxed">
            {p.description}
          </p>

          {/* Progress bar */}
          <AnimatedProgressBar color={p.color} delay={idx * 200} />

          {/* Divider */}
          <div className="h-px" style={{ background: `${p.color}15` }} />

          {/* Bullets */}
          <ul className="flex flex-col gap-2 flex-1">
            {p.bullets.map((b, bi) => (
              <li
                key={bi}
                className="flex items-start gap-2"
                style={{
                  opacity: bulletVisible[bi] ? 1 : 0,
                  transform: bulletVisible[bi] ? 'translateX(0)' : 'translateX(-8px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
              >
                <div
                  className="w-4.5 h-4.5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${p.color}12`, minWidth: '18px', minHeight: '18px' }}
                >
                  <i className={`${b.icon} text-[9px]`} style={{ color: p.color }} />
                </div>
                <span className="text-[10.5px] text-gray-600 font-inter leading-snug">{b.text}</span>
              </li>
            ))}
          </ul>

          {/* Metric chip */}
          <div
            className="flex items-center justify-between pt-2.5 mt-auto"
            style={{ borderTop: `1px solid ${p.color}15` }}
          >
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: p.color, animation: 'pulse 2s ease-in-out infinite' }}
              />
              <span className="text-[9.5px] font-medium font-inter" style={{ color: p.color }}>
                {p.statusLabel}
              </span>
            </div>
            <div
              className="flex items-center gap-1 px-2 py-0.5 rounded-full"
              style={{ background: `${p.color}10` }}
            >
              <span className="text-[11px] font-bold font-outfit" style={{ color: p.color }}>{p.metric.val}</span>
              <span className="text-[9px] text-gray-400 font-inter">{p.metric.label}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductSuiteInfographic() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Also trigger on mount for hero visibility
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Header badge */}
      <div
        className="text-center mb-5 transition-all duration-500"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-10px)' }}
      >
        <div className="inline-flex items-center gap-2 bg-[#2563EB]/6 border border-[#2563EB]/15 rounded-full px-4 py-1.5 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
          <span className="text-[10px] font-bold text-[#2563EB] font-inter tracking-widest uppercase">Zennova Product Suite</span>
        </div>
        <p className="text-[10px] text-gray-400 font-inter tracking-wide">Precision · Compliance · Speed</p>
      </div>

      {/* Three columns */}
      <div className="relative flex flex-col lg:flex-row gap-3 items-stretch">
        {PRODUCTS.map((p, idx) => (
          <ProductCard key={p.id} p={p} idx={idx} visible={visible} />
        ))}
      </div>

      {/* Bottom live ticker strip */}
      <div
        className="mt-3 border border-gray-100 rounded-xl bg-[#F8FAFC] px-4 py-2.5 flex items-center gap-4 overflow-hidden transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(10px)',
          transitionDelay: '0.6s',
        }}
      >
        {/* Left: pipeline label */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-md bg-[#2563EB] flex items-center justify-center">
            <span className="text-white text-[9px] font-bold font-outfit">Z</span>
          </div>
          <span className="text-[9.5px] font-semibold text-gray-500 font-inter whitespace-nowrap">Live Activity</span>
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-gray-200 shrink-0" />

        {/* Ticker */}
        <div className="flex-1 min-w-0">
          <LiveTicker />
        </div>

        {/* Right: status */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[9.5px] text-[#10B981] font-medium font-inter whitespace-nowrap">All live</span>
        </div>
      </div>

      {/* Workflow flow strip */}
      <div
        className="mt-2 flex items-center justify-center gap-1.5 flex-wrap transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transitionDelay: '0.75s',
        }}
      >
        {['Generate', '→', 'Validate', '→', 'Extract', '→', 'Submit'].map((step, i) => (
          <span
            key={i}
            className={`text-[9.5px] font-inter ${
              step === '→'
                ? 'text-gray-300'
                : i === 0
                ? 'text-[#2563EB] font-semibold'
                : i === 2
                ? 'text-[#10B981] font-semibold'
                : i === 4
                ? 'text-[#F59E0B] font-semibold'
                : 'text-gray-500 font-semibold'
            }`}
          >
            {step}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0px) scale(1); opacity: 0.3; }
          100% { transform: translateY(-12px) scale(1.3); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
