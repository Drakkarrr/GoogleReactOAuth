import Carousel from '../components/home/Carousel'
import Intro from '../components/home/Intro'
import Hero from '../components/home/Hero'
import Masonry from '../components/home/Masonry'
import FeaturedShots from '../components/home/FeaturedShots'

export const Homepage = () => {
  return (
    <>
      <Intro />
      <Carousel />
      <Hero />
      <Masonry />
      <FeaturedShots />
      <Hero />
    </>
  )
}
