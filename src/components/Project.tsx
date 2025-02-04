import { useState } from "react"
import ProjectSkill from "./ProjectSkill"

type ProjectProps = {
    arr : string[],
    imgS : string,
    imgL : string,
    title : string,
    btn1 : string,
    btn2 : string
}
 
function Project({arr, imgS, imgL, title, btn1, btn2} : ProjectProps) {
    const [hovered, setHovered] = useState(false)

    function toggleHover(){
        setHovered(prev => !prev)
    }
  return (
    <div className=" flex flex-col gap-5 relative">
        <picture  onMouseOver={toggleHover} onMouseOut={toggleHover} className={`${hovered ? 'bg-black/20 mix-blend-overlay' : ''}`}>
            <source media="(min-width: 1440px)" srcSet={imgL} />
            <img src={imgS} alt="" className="w-full h-[253px] lg:h-[400px]"/>
        </picture>
        <div className="flex flex-col gap-2">
        <h4 className="text-medium text-white font-bold uppercase">{title}</h4>
        <div className="flex gap-4.5 items-center">
            {arr.map(item => <ProjectSkill skill={item} key={item}/>)}
        </div>
        </div>
        <div className={`${hovered ? 'absolute top-20 flex-col left-1/2 -translate-x-1/2' : ''} flex items-center gap-7.5 lg:hidden`}>
            <p className="text-base text-white uppercase font-bold tracking-wider relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green after:-bottom-2.5 after:left-0 ">{btn1}</p>
            <p className="text-base text-white uppercase font-bold tracking-wider relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green after:-bottom-2.5 after:left-0 ">{btn2}</p>
        </div>
    </div>
  )
}

export default Project