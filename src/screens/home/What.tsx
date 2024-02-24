import m_1 from '../../assets/image/p_mobile_1.png'
import m_2 from '../../assets/image/p_mobile_2.png'
import m_3 from '../../assets/image/p_mobile_3.png'
import w_1 from '../../assets/image/p_web_1.png'
import w_2 from '../../assets/image/p_web_2.png'
import w_3 from '../../assets/image/p_web_3.png'
import BMO from '../../assets/image/bmo_anim_2.gif'
import o_2 from '../../assets/image/o_2.png'

import ImageCard from '../components/ImageCard'


function What() {
  return (
    <div id="what">
      <div className="relative isolate px-6 pt-0 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
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


        {/* Mobile Dev */}
        <div className="mx-auto max-w-4xl bg-gradient-to-br">
          <p className='relative p-3 mx-12 lg:mx-48 rounded-t-xl 
            text-4xl text-center font-bold tracking-tight bg-gray-900 text-white sm:text-5xl'
          >
            Mobile Dev
          </p>
          <div className=" flex pb-[24rem] sm:pb-4 sm:mx-0 p-4 align-center justify-center flex-wrap gap-2 sm:flex-nowrap border-4 border-b-0 border-gray-900 rounded-t-lg ">
          
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

        {/* Cards - Web */}
        <div className="mx-auto mt-0 max-w-4xl bg-gradient-to-br from-gray-800 to-[#36335e] rounded-b-lg">
          <p className='relative p-3 mx-12 lg:mx-48 rounded-b-xl 
            text-4xl text-center font-bold tracking-tight bg-white text-gray-800 sm:text-5xl
            border-4 border-t-0 border-[#36335e]'
          >
            Web Dev
          </p>
          <div className="mx-4 pb-[24rem] sm:pb-4 sm:mx-0 p-4 align-center justify-center flex-wrap sm:flex-nowrap gap-3 flex">
            
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
          
        <div className="mx-auto mt-20 max-w-4xl bg-gradient-to-br rounded-lg">
          <p className='relative pb-3 mx-12 lg:mx-48 rounded-t-xl 
            text-4xl text-center font-bold tracking-tight bg-gradient-to-tr from-green-300 to-fuchsia-400 via-fuchsia-200 from-20% text-white sm:text-5xl'
          >
            Others
          </p>
        </div>

        {/* BMO */}
        <div className='mx-auto max-w-4xl p-4 gap-4 bg-gradient-to-br rounded-lg flex justify-center bg-green-50 border'>
          <a className='flex-1 self-center'
            href='https://github.com/denzariu/BMO'
          >
            <img className={"rounded-lg w-full shadow-it self-center "} src={BMO} alt={'BMO'} />
          </a>
          <div className='hidden sm:flex flex-col flex-2'>
            <p className='text-2xl font-bold text-left tracking-tight dark:text-gray-900 text-white'>
              BMO - Friendliest voice assistant
            </p>
            <p className='mt-2 hidden sm:flex text-left'>
              Contains multiple functionalities: 
              informative (time & date, weather condition, descriptions of concepts, translations, writing/playing notes, math, etc.) 
              & recreational (playing content from Youtube, fetching content from Reddit, video games, sound visualizer etc.), interactions that emphasize on user's experience, with minimal preconfiguration.
            </p>
          </div>
        </div>

        <div className='mx-auto max-w-4xl p-4 gap-4 bg-gradient-to-br rounded-lg flex justify-center bg-fuchsia-50 border'>
          <a className='flex-1 self-center'
            href='https://github.com/denzariu/Space-Beat'
          >
            <img className={"rounded-lg shadow-it self-center"} src={o_2} alt={'SliceTendo'} />
          </a>
          <div className='hidden sm:flex flex-col flex-2'>
            <p className='text-2xl font-bold text-left tracking-tight dark:text-gray-900 text-white'>
              SpaceBeat - Bluetooth-controlled Nintendo Game
            </p>
            <p className='mt-2 hidden sm:flex text-left'>
              Nintendo Switch Game made in Unity Engine 3D 
              in which the user controls Bluetooth Nintendo Joy-Cons in order to swing the blades 
              and cut different types of objects.
            </p>
          </div>
        </div>


        {/* BG */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none"
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