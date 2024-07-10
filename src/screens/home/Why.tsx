import image_rec_1 from '../../assets/image/rec_1.jpeg';


function Why() {
  
  return (
    <div id='why'>
      <div className="relative max-w-4xl px-6 pt-48 mx-auto mt-20 pointer-events-none lg:px-0 sm:pt-64 lg:pt-64 xl:pt-72">
        <div className='lg:max-w-xl'>
          <div className='text-6xl font-bold tracking-tight text-left text-gray-900 sm:text-7xl'>
            Why.
          </div>

          <p className="mx-2 mt-4 text-lg leading-8 tracking-tight text-justify text-gray-600">    
            Because I enjoy what I do.
          </p>
          <p className="mx-2 mt-2 text-lg leading-8 tracking-tight text-justify text-gray-600">
            My work reflects my interests, and I like to give back that feeling, 
            to provide users and customers efficient, scalable, and user-friendly solutions, 
            reimagining concepts of interaction with the user, with emphasis on their experience.
          </p>
        </div>
        <div className='py-24 sm:py-32 lg:py-32 xl:py-36'>
          <div className='mb-2 text-2xl font-bold tracking-tight text-left text-gray-900 sm:text-4xl'>
            What others say
          </div>
          <div className='flex'>
            <div className='flex-col -mr-0 sm:-mr-12 sm:flex'>
              <p className='absolute pl-4 mt-2 text-6xl sm:mt-0 sm:text-8xl'>"</p>
              <p className="px-4 pt-8 pb-10 text-lg leading-8 tracking-tight text-justify text-gray-600 border-4 border-gray-900 rounded-md sm:px-16">    
                Denis worked with me on a Salesforce scrum team as a developer for Deloitte Digital for PostNL at the IT, BIT CE department, in the Agile Release Train focusing on business customers. 
                Denis is thoughtful & motivated to do complex novel work and is open about things that need improvement in the team technically. 
                This makes it super pleasant to work with him and I highly recommend him on future assignments! 
                The project had many spikes to find out technical possibilities for how to best personalise the experience for business customers via personalised dashboards through APIs & Plugins. 
                Denis found his way quickly in the new team as he is a self-motivated team player. 
                He did not hesitate in reaching out to other developers from Deloitte in order to overcome impediments and also worked independently on complex user stories. 
              </p>
              <div className='flex flex-col self-end p-4 pb-5 -mt-8 bg-gray-900 rounded-md sm:text-right sm:pr-16 w-fit'>
                <p className='text-3xl text-white'>
                  Ben Ziskoven
                </p>
                <p className='text-slate-200 text-md'>
                  Agile Leader, Deloitte Digital
                </p>
              </div>
            </div>
            <img className='self-end hidden w-24 h-full rounded-full sm:flex'
              src={image_rec_1}
            />
          </div>  
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-28rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)] pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="relative translate-y-[3rem] aspect-[1200/678] w-[36.125rem] sm:translate-x-[32rem] sm:-translate-y-[0rem] lg:translate-y-[0rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:right-[calc(38%+4rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div> 
      <footer className="relative mx-auto">
        <svg className="fill-main-700 relative top-[0.05rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -1.70185 18 1.702">
          <path d="M 0 0 C 0.76 -0.43 0.506 -1.466 2.811 -1.698 C 4.692 -1.783 4.84 -0.43 6.088 -0.768 C 9.344 -2.438 9.852 -0.979 12.156 -0.705 C 13.636 -0.303 15.751 -1.952 18 0" />
        </svg>
        <div className="py-20 mx-auto bg-main-700">
          <div className="flex justify-between flex-1 px-6 mx-auto space-x-4 lg:max-w-4xl">
            <div className="flex-2 sm:self-center text-main-300">
              Created using React & Tailwind<br/>
              by Denis @2024
            </div>
            <div className="flex flex-col justify-between gap-1 px-2 text-center text-main-300 sm:self-center">
              <div className="flex gap-2 mt-1">
                <a href="https://www.linkedin.com/in/denis-stefan-pinzariu/"
                  className="fill-main-300 hover:fill-main-400"
                >
                  <svg className="w-8 h-8 sm:h-12 sm:w-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.github.com/denzariu/"
                  className="fill-main-300 hover:fill-main-400">
                <svg className="w-8 h-8 sm:h-12 sm:w-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Why