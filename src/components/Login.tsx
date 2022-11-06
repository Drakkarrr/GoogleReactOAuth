import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { client } from '../services/client'

//! Google authentication login
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from '@react-oauth/google'

//! Assets
import backgroundVideo from '../assets/backgroundVideo.mp4'
import LSULogo from '../assets/lsu-logo.png'

const Login = (): JSX.Element => {
  const navigate = useNavigate()

  const onSuccess = (response: CredentialResponse): void => {
    const userObject = jwt_decode(response.credential as string)
    console.log(userObject)
    localStorage.setItem('user', JSON.stringify(userObject))

    const { name, sub, picture } = userObject as any
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    }

    console.log(doc)

    client.createIfNotExists(doc).then(() => {
      navigate('/dashboard', { replace: true })
      console.log('User successfully created!')
    })
  }

  const onError = (): void => {
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
              width='180px'
              alt='La Photograpia official logo'
            />
          </div>
          <div className='shadow-2xl'>
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
            >
              <GoogleLogin
                size='large'
                onSuccess={onSuccess}
                onError={onError}
              />
            </GoogleOAuthProvider>
          </div>

          {/* <div className='shadow-2xl mt-6 bg-white cursor-pointer text-black p-4 rounded-lg'>
            <button>Continue as Guest</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Login
