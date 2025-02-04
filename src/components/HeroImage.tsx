 import heroM from '../assets/image-profile-mobile.webp'
 import heroD from '../assets/image-profile-desktop.webp'
 import heroT from '../assets/image-profile-tablet.webp'

function HeroImage() {
  return (
    <div className='flex justify-center relative z-30 -translate-y-18 md:basis-1/2 md:order-2 md:translate-x-17 md:justify-normal md:w-full right-0 lg:w-auto lg:justify-end'>
        <picture className='md:w-full  lg:w-auto'>
            <source media="(min-width:1440px )" srcSet={heroD} />
            <source media="(min-width: 768px)" srcSet={heroT} />
            <img src={heroM} alt="" className='min-w-[174px]  h-[383px] md:h-[600px] md:w-full lg:h-[720px] lg:min-w-[442px]'/>
        </picture>
    </div>
  )
}

export default HeroImage