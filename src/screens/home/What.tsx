import m_1 from '../../assets/image/p_mobile_1.png'
import m_2 from '../../assets/image/p_mobile_2.png'
import m_3 from '../../assets/image/p_mobile_3.png'
import w_1 from '../../assets/image/p_web_1.png'
import w_2 from '../../assets/image/p_web_2.png'
import w_3 from '../../assets/image/p_web_3.png'

import ImageCard from '../components/ImageCard'


function What() {
  return (
    <div id="what">
      <div className="relative isolate px-6 pt-0 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
  
        {/* Header & description */}
        <div className="mx-auto max-w-4xl pt-48 sm:py-64 lg:py-64 xl:py-72 !pb-40">
          <div className='lg:max-w-xl'>
            <div className='text-6xl text-left font-bold tracking-tight text-gray-900 sm:text-7xl'>
              What.
            </div>
            <p className="mt-4 mx-2 text-lg leading-8 text-gray-600">    
              Here are some projects that highlight my skills and experience with real-life examples of my work. 
              Each project comes with a brief description and links to code repositories and live demos. 
              They show how I tackle complex problems, handle various technologies, and manage projects effectively.
            </p>
          </div>
        </div>

        {/* Cards - Mobile */}
        <div className="mx-auto max-w-4xl bg-gradient-to-br from-gray-800 to-[#36335e] rounded-lg">
          <p className='relative pb-3 mx-12 lg:mx-48 rounded-b-xl 
            text-4xl text-center font-bold tracking-tight bg-white text-gray-900 sm:text-5xl'
          >
            Mobile Dev
          </p>
          <div className="mx-4 pb-[24rem] sm:pb-2 sm:mx-0 p-2 pt-4 align-center justify-center flex-wrap sm:flex-nowrap gap-2 flex">
            
            <ImageCard
              link='https://github.com/denzariu/zeldex'
              image={m_1}
              desc='Zeldex'
            />
            <ImageCard
              link='https://github.com/denzariu/tomoartou'
              image={m_2}
              desc='Tomoartou'
            />
            <ImageCard
              link='https://github.com/denzariu/outfit-planner'
              image={m_3}
              desc='FitMe'
            />
           
          </div>
        </div>

        {/* Web Dev */}
        <div className="mx-auto mt-20 max-w-4xl bg-gradient-to-br rounded-lg">
          <p className='relative pb-3 mx-12 lg:mx-48 rounded-t-xl 
            text-4xl text-center font-bold tracking-tight bg-gray-900 text-white sm:text-5xl'
          >
            Web Dev
          </p>
          <div className=" flex pb-[24rem] sm:pb-2 sm:mx-0 p-2 pt-4 align-center justify-center flex-wrap sm:flex-nowrap border-4 border-gray-900 rounded-lg gap-2">
            
            
            <ImageCard
              border
              link='https://github.com/denzariu/Depodenz-Warehouse-Site'
              image={w_2}
              desc='DepoDenz'
            />
            <ImageCard
              border
              link='https://denzariu.github.io/'
              image={w_3}
              desc='Old Site'
            />
            
            <ImageCard
              border
              link='https://denzariu.github.io/react_pokemon_app/'
              image={w_1}
              desc='PokeDenz'
            />
            
           
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default What