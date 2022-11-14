import React, { useEffect } from 'react'
import RootLayout from './shared/components/layouts/RootLayout'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'

const App = (): JSX.Element => {
  const navigate = useNavigate()

  useEffect(() => {
    const User =
      localStorage.getItem('user') !== 'undefined'
        ? JSON.parse(localStorage.getItem('user') as string)
        : localStorage.clear()

    if (!User) navigate('/login')
  }, [navigate])

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
