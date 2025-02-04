 type PSProps = {
    skill : string
 }

function ProjectSkill({skill} : PSProps) {
  return (
    <div className="text-body text-grey uppercase font-bold">{skill}</div>
  )
}

export default ProjectSkill