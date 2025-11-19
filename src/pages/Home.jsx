import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Mission, TruthVsPropaganda, HowToHelp } from '../components/Sections'
import { FeaturedStories } from '../components/Stories'

export default function Home() {
  return (
    <div className="bg-[#0b1411] min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <TruthVsPropaganda />
      <FeaturedStories />
      <HowToHelp />
    </div>
  )
}
