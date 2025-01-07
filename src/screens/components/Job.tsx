import { InView } from "react-intersection-observer";

type JobProps = {
  title: string;
  subtitle: string;
  description: string[];
  startToEnd: string;
};

function Job(job: JobProps) {
  return (
    <div className="flex gap-2 mt-0">
      {/* Date for big screens */}
      <p className="hidden sm:flex sm:flex-[0.45] text-right justify-end -mt-1 mx-2 text-1xl font-medium tracking-tight text-[#915eff]">
        {job.startToEnd.toUpperCase()}
      </p>

      {/* Dot and fade */}
      <div className="flex flex-col items-center justify-start mt-0">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
        <div className="w-1 h-full -mb-5 bg-gradient-to-b from-purple-500 to-white"></div>
      </div>

      {/* Card */}
      <InView threshold={0.01} trackVisibility triggerOnce delay={100}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`
            m-1 sm:m-2 mb-5 p-3 pb-4 flex-1 border-2 rounded-lg shadow bg-gray-800 border-gray-700 
            bg-gradient-to-tr from-gray-800 to-[#282646]
            hover:scale-105 hover:border-purple-900 hover:to-gray-800
            transition-all duration-300 ${
              inView ? "opacity-1 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <p className="mb-0 text-2xl font-bold tracking-tight text-left text-white">
              {job.title}
            </p>
            <p className="mb-2 font-bold tracking-tight text-left text-purple-600 text-1xl">
              {job.subtitle}
            </p>
            <ul className="ml-2 list-disc">
              {job.description.map((row) => (
                <li className="mx-2 mt-2 font-normal leading-7 tracking-tight text-gray-400">
                  {row}
                </li>
              ))}
            </ul>

            <p className="mx-2 mt-1 font-medium tracking-tight text-right text-purple-800 sm:hidden text-1xl">
              {job.startToEnd}
            </p>
          </div>
        )}
      </InView>
    </div>
  );
}

export default Job;
