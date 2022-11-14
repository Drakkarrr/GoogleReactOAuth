import React, { useState, useRef, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'

import { Sidebar, UserProfile } from '../components/dashboard'
import { userQuery } from '../utils/helpers/data'
// import { categories } from '../utils/helpers/categories'

import { client } from '../services/client'
import GalleryPage from './GalleryPage'
import Logo from '../assets/camera.png'
1
type User = {
  name: string
  _userId: string | number
  image: string
  closeToggle: boolean
}

const Dashboard: React.FC<User> = (): JSX.Element => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const scrollRef = useRef(null)

  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user') as string)
      : localStorage.clear()

  useEffect(() => {
    const query = userQuery(userInfo?.sub)
    console.log(query)
    client.fetch(query).then(data => {
      setUser(data[0])
    })
  }, [userInfo?.sub])

  useEffect(() => {
    if (scrollRef.current) {
      scrollTo(0, 0)
    }
  })

  // useEffect(() => {
  //   if (user === undefined) {
  //     const userInfo = localStorage.getItem('user')
  //     return setUser(JSON.parse(userInfo as any))
  //   } else {
  //     localStorage.clear()
  //   }
  // }, [])

  const handleSidebar = (): void => {
    setToggleSidebar(!toggleSidebar)
  }

  return (
    <>
      <div className='flex bg-green-200 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
        <div className='hidden md:flex h-screen flex-initial'>
          <Sidebar />
        </div>
        <div className='flex md:hidden flex-row'>
          <HiMenu
            className='cursor-pointer'
            fontSize={40}
            onClick={handleSidebar}
          />
          <Link to='/'>
            <img src={Logo} alt='logo' className='w-30 h-20' />
          </Link>

          <Link to={`user-profile/${user?._userId}`}>
            <img
              src={user?.image}
              alt='user-pic'
              className='w-9 h-9 rounded-full '
            />
          </Link>
        </div>
        {toggleSidebar && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute w-full flex justify-end items-center p-2'>
              <AiFillCloseCircle
                fontSize={30}
                className='cursor-pointer'
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} user={user && user} />
          </div>
        )}
      </div>
      <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
        <Routes>
          <Route path='/user-profile/:userId' element={<UserProfile />} />
          <Route
            path='/gallery-page'
            element={<GalleryPage user={user && user} />}
          />
        </Routes>
      </div>
    </>
  )
}

export default Dashboard
