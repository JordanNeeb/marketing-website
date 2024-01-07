"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

const Stats = () => {
  const [yearsExperience, setYearsExperience] = useState(null);
  const [linesOfCode, setLinesOfCode] = useState(null);
  const [cupsOfCoffee, setCupsOfCoffee] = useState(null);
  const interval = useRef();

  useEffect(() => {
    const startDate = new Date("January 1, 2016 00:00:00 GMT+00:00");
    const nowDate = new Date();
    const msOfExperience = nowDate.getTime() - startDate.getTime();

    setYearsExperience(Math.floor(msOfExperience / 31536000000));
    setLinesOfCode(Math.floor((msOfExperience / 86400000) * 772));
    setCupsOfCoffee(Math.floor((msOfExperience / 86400000) * 2));
  });

  return (
    <div id="resume" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {/* Years experience */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {yearsExperience} +
            </dd>
            <dt className="text-base leading-7 text-gray-400">
              Years of Experience
            </dt>
          </div>
          {/* Lines of Code */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {linesOfCode?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </dd>
            <dt className="text-base leading-7 text-gray-400">Lines of Code</dt>
          </div>
          {/* Cups of Coffee */}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {cupsOfCoffee?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </dd>
            <dt className="text-base leading-7 text-gray-400">
              Cups of Coffee
            </dt>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
