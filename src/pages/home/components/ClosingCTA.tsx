import { useState, useEffect, FormEvent } from 'react';

const ROLES = ['Project Developer', 'EPC Contractor', 'Liaison Engineer', 'Consultant', 'Other'];

export default function ClosingCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'access' | 'demo'>('demo');

  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent).detail;
      if (tab === 'access' || tab === 'demo') setActiveTab(tab);
    };
    window.addEventListener('switch-form-tab', handler);
    return () => window.removeEventListener('switch-form-tab', handler);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('_subject', activeTab === 'demo' ? 'New Demo Request - Zennova' : 'New Early Access Request - Zennova');
    formData.append('_template', 'table');

    try {
      const res = await fetch('https://formsubmit.co/ajax/adithyasai7979@gmail.com', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 lg:px-10 w-full relative overflow-hidden">
      {/* Bold blue gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 40%, #1d4ed8 70%, #1e3a8a 100%)' }}
      />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Copy */}
          <div className="flex flex-col gap-7 lg:pt-4">
            <div>
              <p className="text-xs font-semibold text-white/50 font-inter uppercase tracking-widest mb-3">Get Started</p>
              <h2 className="font-outfit font-extrabold text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
                Move at the<br />
                <span className="text-[#6ee7b7]">speed of light.</span>
              </h2>
              <p className="mt-5 text-base text-white/70 font-inter leading-relaxed max-w-md">
                Join forward-thinking EPCs and solar developers who are replacing manual liaison workflows with intelligent automation.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: 'ri-flashlight-line', text: 'Live in under 24 hours—no setup required' },
                { icon: 'ri-team-line', text: 'Dedicated onboarding for your project portfolio' },
                { icon: 'ri-lock-2-line', text: 'Enterprise-grade security and data privacy' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <i className={`${item.icon} text-white/80 text-sm`} />
                  </div>
                  <span className="text-sm text-white/80 font-inter">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-white/15">
              <p className="text-xs text-white/40 font-inter mb-3">Already used by teams at</p>
              <div className="flex flex-wrap items-center gap-4">
                {['NTPC Solar', 'Torrent Power', 'ReNew Energy', 'SB Energy'].map((co) => (
                  <span key={co} className="text-xs font-semibold text-white/50 font-outfit border border-white/10 px-3 py-1.5 rounded-lg">{co}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-white/15 rounded-2xl bg-white/10 backdrop-blur-sm p-8 shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center">
                  <i className="ri-check-line text-[#6ee7b7] text-2xl" />
                </div>
                <p className="font-outfit font-bold text-xl text-white">You&apos;re on the list!</p>
                <p className="text-sm text-white/60 font-inter max-w-xs">
                  We&apos;ll be in touch within 24 hours to set up your personalized demo or early access onboarding.
                </p>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="flex bg-white/10 rounded-xl p-1 mb-6 gap-1">
                  {([['demo', 'Schedule a Demo'], ['access', 'Get Early Access']] as const).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold font-inter cursor-pointer transition-all duration-200 whitespace-nowrap ${
                        activeTab === key ? 'bg-white text-gray-900 shadow-sm' : 'text-white/60 hover:text-white/80'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <form
                  id={activeTab === 'access' ? 'early-access-form' : 'demo-form'}
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-white/60 font-inter">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        required
                        placeholder="Arjun Mehta"
                        className="border border-white/20 rounded-xl px-3.5 py-2.5 text-sm font-inter text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors bg-white/10 backdrop-blur-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-white/60 font-inter">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="arjun@company.in"
                        className="border border-white/20 rounded-xl px-3.5 py-2.5 text-sm font-inter text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors bg-white/10 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/60 font-inter">Company</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Solar EPC / Developer name"
                      className="border border-white/20 rounded-xl px-3.5 py-2.5 text-sm font-inter text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors bg-white/10 backdrop-blur-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/60 font-inter">Your Role</label>
                    <select
                      name="role"
                      required
                      className="border border-white/20 rounded-xl px-3.5 py-2.5 text-sm font-inter text-white focus:outline-none focus:border-white/40 transition-colors bg-[#1d4ed8] cursor-pointer"
                    >
                      <option value="">Select your role</option>
                      {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  {activeTab === 'demo' && (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-white/60 font-inter">What&apos;s your biggest challenge? (optional)</label>
                      <textarea
                        name="challenge"
                        maxLength={500}
                        rows={2}
                        placeholder="e.g., Managing TANGEDCO submissions across 8 projects..."
                        className="border border-white/20 rounded-xl px-3.5 py-2.5 text-sm font-inter text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none bg-white/10 backdrop-blur-sm"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="whitespace-nowrap w-full bg-white text-[#2563EB] py-3.5 rounded-xl text-sm font-bold font-inter cursor-pointer hover:bg-white/90 transition-all duration-200 disabled:opacity-60 mt-1 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                  >
                    {loading ? 'Submitting...' : activeTab === 'demo' ? 'Schedule a Demo →' : 'Get Early Access →'}
                  </button>

                  <p className="text-[11px] text-white/40 font-inter text-center">
                    No commitment required. We&apos;ll contact you within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
