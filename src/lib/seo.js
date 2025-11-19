export function useSEO(post) {
  // This is a simple helper to set document.title and meta tags.
  // In a production app, consider react-helmet-async.
  if (typeof document === 'undefined') return
  const title = post?.seoTitle || post?.title || 'Beneath the Uniform — Real Stories from IDF Soldiers'
  const description = post?.seoDescription || post?.excerpt || 'Raw, unfiltered experiences from IDF soldiers. Identity, faith, miracles, and the real cost of service.'
  document.title = title

  setMeta('description', description)
  setOG('og:title', title)
  setOG('og:description', description)
  setOG('og:type', post ? 'article' : 'website')
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name='${name}']`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOG(name, content) {
  let el = document.querySelector(`meta[property='${name}']`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
