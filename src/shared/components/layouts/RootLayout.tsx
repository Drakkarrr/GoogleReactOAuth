import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
  return (
    <>
      <div className='root-layout__content'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default RootLayout
