import React, { useState, useRef, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'

import { Sidebar, UserProfile } from '../components'
import { userQuery } from '../utils/helpers/data'
import { client } from '../services/client'
import Pins from './Pins'
import logo from '../assets/camera.png'

const Home: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean | any>(false)
  const [user, setUser] = useState<any | string>()
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
    scrollRef.current.scrollTo(0, 0)
  })

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar
          setToggleSidebar={function (
            value: React.SetStateAction<boolean>,
          ): void {
            throw new Error('Function not implemented.')
          }}
          closeToggle={undefined}
          user={undefined}
        />
      </div>

      <div className='flex md:hidden flex-row'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
          <HiMenu
            fontSize={40}
            className='cursor-pointer'
            onClick={() => setToggleSidebar(true)}
          />
          <Link to='/' className='w-28'>
            <img src={logo} alt='logo' className='w-28' />
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
            <div className='absolute w-full flex justify-end items-center p-2'>
              <AiFillCloseCircle
                fontSize={30}
                className='cursor-pointer'
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar
              closeToggle={setToggleSidebar}
              user={user && user}
              setToggleSidebar={function (
                value: React.SetStateAction<boolean>,
              ): void {
                throw new Error('Function not implemented.')
              }}
            />
          </div>
        )}
      </div>
      <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
        <Routes>
          <Route path='/user-profile/:userId' element={<UserProfile />} />
          <Route path='/*' element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home
