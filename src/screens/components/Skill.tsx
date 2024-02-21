type SkillProps = {
  title?: string,
  logo: JSX.Element
}

function Skill(skill: SkillProps) {

  return (
    <div className=" relative
      w-20 h-20 p-3 lg:p-4 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-gray-800 to-[#36335e]
      hover:animate-[pulse_0.7s_ease-in-out] flex flex-col justify-center items-center
    ">
      
      {skill.logo}
      <p className="absolute bottom-1 text-lg bg-[#36335e] text-[#61DBFB] z-10">
        {skill.title}
      </p>
    </div>
    
  )
}

export default Skill