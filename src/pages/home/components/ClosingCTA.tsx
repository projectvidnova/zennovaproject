import { useState, FormEvent } from 'react';

const ROLES = ['Project Developer', 'EPC Contractor', 'Liaison Engineer', 'Consultant', 'Other'];

export default function ClosingCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'access' | 'demo'>('demo');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const form = e.currentTarget;
    const formId = form.id;
    const action = formId === 'early-access-form'
      ? 'https://readdy.ai/api/form/d740ivj41deorl02ejpg'
      : 'https://readdy.ai/api/form/d740ivj41deorl02ejq0';

    try {
      const data = new URLSearchParams(new FormData(form) as unknown as URLSearchParams);
      await fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 lg:px-10 bg-[#F8FAFC] border-t border-gray-100 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Copy */}
          <div className="flex flex-col gap-7 lg:pt-4">
            <div>
              <p className="text-xs font-medium text-gray-400 font-inter uppercase tracking-widest mb-3">Get Started</p>
              <h2 className="font-outfit font-800 text-4xl lg:text-5xl text-gray-900 tracking-tight leading-[1.1]">
                Move at the<br />
                <span className="text-[#2563EB]">speed of light.</span>
              </h2>
              <p className="mt-5 text-base text-gray-500 font-inter leading-relaxed max-w-md">
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
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                    <i className={`${item.icon} text-[#2563EB] text-sm`} />
                  </div>
                  <span className="text-sm text-gray-600 font-inter">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400 font-inter">Already used by teams at</p>
              <div className="flex items-center gap-6 mt-3">
                {['NTPC Solar', 'Torrent Power', 'ReNew Energy', 'SB Energy'].map((co) => (
                  <span key={co} className="text-xs font-medium text-gray-400 font-outfit">{co}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-gray-100 rounded-2xl bg-white p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                  <i className="ri-check-line text-[#10B981] text-xl" />
                </div>
                <p className="font-outfit font-600 text-lg text-gray-900">You're on the list!</p>
                <p className="text-sm text-gray-500 font-inter max-w-xs">
                  We'll be in touch within 24 hours to set up your personalized demo or early access onboarding.
                </p>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="flex bg-[#F8FAFC] rounded-xl p-1 mb-6 gap-1">
                  {([['demo', 'Schedule a Demo'], ['access', 'Get Early Access']] as const).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium font-inter cursor-pointer transition-all duration-200 whitespace-nowrap ${
                        activeTab === key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'
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
                      <label className="text-xs font-medium text-gray-500 font-inter">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        required
                        placeholder="Arjun Mehta"
                        className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-inter text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#2563EB]/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-gray-500 font-inter">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="arjun@company.in"
                        className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-inter text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#2563EB]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 font-inter">Company</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Solar EPC / Developer name"
                      className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-inter text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#2563EB]/50 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 font-inter">Your Role</label>
                    <select
                      name="role"
                      required
                      className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-inter text-gray-900 focus:outline-none focus:border-[#2563EB]/50 transition-colors bg-white cursor-pointer"
                    >
                      <option value="">Select your role</option>
                      {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  {activeTab === 'demo' && (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-gray-500 font-inter">What's your biggest challenge? (optional)</label>
                      <textarea
                        name="challenge"
                        maxLength={500}
                        rows={2}
                        placeholder="e.g., Managing TANGEDCO submissions across 8 projects..."
                        className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-inter text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#2563EB]/50 transition-colors resize-none"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="whitespace-nowrap w-full bg-[#2563EB] text-white py-3 rounded-xl text-sm font-semibold font-inter cursor-pointer hover:bg-[#1d4ed8] transition-colors duration-200 disabled:opacity-60 mt-1"
                  >
                    {loading ? 'Submitting...' : activeTab === 'demo' ? 'Schedule a Demo →' : 'Get Early Access →'}
                  </button>

                  <p className="text-[11px] text-gray-400 font-inter text-center">
                    No commitment required. We'll contact you within 24 hours.
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
