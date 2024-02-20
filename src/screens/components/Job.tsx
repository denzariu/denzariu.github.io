

type JobProps = {
  title: string,
  subtitle: string,
  description: string[],
  startToEnd: string,
}

function Job(job: JobProps) {
  return (
    <div className='lg:max-w-xl flex mt-0 gap-3'>

      {/* Dot and fade */}
      <div className="mt-0 flex flex-col justify-start items-center">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
        <div className="w-1 h-full -mb-5 bg-gradient-to-b from-purple-500 to-slate-200"></div>
      </div>

      {/* Card */}
      <div className="
        max-w-sm m-1 mb-5 p-3 pb-4 flex-1 border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 
        bg-gradient-to-tr from-gray-800 to-[#282646]
        transition ease-in-out duration-300 hover:scale-105 hover:border-purple-900 
      ">
        <p className='mb-0 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white'>
          {job.title}
        </p>
        <p className='mb-2 text-1xl font-bold text-left tracking-tight text-gray-900 dark:text-purple-600'>
          {job.subtitle}
        </p>
        <ul className="list-disc ml-2">
        {job.description.map(row => 
          <li className="mt-2 mx-2 font-normal leading-7 tracking-tight text-gray-700 dark:text-gray-400">
            {row}
          </li>
        )}
        </ul>

        <p className="text-right mt-1 mx-2 text-1xl font-medium tracking-tight text-gray-900 dark:text-purple-900">
          {job.startToEnd}
        </p>
      </div>
    </div>
  )
}

export default Job