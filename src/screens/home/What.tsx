import m_1 from "./../../assets/image/p_mobile_1.png";
import m_2 from "./../../assets/image/p_mobile_2.png";
import m_3 from "./../../assets/image/p_mobile_3.png";
import w_1 from "./../../assets/image/p_web_1.png";
import w_2 from "./../../assets/image/p_web_2.png";
import w_3 from "./../../assets/image/p_web_3.png";
import w_4 from "./../../assets/image/p_web_4.png";
import w_5 from "./../../assets/image/p_web_5.png";
import BMO from "./../../assets/image/bmo_anim_2.gif";
import o_2 from "./../../assets/image/o_2.png";

import ImageCard from "../components/ImageCard";
import { InView } from "react-intersection-observer";

function What() {
  return (
    <div id="what">
      <div className="relative px-6 pt-0 isolate lg:px-8">
        <div
          className="absolute inset-x-0 overflow-hidden pointer-events-none -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Header & description */}
        <div className="mx-auto max-w-4xl pt-48 sm:py-64 lg:py-64 xl:py-72 !pb-40">
          <div className="lg:max-w-xl">
            <div className="text-6xl font-bold tracking-tight text-left text-gray-800 sm:text-7xl">
              What.
            </div>
            <p className="mx-2 mt-4 text-lg leading-8 text-justify text-gray-600">
              Here are some projects that highlight my skills and experience
              with real-life examples of my work. Each project comes with a
              brief description and links to code repositories and live demos.
              They show how I tackle complex problems, handle various
              technologies, and manage projects effectively.
            </p>
          </div>
        </div>

        {/* Mobile Dev */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br">
          <p className="relative p-3 mx-12 text-4xl font-bold tracking-tight text-center text-white bg-gray-800 lg:mx-48 rounded-t-xl sm:text-5xl">
            Mobile Dev
          </p>
          <div className="flex pb-[24rem] sm:pb-4 sm:mx-0 p-4 align-center justify-center flex-wrap gap-2 sm:flex-nowrap border-4 border-b-0 border-gray-800 rounded-t-lg font-semibold">
            <ImageCard
              image={m_1}
              desc="Zeldex"
              github="https://github.com/denzariu/zeldex"
              technologies={[
                {
                  name: "React Native | Redux",
                  style: "text-gray-800 bg-white",
                },
              ]}
            />
            <ImageCard
              image={m_2}
              desc="Tomoartou"
              github="https://github.com/denzariu/tomoartou"
              technologies={[
                {
                  name: "React Native | APIs",
                  style: "text-gray-800 bg-white",
                },
              ]}
            />
            <ImageCard
              image={m_3}
              desc="FitMe"
              github="https://github.com/denzariu/outfit-planner"
              playstore="https://play.google.com/store/apps/details?id=com.infitter"
              technologies={[
                {
                  name: "React Native | SQLite | IAP",
                  style: "text-gray-800 bg-white",
                },
              ]}
            />
          </div>
        </div>

        {/* Web Dev */}
        <div className="max-w-4xl mx-auto -mt-1 border-4 border-t-0 border-gray-800 bg-gradient-to-br">
          <p className="relative p-3 mx-12 text-4xl font-bold tracking-tight text-center text-gray-800 bg-white border-4 border-gray-800 lg:mx-48 rounded-xl sm:text-5xl">
            Web Dev
          </p>
          <div className="flex flex-wrap justify-center gap-3 p-4 pt-12 -mt-10 font-semibold bg-gray-800 border-t-4 border-gray-800 sm:pb-0 sm:mx-0 align-center sm:flex-nowrap">
            <ImageCard
              border
              link="https://denzariu.github.io/sandbox/"
              github="https://github.com/denzariu/sandbox"
              image={w_4}
              desc="Sandbox"
              technologies={[
                { name: "React | APIs (WIP)", style: "text-gray-800 bg-white" },
              ]}
            />

            <ImageCard
              border
              link="https://denzariu.github.io/pear/"
              github="https://github.com/denzariu/pear"
              image={w_5}
              desc="Sandbox"
              technologies={[
                { name: "React | GSAP", style: "text-gray-800 bg-white" },
              ]}
            />
          </div>
          <div className=" flex -mt-10 pt-12 pb-[20rem] sm:pb-4 sm:mx-0 p-4 align-center justify-center flex-wrap gap-3 sm:flex-nowrap bg-gray-800 border-gray-800 border-t-4 font-semibold">
            <ImageCard
              border
              image={w_2}
              desc="DepoDenz"
              github="https://github.com/denzariu/Depodenz-Warehouse-Site"
              technologies={[
                {
                  name: "Node | Express | MySQL",
                  style: "text-gray-800 bg-white",
                },
              ]}
            />
            <ImageCard
              border
              link="https://denzariu.github.io/old_portfolio"
              github="https://github.com/denzariu/old_portfolio"
              image={w_3}
              desc="Old Site"
              technologies={[
                { name: "HTML | CSS | JS", style: "text-gray-800 bg-white" },
              ]}
            />

            <ImageCard
              border
              link="https://denzariu.github.io/react_pokemon_app/"
              github="https://github.com/denzariu/react_pokemon_app"
              image={w_1}
              desc="PokeDenz"
              technologies={[
                { name: "React | APIs", style: "text-gray-800 bg-white" },
              ]}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p
            className="relative p-3
            text-4xl text-center font-bold tracking-tight bg-gradient-to-tr from-green-300 to-fuchsia-400 via-fuchsia-200 from-20% text-white sm:text-5xl"
          >
            Others
          </p>
        </div>

        <div className="max-w-4xl p-1 mx-auto space-y-1 rounded-md rounded-t-none bg-gradient-to-br from-green-300 via-fuchsia-200 to-fuchsia-400">
          {/* BMO */}
          <InView threshold={0.05} trackVisibility triggerOnce delay={150}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`
              mx-auto max-w-4xl p-4 gap-4 rounded-lg flex justify-center bg-green-50 border
              transition-all duration-300 ${
                inView ? "translate-y-0 opacity-1" : "translate-y-16 opacity-0"
              }
            `}
              >
                <a
                  className="self-center flex-1"
                  href="https://github.com/denzariu/BMO"
                >
                  <img
                    className={"rounded-lg w-full shadow-it self-center "}
                    src={BMO}
                    alt={"BMO"}
                  />
                </a>
                <div className="flex-col hidden sm:flex flex-2">
                  <p className="text-2xl font-bold tracking-tight text-left text-gray-800">
                    BMO - Friendliest voice assistant
                  </p>
                  <p className="hidden mt-2 tracking-tighter text-justify text-gray-600 sm:flex">
                    Contains multiple functionalities, enabled through a voice &
                    touchscreen interface: informative (time & date, weather
                    condition, descriptions of concepts, translations,
                    writing/playing notes, math, etc.) & recreational (playing
                    content from Youtube, fetching content from Reddit, video
                    games, sound visualizer etc.), interactions that emphasize
                    on user's experience, with minimal preconfiguration (as it
                    autoconnects to Bluetooth and Wifi).
                  </p>
                  <p className="flex items-end justify-end flex-1 space-x-2">
                    <p className="text-green-400">Python</p>
                    <p className="text-slate-600">Linux</p>
                  </p>
                </div>
              </div>
            )}
          </InView>

          {/* Space-Beat */}
          <InView threshold={0.2} trackVisibility triggerOnce delay={200}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`
              mx-auto max-w-4xl p-4 gap-4 rounded-lg flex justify-center bg-fuchsia-50 border'
              transition-all duration-300 ${
                inView ? "translate-y-0 opacity-1" : "translate-y-16 opacity-0"
              } 
            `}
              >
                <a
                  className="self-center flex-1"
                  href="https://github.com/denzariu/Space-Beat"
                >
                  <img
                    className={"rounded-lg shadow-it self-center"}
                    src={o_2}
                    alt={"SliceTendo"}
                  />
                </a>
                <div className="flex-col hidden sm:flex flex-2">
                  <p className="text-2xl font-bold tracking-tight text-left text-gray-800">
                    SpaceBeat - Bluetooth-controlled Nintendo Game
                  </p>
                  <p className="hidden mt-2 tracking-tighter text-justify text-gray-600 sm:flex">
                    Nintendo Switch Game made in Unity Engine 3D in which the
                    user controls Bluetooth Nintendo Joy-Cons in order to swing
                    the blades and cut different types of objects.
                  </p>

                  <p className="flex items-end justify-end flex-1 space-x-2">
                    <p className="text-fuchsia-400">C#</p>
                    <p className="text-slate-600">Unity</p>
                  </p>
                </div>
              </div>
            )}
          </InView>
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
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default What;
