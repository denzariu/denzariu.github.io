type SkillProps = {
  title?: string,
  logo: JSX.Element
}

function Skill(skill: SkillProps) {

  return (
    <div className="
      w-20 h-20 p-3 rounded-3xl bg-gradient-to-br from-gray-800 to-[#36335e]
      hover:animate-[pulse_0.7s_ease-in-out] flex justify-center
    ">
      {skill.logo}
    </div>
  )
}

export default Skill