import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./../../assets/logo.png";
import me from "./../../assets/me.png";
import { InView } from "react-intersection-observer";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Who", href: "#who" },
  { name: "What", href: "#what" },
  { name: "Why though?", href: "#why" },
];

export default function Navigator() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Menu */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className="sr-only">Denzariu</span>
              <img className="w-auto h-8" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="mailto:denisstefanpinzariu@gmail.com"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Denzariu</span>
                <img className="w-auto h-8" src={logo} alt="Denzariu Logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="mailto:denisstefanpinzariu@gmail.com"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Back to top */}
      {showButton && (
        <button
          type="button"
          onClick={backToTop}
          className={` ${
            showButton ? `inline-block` : `hidden`
          } fixed z-50 bottom-[40px] right-[40px] p-3 bg-main-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-main-500 hover:shadow-lg focus:bg-main-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-main-400 active:shadow-lg transition duration-150 ease-in-out`}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </button>
      )}

      {/* Landing page / HOME */}
      <div
        id="#home"
        className="relative min-h-screen px-6 isolate pt-14 lg:px-8"
      >
        <InView
          trackVisibility
          threshold={screen.width > 1000 ? 1 : 0.85}
          delay={100}
        >
          {({ inView, ref }) => {
            if (inView) setAnimationLoaded(true);
            return (
              <div
                ref={ref}
                className="absolute z-[-1] w-full h-screen bottom-0 top-0 right-0 left-0 overflow-x-hidden"
              >
                <div
                  className={`h-full w-full flex items-center justify-center transition-transform duration-700 delay-[1000ms] scale-x-[-0.9] scale-y-[0.9] translate-y-[5%]
                ${animationLoaded ? "translate-x-[50.5%]" : "translate-x-[0%]"}
              `}
                >
                  <img
                    src={me}
                    className={`self-end object-bottom object-contain h-full pt-16 w-fit transition-all duration-300
                    ${inView ? "opacity-1" : "opacity-0 blur-3xl"}`}
                  />
                </div>
              </div>
            );
          }}
        </InView>
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
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
        <div className="max-w-2xl py-48 mx-auto sm:py-64 lg:py-64 xl:py-72">
          <div className="flex flex-row text-left bg-blend-difference">
            <InView threshold={0.2} trackVisibility triggerOnce delay={100}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`
                flex flex-col justify-start items-center mt-3 sm:mt-5
                transition-all delay-1000 duration-1000 ${
                  inView
                    ? "opacity-1 translate-y-0"
                    : "opacity-0 translate-y-16"
                }
              `}
                >
                  <div className="w-5 h-6 rounded-full bg-main-500"></div>
                  <div className="w-1 h-full mb-1 bg-gradient-to-b from-main-500 to-transparent"></div>
                </div>
              )}
            </InView>

            <InView threshold={0.2} trackVisibility triggerOnce delay={100}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`
                flex-col mx-4
                transition-all delay-[1500ms] duration-1000 ${
                  inView ? "opacity-1 translate-x-0" : "opacity-0 translate-x-4"
                }
              `}
                >
                  <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-8xl">
                    Denis.
                  </h1>
                  <p className="mx-2 mt-4 text-lg leading-8 text-gray-600 sm:mt-6">
                    I develop mobile & web apps, user interfaces, and anything
                    that sparks some joy.
                  </p>
                </div>
              )}
            </InView>
          </div>
          <div className="text-left xl:text-center">
            <InView threshold={0.2} trackVisibility triggerOnce delay={100}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`mt-10 flex items-center justify-start lg:justify-center gap-x-6 transition-opacity ease-in-out duration-1000 delay-[1500ms] 
                    ${inView ? "opacity-1" : "opacity-0"}`}
                >
                  <a
                    href="#what"
                    className="rounded-md bg-main-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-main-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600"
                  >
                    My projects
                  </a>
                  <a
                    href="#who"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              )}
            </InView>
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
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
