import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import { StoriesIndex, StoryPage } from './pages/Stories'
import AdminPage from './pages/Admin'

function StoryRouteWrapper() {
  const { slug } = useParams()
  return <StoryPage slug={slug} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/stories" element={<StoriesIndex />} />
        <Route path="/stories/:slug" element={<StoryRouteWrapper />} />
        <Route path="/app/posts" element={<AdminPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
