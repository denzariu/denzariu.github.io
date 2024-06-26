
import { InView } from 'react-intersection-observer'
import {SVGS} from '../../assets/svgs/index'

type ImageCardProps = {
  image: string,
  desc: string,
  border?: boolean,

  // Links
  link?: string,
  github?: string,
  playstore?: string,

  technologies?: {style: string, name: string}[]
}

function ImageCard(obj: ImageCardProps) {
  return (
    <InView 
      threshold={0.85}
      trackVisibility
      delay={100}
    >
    {({ inView, ref }) => (
    <div ref={ref} 
      className={`h-48 sm:h-auto sm:max-w-[35vw] self-center sm:flex-1
                group hover:translate-x-8
                transform-gpu hover:z-10  sm:hover:translate-x-0  
                hover:scale-105 sm:hover:scale-125 2xl:hover:scale-150 
                transition-all duration-300 before:transition-all before:duration-1000 before:ease-in-out before:h-full before:w-full before:left-0 before:top-0 sm:before:absolute before:z-0
                 ${inView ? '' : ' sm:before:bg-[#00000033]  before:backdrop-blur-sm' }`}
        
    >
      <img className={"rounded-lg w-full group-hover:border-2 shadow-it border-white " + (obj.border === true ? "border-2 " : "")} 
        src={obj.image} 
        alt={obj.desc} 
      />
      
      {/* Links */}
      <div className='hidden absolute top-1.5 right-1.5 rounded-full overflow-hidden
        group-hover:space-y-1 group-hover:flex flex-col  has-[a]:p-[0.1rem] bg-slate-200
        *:h-8 *:w-8 sm:*:h-6 sm:*:w-6 md:*:h-6 md:*:w-6 lg:*:h-8 lg:*:w-8 *:rounded-full *:group-hover:p-[0.3rem] *:bg-white'
      >
        {obj.github &&
          <a href={obj.github}>
            <div children={SVGS.github} />
          </a>
        }
        {obj.playstore &&
          <a href={obj.playstore}>
            <div children={SVGS.playstore} />
          </a>
        }
        {obj.link && 
          <a href={obj.link}>
            <div children={SVGS.external} />
          </a>
        }
        
      </div>

      {/* Stack used */}
      <div className='absolute flex top-0  justify-center space-x-2'>
        {obj.technologies?.map((item) => 
          <p key={obj.image + item.name} 
            className={item.style + ' rounded-b-full rounded-l-[1.75rem] px-4 text-xs py-0.5'}
          >
            {item.name}
          </p>
        )}
      </div>
    </div>
    )}
    </InView>
  )
}

export default ImageCard