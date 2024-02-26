import Card from '../components/Card'
import Job from '../components/Job'
import Skill from '../components/Skill'
import { SVGS } from '../../assets/svgs'

import w_2 from '../../assets/image/w_2_2.png'
import w_3 from '../../assets/image/w_2.png'
import w_1 from '../../assets/image/w_3.jpg'


export default function Who() {

  return (
    <div id="who">
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {/* Background blur */}
          <div
            className=" relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] pointer-events-none"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        {/* Page Container  */}
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
      
          <div className='lg:max-w-xl'>
            <div className='text-6xl text-left font-bold tracking-tight text-gray-900 sm:text-7xl'>
              Who.
            </div>
            <p className="mt-4 mx-2 text-lg leading-8 text-gray-600">
              I blend creativity with technical expertise.
            </p>
          </div>
          
          <div className=" mt-5 align-center justify-center flex-wrap sm:flex-nowrap gap-4 flex ">
            {/* Card */}
            <Card
              title='Software Engineer'
              description='Educated at Politehnica University of Bucharest, specialized in Computer Science & Systems Engineering.'
              buttonText='See more'
              image={w_1}
              buttonAction={()=>{console.log('press')}}
            />
            {/* Card */}
            <Card
              title='Graphic Designer'
              description='Versatility in my work allows me to excel in both problem-solving and innovation.'
              buttonText='See more'
              image={w_2}
              buttonAction={()=>{console.log('press')}}
            />
            {/* Card */}
            <Card
              title='Content Creator'
              description='I possess a keen eye for detail and thrive on tackling algorithmic challenges, but my interests vary in the fields of Multimedia, Crafts and Design.'
              buttonText='See more'
              image={w_3}
              buttonAction={()=>{console.log('press')}}
            />

          </div>

          <div className='mt-20 text-4xl text-left font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Work Experience.
          </div>
          
          <div className='mt-12 flex flex-col items-center justify-center'>
            {/* Element */}
            <Job
              title='Software Engineer'
              subtitle='Webhelp'
              description={[
                "   Provided the documentation and resolution of intricate technical problems faced by Google's clientele, leveraging the infrastructure within the Google Cloud Platform, notably Kubernetes, Compute Engine, among others.", 
                "   Collaborated within a cross-functional team of over 20, to ensure seamless resolution and client satisfaction of over 87%."
              ]}              
              startToEnd='2023 Feb - 2023 Jun'
            />
            <Job
              title='Salesforce Web Developer'
              subtitle='Deloitte Digital'
              description={[
                "   Training was centered on Salesforce development and administration, held by a certified Salesforce expert, followed by internal training of APEX, LWCs, Batching & Redux.", 
                "   I was part of a brand-new Salesforce SCRUM team, working for one of the global industry leaders. Our primary focus was optimizing the business customer experience by crafting tailored dashboards using APIs and Plugins.",
                "   My expertise was frontend, with nearly 80% of UI dashboard pages created by myself, and backend development, amplifying the team's impact on customer-centric solutions"
              ]}              
              startToEnd='2021 Jun - 2021 Nov'
            />
            <Job
              title='Trainee - Software Dev'
              subtitle='OKAPI'
              description={[
                "   I've applied a comprehensive skill set in real-time project environments, such as application development, backend & frontend by efficiently communicating with my team, following workflows, organizing and optimizing my tasks.",
                "   Became familiar with technologies such as Node, Express, Django, Wordpress, etc, tools such as Git, Figma, Postman and ticket managing systems."
              ]}              
              startToEnd='2020 Jun - 2021 Jan'
            />
          </div>
          
          {/* Skills */}
          <div className='mt-12 sm:mt-24 flex justify-center flex-wrap gap-2 sm:mx-28 lg:mx-32 md:gap-4 lg:gap-4'>
            <Skill
              logo={SVGS.react}
            />
            <Skill
              logo={SVGS.figma}
            />
            <Skill
              logo={SVGS.typescript}
            />
            <Skill
              logo={SVGS.react}
              title='Native'
            />
            <Skill
              logo={SVGS.javascript}
            />
            <Skill
              logo={SVGS.tailwind}
            />
            <Skill
              logo={SVGS.git}
            />
             <Skill
              logo={SVGS.salesforce}
            />
            <Skill
              logo={SVGS.nodejs}
            />
            <Skill
              logo={SVGS.redux}
            />
            <Skill
              logo={SVGS.kubernetes}
            />
            <Skill
              logo={SVGS.unity}
            />
            
          </div>
        </div>

        

        {/* Absolute elements (background) */}
        <div
          className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-80rem)] pointer-events-none"
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
