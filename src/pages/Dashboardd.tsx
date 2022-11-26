import React from 'react'
import { UserProfile, Sidebar, PostFeed } from '../components/dashboard'

const Dashboardd = () => {
  return (
    <>
      <UserProfile />
      <Sidebar />
      <PostFeed />
      <div className='text-white font-extrabold text-7xl pl-8'>
        <div>Dashboard</div>
      </div>
    </>
  )
}

export default Dashboardd
