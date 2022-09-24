import React from 'react'
import styled from 'styled-components'
import Glider, { GliderMethods } from 'react-glider'
import 'glider-js/glider.min.css'

import Test1 from '../../assets/test1.jpg'
import Test2 from '../../assets/test2.jpg'
import Test3 from '../../assets/test3.jpg'

const PaneExample: React.FC<PaneProps> = ({ children, style, className }) => (
  <div className={`glider-slide ${className}`} style={style}>
    <h1>{children}</h1>
  </div>
)

export const Carousel = (): JSX.Element => {
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
          className='glider'
        >
          <PaneExample>
            <img src={Test2} alt='example1' />
          </PaneExample>
          <PaneExample>
            <img src={Test1} alt='example2' />
          </PaneExample>
          <PaneExample>
            <img src={Test3} alt='example3' />
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
  height: 100vh;
  width: 100%;
  color: white;
  font-size: 5rem;
  background: url('../../assets/test1.jpg');
  background-color: red;
  img {
    width: 90vw;
    height: 90%;
  }
`
