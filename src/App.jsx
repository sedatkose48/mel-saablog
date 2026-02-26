import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './lib/supabase'

import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Upload from './pages/Upload'
import BackgroundFx from './components/BackgroundFx'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // Mevcut oturumu al
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // Oturum değişikliklerini dinle
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <Router>
      <BackgroundFx />
      <div className="app-container">
        <Header user={session?.user} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={session ? <Navigate to="/" /> : <Login />} />
          <Route path="/upload" element={session ? <Upload user={session.user} /> : <Navigate to="/login" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
