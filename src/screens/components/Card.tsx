import { InView } from "react-intersection-observer";

type CardProps = {
  title: string;
  description: string;
  image?: string;
  buttonText: string;
  buttonAction: () => void;
};

function Card({ title, description, image }: CardProps) {
  return (
    <InView threshold={0.3} trackVisibility triggerOnce delay={200}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`max-w-sm sm:flex-[0.34] border rounded-lg shadow bg-gray-800 border-gray-700 
        shadow-it 
        hover:bg-gradient-to-tr from-gray-800 to-[#282646] hover:scale-105 hover:border-purple-900
        transition-all duration-300 ${
          inView ? "opacity-1 translate-y-0" : "opacity-0 translate-y-16"
        }`}
        >
          <div className="flex flex-col justify-between h-full p-5 ">
            <div className="">
              <a className="self-center flex-1">
                <img
                  className="w-full p-5 rounded-full rounded-t-lg"
                  src={image}
                  alt=""
                />
              </a>
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-white">
                  {title}
                </h5>
              </a>
              <p className="mb-3 font-normal tracking-tight text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}

export default Card;
