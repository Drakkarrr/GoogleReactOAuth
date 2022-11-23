import React from 'react'
import Masonry from 'react-masonry-css'
import Pin from './Pin'

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

interface MasonryLayoutProps {
  pins: any
  className?: string
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ pins }) => (
  <Masonry
    className='flex animate-slide-fwd'
    breakpointCols={breakpointColumnsObj}
  >
    {pins?.map(pin => (
      <Pin className='w-max' key={pin._id} pin={pin} />
    ))}
  </Masonry>
)

export default MasonryLayout
