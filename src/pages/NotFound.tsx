import { Link } from 'react-router-dom'

const NotFound = (): JSX.Element => {
  return (
    <h1 className='h-24 flex justify-center items-center mt-20 bg-gray-700 text-white font-semibold'>
      Page Not Found!
      <Link className='text-black' to='/'>
        GO HOME
      </Link>
    </h1>
  )
}

export default NotFound
