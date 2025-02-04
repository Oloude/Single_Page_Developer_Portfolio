import Skill from "./Skill"

 

function Skills() {
  return (
    <section className="py-10 border-y border-y-grey mx-4 grid grid-cols-1 grid-rows-6 gap-6 md:mx-7.5 md:grid-cols-2 md:border-y-0 md:border-t md:grid-rows-3 lg:mx-41 lg:py-18 lg:grid-cols-3 lg:grid-rows-2">
        <Skill title="HTML" desc="4 Years Experience" />
        <Skill title="CSS" desc="4 Years Experience" />
        <Skill title="JavaScript" desc="4 Years Experience" />
        <Skill title="Accessibility" desc="4 Years Experience" />
        <Skill title="React" desc="3 Years Experience" />
        <Skill title="Sass" desc="3 Years Experience" />
    </section>
  )
}
  

export default Skills