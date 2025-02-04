 type SkillProps = {
    title : string,
    desc : string
 }


function Skill({title, desc} : SkillProps) {
  return (
    <div className="flex flex-col items-center gap-0.5 md:items-start md:gap-3.5">
        <h3 className="text-white text-[40px] text-center font-bold md:text-left md:text-large">{title}</h3>
        <p className="text-grey text-base text-center font-medium md:text-left md:text-body">{desc}</p>
    </div>
  )
}

export default Skill