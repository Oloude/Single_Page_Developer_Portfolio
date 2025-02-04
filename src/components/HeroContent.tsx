 

function HeroContent() {
  return (
    <div className="flex flex-col gap-8 md:basis-1/2 md:order-1 md:items-start md:self-center md:gap-0">
        <h1 className="text-[40px] text-white font-bold text-center md:text-left md:text-[72px] md:leading-[72px] md:max-w-[14ch] md:-mr-20 md:mb-15 md:z-50 md:relative md:tracking-[-2.05px] lg:text-extra lg:max-w-[30ch] lg:-mr-60">Nice to meet you! I'm  <span className="relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-green after:-bottom-2 after:left-0 md:after:h-1.5 lg:after:-bottom-4">Adam Keyes</span>.</h1>
        <p className="text-base text-grey text-center leading-[26px] font-medium md:text-left md:text-body md:mb-8.5 md:max-w-[448px] md:-mr-10"> Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love. </p>
        <button className="text-base text-white self-center text-center leading-[26px] font-bold uppercase relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green after:-bottom-2.5 after:left-0 md:self-start hover:text-green">Contact me</button>
    </div>
  )
}

export default HeroContent