import React from 'react'
import { useNavigate } from 'react-router-dom'

//! Google authentication login
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from '@react-oauth/google'

//! Assets
import backgroundVideo from '../assets/backgroundVideo.mp4'
import LSULogo from '../assets/lsu-logo.png'

const Login: React.FC = () => {
  const navigate = useNavigate()

  const onSuccess = (response: CredentialResponse) => {
    console.log(`Successfully login: ${response.credential}`)
    navigate('/dashboard')
  }
  const onError = () => {
    console.log('Login failed')
  }

  return (
    <div className='h-screen flex flex-col items-center justify-start'>
      <div className='w-full h-full relative'>
        <video
          src={backgroundVideo}
          typeof='video/mp4'
          loop
          muted
          controls={false}
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='flex flex-col justify-center items-center absolute top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img
              src={LSULogo}
              width='150px'
              alt='La Photograpia official logo'
            />
          </div>
          <div className='shadow-2xl'>
            <GoogleOAuthProvider clientId='389526293867-1pegkn0qiqisbi5vp5sc3q5ong2pgm0s.apps.googleusercontent.com'>
              <GoogleLogin
                useOneTap
                size='large'
                onSuccess={onSuccess}
                onError={onError}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
