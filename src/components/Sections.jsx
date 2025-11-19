export function Mission() {
  return (
    <section id="mission" className="py-16 bg-[#0b1411] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif">Mission Statement</h2>
          <p className="mt-4 text-white/80">
            The world calls us monsters. We\'re showing them who we really are. This platform exists to counter misinformation by sharing the human stories behind the uniform: faith, sacrifice, miracles, and the cost of service.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Stat label="Reached" value="50K+" />
          <Stat label="Engagements" value="2.5K+" />
          <Stat label="Growth" value="100%" />
          <Stat label="Stories" value="Growing" />
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="text-white/70">{label}</div>
    </div>
  )
}

export function TruthVsPropaganda() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0b1411] to-[#0e1713] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 border border-emerald-500/20 bg-emerald-500/5">
          <h3 className="text-2xl font-semibold">Reality</h3>
          <ul className="list-disc ml-5 mt-3 space-y-2 text-white/85">
            <li>Fathers, daughters, and students serving with conviction</li>
            <li>Faith that persists in the dark</li>
            <li>Moments of mercy in the fog of war</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 border border-red-500/20 bg-red-500/5">
          <h3 className="text-2xl font-semibold">Propaganda</h3>
          <ul className="list-disc ml-5 mt-3 space-y-2 text-white/85">
            <li>Dehumanizing labels</li>
            <li>Clipped narratives without context</li>
            <li>Erased acts of compassion</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function HowToHelp() {
  return (
    <section id="help" className="py-16 bg-[#0e1713] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <HelpCard title="Hire Speakers" desc="Bring firsthand stories to your community or organization." cta="Book" href="#" />
        <HelpCard title="Donate" desc="Support production, editing, and distribution so truth reaches further." cta="Donate" href="#" />
        <HelpCard title="Share" desc="Spread stories on your social platforms to fight misinformation." cta="Share" href="/stories" />
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 text-white/70 text-sm">
        Sponsored by <a className="underline" href="https://webfused.com" target="_blank" rel="noreferrer">WebFused</a>
      </div>
    </section>
  )
}

function HelpCard({ title, desc, cta, href }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-2 text-white/80 flex-1">{desc}</p>
      <a href={href} className="mt-4 inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-[#6d8a5e] to-[#ab8863] text-white w-max">{cta}</a>
    </div>
  )
}
