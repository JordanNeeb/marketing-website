import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

// // Simulates tab or shift + tab
// const handleKeyDown = (e) => {
//   // Arrow down or arrow up
//   if (e.keyCode === 40 || e.keyCode === 38) {
//     // Ordered array of elements with tabIndex="0"
//     const elements = getIndexed(select.current, []);
//     let targetIndex = elements.findIndex((el) => el === e.target);

//     // Confuses you for a second
//     targetIndex += (39 - e.keyCode) * -1;

//     if (elements[targetIndex]) {
//       elements[targetIndex].focus();
//     }
//   }
// };

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-28">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Full stack developer
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I'm a web developer with an eye for design and a love for
                writing clean, efficient code.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  <ArrowDownTrayIcon
                    className="-ml-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                  My resume
                </button>
                <a
                  href="https://github.com/JordanNeeb"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Check out my Github <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-emerald-600/10 ring-1 ring-emerald-50 md:-mr-20 lg:-mr-36"
            aria-hidden="true"
          />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-emerald-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div
                className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-emerald-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                aria-hidden="true"
              />
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-transparent">
                    <Image src="/confusing.png" width={600} height={600} />
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </>
  );
};

export default Hero;
