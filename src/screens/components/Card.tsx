import { InView } from "react-intersection-observer"


type CardProps = {
  title: string,
  description: string,
  image?: string,
  buttonText: string,
  buttonAction: () => void
}

function Card({title, description, image}: CardProps) {
 

  return (
    <InView 
      threshold={0.3}
      trackVisibility
      triggerOnce
      delay={200}
    >
    {({ inView, ref }) => (
    <div ref={ref} 
      className={`max-w-sm sm:flex-[0.34] border rounded-lg shadow bg-gray-800 border-gray-700 
        shadow-it 
        hover:bg-gradient-to-tr from-gray-800 to-[#282646] hover:scale-105 hover:border-purple-900
        transition-all duration-300 ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-16' }`}
    >
      
      <div className="p-5 h-full flex flex-col justify-between ">

          <div className="">
            <a className="self-center flex-1">
                <img className="rounded-t-lg p-5 w-full rounded-full" src={image} alt="" />
            </a>
            <a>
                <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                  {title}
                </h5>
            </a>
            <p className="mb-3 font-normal tracking-tight text-gray-400">
              {description}
            </p>
          </div>

          {/* <div className="self-bottom self-start">
            <a href="#" className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {buttonText}
                <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}

      </div>
    </div>
    )}
    </InView>
    )
}

export default Card