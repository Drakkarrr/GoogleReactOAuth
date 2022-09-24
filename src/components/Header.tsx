import React, { Fragment } from 'react'
import styled from 'styled-components'
import camera from '../assets/camera.png'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '/about-us', current: false },
    { name: 'Organizations', href: '/organizations', current: false },
    { name: 'Collections', href: '/collections', current: false },
    { name: 'Featured', href: '/featured', current: false },
  ]

  const classNames = (...classes: unknown[]) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <StyledHeader className='shadow-xl'>
        <Disclosure as='nav' className='h-full w-11/12 grid place-items-center'>
          {({ open }) => (
            <>
              <div className='mx-auto h-full w-full'>
                <div className='relative flex h-full items-center justify-between'>
                  <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                    {/* Mobile menu button*/}
                    <Disclosure.Button className='inline-flex lg:items-center lg:justify-center rounded-md p-2 text-white hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                      <span className='sr-only'>Login as</span>
                      {open ? (
                        <XMarkIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      ) : (
                        <Bars3Icon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>

                  <div className='flex justify-center m-auto sm:items-stretch h-full w-full'>
                    <div className='flex flex-shrink-0 justify-center  items-center w-96'>
                      <img
                        className='hidden h-24 w-auto lg:block'
                        src={camera}
                        alt='Your Company'
                      />
                      <span className='text-2xl text-white font-bold'>
                        La Photographia
                      </span>
                      <img
                        className='block h-8 w-auto lg:hidden'
                        src={camera}
                        alt='La Photographia official logo'
                      />
                    </div>

                    <div className='hidden sm:ml-6 sm:block lg:m-auto'>
                      <div className='flex space-x-4'>
                        {navigation.map(item => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'border border-green-400 text-white'
                                : 'text-gray-300 hover:bg-green-400 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                    <Menu as='div' className='relative ml-3'>
                      <div>
                        <Menu.Button className='flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-400 '>
                          <span className='sr-only'>Open user menu</span>
                          <svg
                            className='h-8 w-8 bg-transparent rounded-full text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                          </svg>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700',
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700',
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700',
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='sm:hidden'>
                <div className='space-y-1 px-2 pt-2 pb-3'>
                  {navigation.map(item => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </StyledHeader>
    </>
  )
}

export default Header

const StyledHeader = styled.div`
  height: 8rem;
  width: 100%;
  margin: auto !important;
  background: #087830;
`
