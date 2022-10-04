import styled from 'styled-components'
import PlaceHolder from '../../assets/image-placeholder.png'

const FeaturedShots = () => {
  return (
    <>
      <div className='container h-full mx-auto py-20'>
        <StyledFeaturedShots>
          <div className='image-container'>
            <img src={PlaceHolder} alt='placeholder' />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              nihil quasi similique, ea voluptas quibusdam eum ex cumque dolorum
              maiores recusandae dicta sit inventore non perspiciatis ab
              veritatis incidunt eveniet impedit obcaecati veniam. Perspiciatis
              assumenda voluptatibus quidem id, eaque ex voluptatem libero culpa
              a et minima recusandae blanditiis dolore tempore suscipit
              quibusdam provident omnis facilis obcaecati, quasi accusamus illum
              sequi. Ducimus excepturi repellat architecto sequi minima veniam
              corporis a beatae dolore fugiat! Voluptatibus, in ratione?
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              nihil quasi similique, ea voluptas quibusdam eum ex cumque dolorum
              maiores recusandae dicta sit inventore non perspiciatis ab
              veritatis incidunt eveniet impedit obcaecati veniam. Perspiciatis
              assumenda voluptatibus quidem id, eaque ex voluptatem libero culpa
              a et minima recusandae blanditiis dolore tempore suscipit
              quibusdam provident omnis facilis obcaecati, quasi accusamus illum
              sequi. Ducimus excepturi repellat architecto sequi minima veniam
              corporis a beatae dolore fugiat! Voluptatibus, in ratione?
            </p>
          </div>
          <div>
            <img src={PlaceHolder} alt='placeholder' />
          </div>
          <div>
            <img src={PlaceHolder} alt='placeholder' />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              nihil quasi similique, ea voluptas quibusdam eum ex cumque dolorum
              maiores recusandae dicta sit inventore non perspiciatis ab
              veritatis incidunt eveniet impedit obcaecati veniam. Perspiciatis
              assumenda voluptatibus quidem id, eaque ex voluptatem libero culpa
              a et minima recusandae blanditiis dolore tempore suscipit
              quibusdam provident omnis facilis obcaecati, quasi accusamus illum
              sequi. Ducimus excepturi repellat architecto sequi minima veniam
              corporis a beatae dolore fugiat! Voluptatibus, in ratione?
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              nihil quasi similique, ea voluptas quibusdam eum ex cumque dolorum
              maiores recusandae dicta sit inventore non perspiciatis ab
              veritatis incidunt eveniet impedit obcaecati veniam. Perspiciatis
              assumenda voluptatibus quidem id, eaque ex voluptatem libero culpa
              a et minima recusandae blanditiis dolore tempore suscipit
              quibusdam provident omnis facilis obcaecati, quasi accusamus illum
              sequi. Ducimus excepturi repellat architecto sequi minima veniam
              corporis a beatae dolore fugiat! Voluptatibus, in ratione?
            </p>
          </div>
          <div>
            <img src={PlaceHolder} alt='placeholder' />
          </div>
          <div>
            <img src={PlaceHolder} alt='placeholder' />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              nihil quasi similique, ea voluptas quibusdam eum ex cumque dolorum
              maiores recusandae dicta sit inventore non perspiciatis ab
              veritatis incidunt eveniet impedit obcaecati veniam. Perspiciatis
              assumenda voluptatibus quidem id, eaque ex voluptatem libero culpa
              a et minima recusandae blanditiis dolore tempore suscipit
              quibusdam provident omnis facilis obcaecati, quasi accusamus illum
              sequi. Ducimus excepturi repellat architecto sequi minima veniam
              corporis a beatae dolore fugiat! Voluptatibus, in ratione?
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              nihil quasi similique, ea voluptas quibusdam eum ex cumque dolorum
              maiores recusandae dicta sit inventore non perspiciatis ab
              veritatis incidunt eveniet impedit obcaecati veniam. Perspiciatis
              assumenda voluptatibus quidem id, eaque ex voluptatem libero culpa
              a et minima recusandae blanditiis dolore tempore suscipit
              quibusdam provident omnis facilis obcaecati, quasi accusamus illum
              sequi. Ducimus excepturi repellat architecto sequi minima veniam
              corporis a beatae dolore fugiat! Voluptatibus, in ratione?
            </p>
          </div>
          <div>
            <img src={PlaceHolder} alt='placeholder' />
          </div>
        </StyledFeaturedShots>
      </div>
    </>
  )
}

export default FeaturedShots

const StyledFeaturedShots = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 11px;
  place-items: center;
  color: white;
`
