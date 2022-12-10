import { useState, useRef, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'

import { UserProfile, Sidebar } from '../components'
import Pins from './Pins'
import { userQuery } from '../utils/helpers/data'
import { client } from '../services/client'
import Logo from '../assets/lsu-logo.png'

const Dashboardd = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)
  const [user, setUser] = useState<any | null>(null)
  const scrollRef = useRef(null)

  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user') as string)
      : localStorage.clear()

  useEffect(() => {
    const query = userQuery(userInfo?.sub)
    client.fetch(query).then(data => {
      setUser(data[0])
    })
  }, [])

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='flex bg-slate-400 md:flex-row flex-col transition-height duration-75 ease-out'>
        <div className='hidden md:flex h-screen flex-initial'>
          <Sidebar user={user && user} />
        </div>
        <div className='flex md:hidden flex-row'>
          <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
            <HiMenu
              fontSize={40}
              className='cursor-pointer'
              onClick={() => setToggleSidebar(true)}
            />
            <Link to='/dashboard'>
              <img src={Logo} alt='Official logo' className='w-28' />
            </Link>
            <Link to={`user-profile/${user?._id}`}>
              <img
                src={user?.image}
                alt='user-pic'
                className='w-9 h-9 rounded-full '
              />
            </Link>
          </div>
          {toggleSidebar && (
            <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
              <div className='absolute w-full flex justify-end items-centerp-2'>
                <AiFillCloseCircle
                  fontSize={30}
                  className='cursor-pointer'
                  onClick={() => setToggleSidebar(false)}
                />
              </div>
              <Sidebar user={user && user} closeToggle={setToggleSidebar} />
            </div>
          )}
        </div>

        <div
          className='pb-2 flex-1 h-screen overflow-y-scroll text-white'
          ref={scrollRef}
        >
          <Routes>
            <Route path='/user-profile/:userId' element={<UserProfile />} />
            <Route path='*' element={<Pins user={user} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Dashboardd
