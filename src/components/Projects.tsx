 import projectOneSmall from '../assets/thumbnail-project-1-small.webp'
 import projectOneLarge from '../assets/thumbnail-project-1-large.webp'
 import projectTwoSmall from '../assets/thumbnail-project-2-small.webp'
 import projectTwoLarge from '../assets/thumbnail-project-2-large.webp'
 import projectThreeSmall from '../assets/thumbnail-project-3-small.webp'
 import projectThreeLarge from '../assets/thumbnail-project-3-large.webp'
 import projectFourSmall from '../assets/thumbnail-project-4-small.webp'
 import projectFourLarge from '../assets/thumbnail-project-4-large.webp'
 import projectFiveSmall from '../assets/thumbnail-project-5-small.webp'
 import projectFiveLarge from '../assets/thumbnail-project-5-large.webp'
 import projectSixSmall from '../assets/thumbnail-project-6-small.webp'
 import projectSixLarge from '../assets/thumbnail-project-6-large.webp'
import Project from './Project'

function Projects() {
  return (
    <section className="px-4 md:px-7.5 lg:px-41 flex flex-col gap-10">
      <div className="flex justify-between items-center ">
        <h2 className="text-white text-[40px] font-bold lg:text-extra">Projects </h2>
        <button className="text-base text-white  leading-[26px] font-bold uppercase relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green after:-bottom-2.5 after:left-0 hover:text-green">Contact me</button>
      </div>
      <div className='grid grid-cols-1 grid-rows-6 gap-8 md:gap-y-15 md:gap-x-5.5 md:grid-cols-2 md:grid-rows-3 lg:gap-y-17 lg:gap-x-7.5'>
        <Project imgS={projectOneSmall} imgL={projectOneLarge} arr={['HTML', 'CSS']} title='Design portfolio' btn1='View project ' btn2='View code' />
        <Project imgS={projectTwoSmall} imgL={projectTwoLarge} arr={['HTML', 'CSS']} title='E-learning landing page' btn1='View project ' btn2='View code' />
        <Project imgS={projectThreeSmall} imgL={projectThreeLarge} arr={['HTML', 'CSS', 'JavaScript ']} title='Todo web app' btn1='View project ' btn2='View code' />
        <Project imgS={projectFourSmall} imgL={projectFourLarge} arr={['HTML', 'CSS', 'JavaScript ']} title='Entertainment web app' btn1='View project ' btn2='View code' />
        <Project imgS={projectFiveSmall} imgL={projectFiveLarge} arr={['HTML', 'CSS', 'JavaScript ']} title='Memory Game ' btn1='View project ' btn2='View code' />
        <Project imgS={projectSixSmall} imgL={projectSixLarge} arr={['HTML', 'CSS', 'JavaScript ']} title=' Art gallery showcase ' btn1='View project ' btn2='View code' />
      </div>
    </section>
  )
}

export default Projects