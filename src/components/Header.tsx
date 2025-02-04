import twitter from '../assets/icon-twitter.svg'
import github from '../assets/icon-github.svg'
import linkedin from '../assets/icon-linkedin.svg'
import frontendmentor from '../assets/icon-frontend-mentor.svg'

function Header() {
  return (
    <header className='flex flex-col gap-5 items-center relative z-50  md:flex-row md:justify-between'>
      <p className='text-medium text-white text-center font-bold md:text-[32px]'>adamkeyes</p>
      <div className='flex items-center gap-6.5 md:gap-8 '>
        <img src={github} alt="" className='w-5 h-5 md:w-6 md:h-6'/>
        <img src={frontendmentor} alt="" className='w-5 h-5 md:w-6 md:h-6'/>
        <img src={linkedin} alt="" className='w-5 h-5 md:w-6 md:h-6'/>
        <img src={twitter} alt="" className='w-5 h-5 md:w-6 md:h-6'/>
      </div>
    </header>
  )
}

export default Header