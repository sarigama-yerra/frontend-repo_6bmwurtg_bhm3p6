import { useMemo, useState } from 'react'
import { PostService } from '../services/posts'

const emptyPost = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: 'Identity & Faith',
  tags: [],
  author: 'Admin',
  image: '',
  publishedAt: new Date().toISOString(),
  status: 'draft',
  seoTitle: '',
  seoDescription: '',
}

export default function AdminPanel() {
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(emptyPost)
  const posts = useMemo(() => PostService.getAllAdmin(), [editing])

  const onEdit = (p) => {
    setEditing(p.id)
    setForm(p)
  }
  const onDelete = (id) => {
    if (confirm('Delete this post?')) {
      PostService.remove(id)
      setEditing(null)
      setForm(emptyPost)
    }
  }
  const onSave = () => {
    if (!form.slug) {
      setForm({ ...form, slug: slugify(form.title) })
    }
    PostService.save({ ...form })
    setEditing(null)
    setForm(emptyPost)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl md:text-4xl font-serif">Admin — Posts</h1>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">All Posts</h2>
            <button onClick={() => { setEditing(null); setForm(emptyPost) }} className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6d8a5e] to-[#ab8863] text-white">New</button>
          </div>
          <div className="mt-4 space-y-3">
            {posts.map((p) => (
              <div key={p.id} className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-white/70">/{p.slug} • {p.status}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => onEdit(p)} className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20">Edit</button>
                  <button onClick={() => onDelete(p.id)} className="px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-200">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Editor</h2>
          <div className="mt-4 space-y-4">
            <Input label="Title" value={form.title} onChange={(v) => setForm({ ...form, title: v, slug: slugify(v) })} />
            <Input label="Slug" value={form.slug} onChange={(v) => setForm({ ...form, slug: v })} />
            <Input label="Excerpt" value={form.excerpt} onChange={(v) => setForm({ ...form, excerpt: v })} />
            <Textarea label="Content" value={form.content} onChange={(v) => setForm({ ...form, content: v })} />
            <Input label="Category" value={form.category} onChange={(v) => setForm({ ...form, category: v })} />
            <Input label="Tags (comma separated)" value={form.tags.join(', ')} onChange={(v) => setForm({ ...form, tags: v.split(',').map(s=>s.trim()).filter(Boolean) })} />
            <Input label="Author" value={form.author} onChange={(v) => setForm({ ...form, author: v })} />
            <Input label="Featured Image URL" value={form.image} onChange={(v) => setForm({ ...form, image: v })} />
            <Input label="Publish Date" value={form.publishedAt} onChange={(v) => setForm({ ...form, publishedAt: v })} />
            <Select label="Status" value={form.status} onChange={(v) => setForm({ ...form, status: v })} options={[{value:'draft',label:'Draft'},{value:'published',label:'Published'}]} />
            <Input label="SEO Title" value={form.seoTitle} onChange={(v) => setForm({ ...form, seoTitle: v })} />
            <Input label="SEO Description" value={form.seoDescription} onChange={(v) => setForm({ ...form, seoDescription: v })} />
            <div className="flex gap-2">
              <button onClick={onSave} className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6d8a5e] to-[#ab8863] text-white">Save</button>
              <a href={`/stories/${form.slug}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">Preview</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Input({ label, value, onChange }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <input value={value} onChange={(e)=>onChange(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 outline-none" />
    </label>
  )
}
function Textarea({ label, value, onChange }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <textarea rows={8} value={value} onChange={(e)=>onChange(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 outline-none" />
    </label>
  )
}
function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 outline-none">
        {options.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  )
}

function slugify(str='') {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}
