import Spline from '@splinetool/react-spline'
import { useMemo } from 'react'

export default function Hero() {
  const sceneUrl = useMemo(() => 'https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode', [])

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 flex min-h-[80vh] items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Beneath the Uniform
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
              The war didn’t end when we came home
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              Real stories from IDF soldiers—raw, unfiltered, human. We\'re not the monsters they say we are. We\'re fathers, daughters, friends, and believers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#stories" className="px-5 py-3 rounded-lg bg-gradient-to-r from-[#6d8a5e] to-[#ab8863] text-white font-medium shadow hover:opacity-90 transition">
                Read Stories
              </a>
              <a href="/app/posts" className="px-5 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
                Contribute a Story
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1411] via-transparent to-transparent" />
    </section>
  )
}
