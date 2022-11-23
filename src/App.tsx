import React, { useState, useEffect } from 'react'
import RootLayout from './shared/components/layouts/RootLayout'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
import OrganizationsPage from './pages/OrganizationsPage'

const App: React.FC = () => {
  // const [user, setUser] = useState<null | string>(null)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   const User =
  //     localStorage.getItem('user') !== 'undefined'
  //       ? JSON.parse(localStorage.getItem('user') as string)
  //       : localStorage.clear()
  //   setUser(User)

  //   if (!user) navigate('/')
  // }, [navigate])

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/organizations' element={<OrganizationsPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
