const About = () => {
  return (
    <div id="about" className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src="/profile.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full pt-20 max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <div className="relative isolate">
              <div className="text-base">
                <div className="font-semibold text-white">Jordan Neeb</div>
                <div className="mt-1 text-gray-400">St. John's, NL</div>
              </div>
              <div className="mt-8 leading-8 text-white sm:leading-9">
                <p>
                  Naming variables since 2014, I&apos;ve had the pleasure of
                  working with so many wonderful and brilliant developers on a
                  number of different projects. I had no idea that &quot;Hello,
                  world&quot; would lead to such amazing things.
                </p>
                <p className="pt-4">
                  When I&apos;m not sitting at a computer, you&apos;ll usually
                  find me playing music, hanging out with my lovely girlfriend
                  and our dog or building guitar pedals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
