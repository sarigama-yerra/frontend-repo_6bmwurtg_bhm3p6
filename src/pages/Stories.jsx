import Navbar from '../components/Navbar'
import { StoriesGrid, StoryView } from '../components/Stories'

export function StoriesIndex() {
  return (
    <div className="bg-[#0b1411] min-h-screen">
      <Navbar />
      <StoriesGrid />
    </div>
  )
}

export function StoryPage({ slug }) {
  return (
    <div className="bg-[#0b1411] min-h-screen">
      <Navbar />
      <StoryView slug={slug} />
    </div>
  )
}
