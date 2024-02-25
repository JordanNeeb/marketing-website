import { history } from "../lib/vars";

const WorkHistory = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {history.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-emerald-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-600">
                {item.name}
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                {item.title}
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-emerald-600">
            What am I up to now?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I&apos;m currently working as a contract developer on some exciting
            and innovative projects involving artificial intelligence, machine
            learning and game development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
