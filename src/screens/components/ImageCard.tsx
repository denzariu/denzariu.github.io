
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

}

function ImageCard(obj: ImageCardProps) {
  return (
    <InView 
      threshold={0.2}
      trackVisibility
      triggerOnce
      delay={200}
    >
    {({ inView, ref }) => (
    <div ref={ref} 
      className={`h-48 sm:h-auto self-center sm:flex-1
                group hover:translate-x-8
                transform-gpu hover:z-10  sm:hover:translate-x-0  
                hover:scale-105 sm:hover:scale-125 xl:hover:scale-150
                transition-all duration-300 ${inView ? 'translate-y-0 opacity-1' : 'translate-y-16 opacity-0' }`}
        
    >
      <img className={" rounded-lg w-full group-hover:border-2 shadow-it " + (obj.border === true ? "border-2 border-white" : "")} 
        src={obj.image} 
        alt={obj.desc} 
      />
      
      {/* Links */}
      <div className='hidden absolute top-1 right-1 rounded-full overflow-hidden
        group-hover:space-x-1 group-hover:flex bg-slate-800 has-[a]:p-[0.2rem]
        *:h-8 *:w-8 sm:*:h-8 sm:*:w-8 *:rounded-full *:group-hover:p-[0.3rem] *:bg-white'
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
    </div>
    )}
    </InView>
  )
}

export default ImageCard