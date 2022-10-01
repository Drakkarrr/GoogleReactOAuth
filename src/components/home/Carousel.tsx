import React from 'react'
import styled from 'styled-components'
import Glider, { GliderMethods } from 'react-glider'
import 'glider-js/glider.min.css'

import Test11 from '../../assets/test11.jpg'
import Test12 from '../../assets/test12.jpg'
import Test13 from '../../assets/test13.jpg'

const PaneExample: React.FC<PaneProps> = ({ children, style, className }) => (
  <div className={`glider-slide ${className}`} style={style}>
    <h1>{children}</h1>
  </div>
)

const Carousel = (): JSX.Element => {
  const gliderRef = React.useRef<GliderMethods>(null)

  return (
    <>
      <StyledCarousel className='text-white'>
        <Glider
          draggable
          hasDots
          slidesToShow={1}
          slidesToScroll={1}
          ref={gliderRef}
          className='glider w-5/12 h-auto'
        >
          <PaneExample>
            <img src={Test11} alt='example11' />
          </PaneExample>
          <PaneExample>
            <img src={Test12} alt='example12' />
          </PaneExample>
          <PaneExample>
            <img src={Test13} alt='example13' />
          </PaneExample>
        </Glider>
        {/* <button onClick={() => gliderRef.current?.destroy()}>
          Show moreeee!
        </button> */}
      </StyledCarousel>
    </>
  )
}

const StyledCarousel = styled.div`
  height: auto;
  width: 100%;
  color: white;
  font-size: 5rem;
  background: url('../../assets/test1.jpg');
  /* img {
    width: 90vw;
    height: 90%;
  } */
`

export default Carousel
