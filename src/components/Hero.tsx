import Header from "./Header"
import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"
import circle from '../assets/pattern-circle.svg'
import rings from '../assets/pattern-rings.svg'

 

function Hero() {
  return (
    <section className="relative px-4 md:px-7.5 lg:px-41">
        <Header/>
        <div className="flex flex-col md:flex-row">
        <HeroImage/>
        <HeroContent/>
        </div>
        <img src={circle} alt="" className="absolute right-0 translate-x-1/2 top-64 w-[129px] h-[129px] z-50 md:top-[430px] lg:right-[480px] lg:translate-0 lg:top-[490px]"/>
        <img src={rings} alt="" className="absolute left-0 -translate-x-1/2 top-32 w-[520px] h-[129px] md:top-16 lg:-translate-x-1/5 lg:top-40"/>
    </section>
  )
}

export default Hero