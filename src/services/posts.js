// Post service with localStorage persistence and easy swap to API/Supabase
// Schema: { id, title, slug, excerpt, content, category, tags, author, image, publishedAt, status, seoTitle, seoDescription }

const STORAGE_KEY = 'btu_posts_v1'

const samplePosts = [
  {
    id: '1',
    title: 'What It Means to Be a Jew',
    slug: 'what-it-means-to-be-a-jew',
    excerpt:
      'Standing watch at 3 AM in Gaza... I wrapped tefillin in a warzone because my commitment to God doesn\'t pause for conflict.',
    content:
      'Standing watch at 3 AM in Gaza... I wrapped tefillin in a warzone because my commitment to God doesn\'t pause for conflict. This is about identity that doesn\'t bend to fear. It\'s about showing up as a Jew, even when the world calls you a monster.',
    category: 'Identity & Faith',
    tags: ['identity', 'faith', 'service'],
    author: 'Anonymous IDF Soldier',
    image:
      'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop',
    publishedAt: '2024-01-10T08:00:00.000Z',
    status: 'published',
    seoTitle: 'What It Means to Be a Jew — Beneath the Uniform',
    seoDescription:
      'An honest reflection on Jewish identity and faith in wartime from an IDF soldier.',
  },
  {
    id: '2',
    title: 'Inches From Death',
    slug: 'inches-from-death',
    excerpt:
      'That bullet was inches from my friend\'s neck. The gun jammed after ONE shot. Divine intervention.',
    content:
      'That bullet was inches from my friend\'s neck. The gun jammed after one shot. We train for everything, but you can\'t train for miracles. Some things you survive because you were meant to tell the story.',
    category: 'Miracles & Providence',
    tags: ['miracle', 'providence', 'war'],
    author: 'Anonymous IDF Soldier',
    image:
      'https://images.unsplash.com/photo-1504608245011-62d96b5c22e9?q=80&w=1600&auto=format&fit=crop',
    publishedAt: '2024-02-15T10:00:00.000Z',
    status: 'published',
    seoTitle: 'Inches From Death — Beneath the Uniform',
    seoDescription:
      'A frontline account of a near-death moment and a weapon malfunction that felt like a miracle.',
  },
  {
    id: '3',
    title: 'The Business I Lost to War',
    slug: 'the-business-i-lost-to-war',
    excerpt:
      'I had employees. Clients. A future. October 7th took everything. But my family is alive.',
    content:
      'I had employees. Clients. A future. October 7th took everything. Mobilization meant pausing the life I built. This is the cost of service people don\'t see—lost revenue, lost momentum, but not lost purpose.',
    category: 'Coming Home',
    tags: ['family', 'sacrifice', 'rebuilding'],
    author: 'Anonymous IDF Soldier',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    publishedAt: '2024-03-20T09:00:00.000Z',
    status: 'published',
    seoTitle: 'The Business I Lost to War — Beneath the Uniform',
    seoDescription:
      'An entrepreneur\'s candid story about service, loss, and rebuilding after the call to duty.',
  },
]

function init() {
  const existing = localStorage.getItem(STORAGE_KEY)
  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(samplePosts))
  }
}

function getAll() {
  init()
  const posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  return posts.filter((p) => p.status === 'published').sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

function getAllAdmin() {
  init()
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

function getBySlug(slug) {
  init()
  const posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  return posts.find((p) => p.slug === slug)
}

function save(post) {
  init()
  const posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  if (post.id) {
    const idx = posts.findIndex((p) => p.id === post.id)
    if (idx !== -1) posts[idx] = post
  } else {
    post.id = String(Date.now())
    posts.push(post)
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  return post
}

function remove(id) {
  init()
  const posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  const next = posts.filter((p) => p.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
}

export const PostService = { getAll, getBySlug, save, remove, getAllAdmin }
