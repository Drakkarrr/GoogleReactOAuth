import ImagePlaceholder from '../../assets/image-placeholder.png'
import test from '../../assets/test11.jpg'
import test2 from '../../assets/test12.jpg'
import test3 from '../../assets/test13.jpg'
// import lsu from '../../assets/lsu-logo.png'

const Masonry = (): JSX.Element => {
  return (
    <>
      <div className='container mx-auto my-10 py-20'>
        <div className='gap-6 columns-3'>
          <img className='w-full h-80' src={test} />
          <img
            className='aspect-auto w-full h-80 mt-10'
            src={ImagePlaceholder}
          />
          <img className='aspect-video w-full h-80 mt-6' src={test} />
          <img
            className='aspect-square w-100 h-auto mt-6'
            src={ImagePlaceholder}
          />
          <img className='aspect-square w-full h-auto mt-7' src={test2} />
          <img
            className='aspect-square w-full h-80 mt-3'
            src={ImagePlaceholder}
          />
          <img className='aspect-square w-full h-auto mt-4' src={test2} />
          <img className='aspect-square w-full h-auto mt-6' src={test2} />
          <img className='aspect-video w-full h-80 mt-3' src={test} />
          <img
            className='aspect-square w-full h-auto mt-7'
            src={ImagePlaceholder}
          />
          <img className='aspect-square w-full h-auto mt-10' src={test3} />
          <img className='aspect-square w-full h-auto mt-8' src={test2} />
          <img
            className='aspect-square w-full h-auto mt-6'
            src={ImagePlaceholder}
          />
          <img className='aspect-square w-full h-auto mt-8' src={test} />
        </div>
      </div>
    </>
  )
}

export default Masonry
