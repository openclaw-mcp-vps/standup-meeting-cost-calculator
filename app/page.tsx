export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Engineering Managers &amp; CTOs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate the Real Cost of<br />
          <span className="text-[#58a6ff]">Team Meetings</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing. Track meeting frequency, duration, and attendee salaries to see exactly how much your recurring standups and syncs cost your company — in real dollars.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Saving — $9/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. No credit card surprises.</p>

        {/* Mini demo stat strip */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            { value: "$24,000", label: "avg. annual standup cost" },
            { value: "3 hrs", label: "lost per engineer weekly" },
            { value: "62%", label: "of meetings deemed unnecessary" },
          ].map((s) => (
            <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited meeting tracking",
              "Per-attendee salary inputs",
              "Weekly &amp; monthly cost reports",
              "Export to CSV",
              "Priority support",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the cost calculation work?",
              a: "You enter each meeting's duration, frequency, and each attendee's annual salary. We compute the blended hourly rate and multiply by meeting time to give you an accurate per-meeting and annual cost.",
            },
            {
              q: "Is my salary data stored securely?",
              a: "Salary data is stored locally in your browser by default. Nothing sensitive is sent to our servers unless you opt into cloud sync.",
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes — cancel anytime from your Lemon Squeezy customer portal. You keep access until the end of your billing period.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Standup Cost Calculator. All rights reserved.
      </footer>
    </main>
  )
}
