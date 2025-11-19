import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl backdrop-blur-md bg-[#0c1511]/60 border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6d8a5e] to-[#ab8863]" />
              <span className="font-semibold text-white">Beneath the Uniform</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-white/90">
              <a href="/stories" className="hover:text-white">Stories</a>
              <a href="#mission" className="hover:text-white">Mission</a>
              <a href="#help" className="hover:text-white">How to Help</a>
              <a href="/app/posts" className="hover:text-white">Admin</a>
            </nav>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-4 text-white/90 space-y-2">
              <a href="/stories" className="block">Stories</a>
              <a href="#mission" className="block">Mission</a>
              <a href="#help" className="block">How to Help</a>
              <a href="/app/posts" className="block">Admin</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
