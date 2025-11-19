import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PostService } from '../services/posts'
import { useSEO } from '../lib/seo'

export default function SEOInit() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.startsWith('/stories/')) {
      const slug = location.pathname.split('/').pop()
      const post = PostService.getBySlug(slug)
      useSEO(post)
    } else {
      useSEO()
    }
  }, [location.pathname])

  return null
}
