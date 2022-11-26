import React from 'react'
import RootLayout from './shared/components/layouts/RootLayout'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
import OrganizationsPage from './pages/OrganizationsPage'

const App: React.FC = () => {
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
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/dashboard/*' element={<Dashboard />} /> */}
      </Routes>
    </>
  )
}

export default App
