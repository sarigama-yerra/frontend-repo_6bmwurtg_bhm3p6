import { PostService } from '../services/posts'

export function FeaturedStories() {
  const posts = PostService.getAll().slice(0, 3)
  return (
    <section id="stories" className="py-16 bg-[#0e1713] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif">Featured Stories</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a key={p.id} href={`/stories/${p.slug}`} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[16/10] bg-black/20" style={{backgroundImage:`url(${p.image})`, backgroundSize:'cover', backgroundPosition:'center'}} />
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider text-white/70">{p.category}</span>
                <h3 className="mt-2 text-xl font-semibold group-hover:underline">{p.title}</h3>
                <p className="mt-2 text-white/80 line-clamp-2">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StoriesGrid() {
  const posts = PostService.getAll()
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl md:text-4xl font-serif">All Stories</h1>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <a key={p.id} href={`/stories/${p.slug}`} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-[16/10] bg-black/20" style={{backgroundImage:`url(${p.image})`, backgroundSize:'cover', backgroundPosition:'center'}} />
            <div className="p-5">
              <span className="text-xs uppercase tracking-wider text-white/70">{p.category}</span>
              <h3 className="mt-2 text-xl font-semibold group-hover:underline">{p.title}</h3>
              <p className="mt-2 text-white/80 line-clamp-2">{p.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export function StoryView({ slug }) {
  const post = PostService.getBySlug(slug)
  if (!post) {
    return <div className="max-w-3xl mx-auto px-6 py-10 text-white">Story not found.</div>
  }
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <article className="max-w-3xl mx-auto px-6 py-10 text-white">
      <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/20" style={{backgroundImage:`url(${post.image})`, backgroundSize:'cover', backgroundPosition:'center'}} />
      <div className="mt-6 text-xs uppercase tracking-wider text-white/70">{post.category}</div>
      <h1 className="mt-1 text-3xl md:text-4xl font-serif">{post.title}</h1>
      <p className="mt-2 text-white/80">{post.excerpt}</p>
      <div className="prose prose-invert mt-6" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
      <div className="mt-8 flex gap-3">
        <a target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20">Share on LinkedIn</a>
        <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}%20—%20Beneath%20the%20Uniform`} className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20">Share on X</a>
        <button onClick={() => navigator.clipboard.writeText(shareUrl)} className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6d8a5e] to-[#ab8863] text-white">Copy Link</button>
      </div>
    </article>
  )
}
