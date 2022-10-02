import ImagePlaceholder from '../../assets/image-placeholder.png'
import test from '../../assets/test11.jpg'
import test2 from '../../assets/test12.jpg'
import test3 from '../../assets/test13.jpg'
import lsu from '../../assets/lsu-logo.png'

const Masonry = (): JSX.Element => {
  return (
    <>
      <div className='container mx-auto my-10 py-20'>
        <div className='gap-10 gap-y-10 columns-3'>
          <img className='w-full h-80' src={test} />
          <img className='aspect-auto w-full h-80' src={ImagePlaceholder} />
          <img className='aspect-video w-full h-80' src={test} />
          <img className='aspect-square w-100 h-auto' src={ImagePlaceholder} />
          <img className='aspect-square w-full h-auto' src={test2} />
          <img className='aspect-square w-full h-80' src={ImagePlaceholder} />
          <img className='aspect-square w-full h-auto' src={test2} />
          <img className='aspect-square w-full h-auto' src={test2} />
          <img className='aspect-video w-full h-80' src={test} />
          <img className='aspect-square w-full h-auto' src={ImagePlaceholder} />
          <img className='aspect-square w-full h-auto' src={test3} />
          <img className='aspect-square w-full h-auto' src={test2} />
          <img className='aspect-square w-full h-auto' src={ImagePlaceholder} />
          <img className='aspect-square w-full h-auto' src={test} />
        </div>
      </div>
    </>
  )
}

export default Masonry
