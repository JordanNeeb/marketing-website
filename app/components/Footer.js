import { Sacramento } from "next/font/google";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl text-center overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <a href="#" className="-m-1.5 p-1.5 text-center">
          <span className="sr-only">Your Company</span>
          <span
            className={`${sacramento.className} text-3xl sm:text-4xl text-emerald-600`}
          >
            Jordan Neeb
          </span>
        </a>
        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          &copy; {year} Jordan Neeb. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
