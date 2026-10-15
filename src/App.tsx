import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { BackToTopButton } from './components/BackToTopButton'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'

const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })))
const DeleteAccountPage = lazy(() => import('./pages/DeleteAccountPage').then((m) => ({ default: m.DeleteAccountPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-page text-text-primary">
        <Header />
        <main className="flex-1">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/terminos" element={<TermsPage />} />
              <Route path="/privacidad" element={<PrivacyPage />} />
              <Route path="/eliminar-cuenta" element={<DeleteAccountPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <BackToTopButton />
    </BrowserRouter>
  )
}
