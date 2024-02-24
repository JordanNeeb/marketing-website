"use client";

// import { useState } from "react";
import { Sacramento } from "next/font/google";
// import { Dialog } from "@headlessui/react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

const info = [
  {
    name: "Phone",
    email: "+1 (226) 268-1055",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Email",
    email: "info@jordanneeb.com",
    icon: EnvelopeIcon,
  },
  {
    name: "Website",
    email: "jordanneeb.com",
    icon: GlobeEuropeAfricaIcon,
  },
];

const Header = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <span className={`${sacramento.className} text-5xl text-emerald-600`}>
            Jordan Neeb
          </span>
        </a>
        {/* <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
  </div> */}
        {/* <div className="hidden sm:flex sm:gap-x-12">
          {info.map((item) => (
            <a
              key={item.name}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div> */}
        <ul role="list" className="flex gap-x-8">
          {info.map((item) => (
            <li key={item.email} className="flex gap-x-2 py-5">
              <item.icon className="h-5 w-5 text-slate-500 stroke-2" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">
                  {item.email}
                </p>
                {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {item.email}
                </p> */}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {/* <Dialog
        as="div"
        className="sm:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span
                className={`${sacramento.className} text-3xl sm:text-4xl text-emerald-600`}
              >
                Jordan Neeb
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
};

export default Header;
