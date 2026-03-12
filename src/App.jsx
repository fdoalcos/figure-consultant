import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageWrapper({ children }) {
  return <div className="page-fade">{children}</div>
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/"              element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/work"          element={<PageWrapper><Work /></PageWrapper>} />
          <Route path="/work/:slug"    element={<PageWrapper><CaseStudyDetail /></PageWrapper>} />
          <Route path="/pricing"       element={<PageWrapper><Pricing /></PageWrapper>} />
          <Route path="/about"         element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact"       element={<PageWrapper><Contact /></PageWrapper>} />
          {/* backward compat */}
          <Route path="/case-studies"       element={<PageWrapper><Work /></PageWrapper>} />
          <Route path="/case-studies/:slug" element={<PageWrapper><CaseStudyDetail /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
