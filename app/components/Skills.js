"use client";

import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

const skills = [
  { technology: "React", secondary: "Next", width: "w-11/12" },
  { technology: "Vue", secondary: "Nuxt", width: "w-11/12" },
  { technology: "MobX", width: "w-10/12" },
  { technology: "Redux", width: "w-6/12" },
  { technology: "Tailwind", secondary: "Styled Components", width: "w-11/12" },
  { technology: "React Native", width: "w-7/12" },
  { technology: "Git", width: "w-9/12" },
  { technology: "Node", secondary: "Nestjs", width: "w-9/12" },
  { technology: "Ollama", secondary: "LangChain", width: "w-11/12" },
  { technology: "Supabase", secondary: "Firebase", width: "w-10/12" },
  { technology: "PostgreSQL", width: "w-8/12" },
  { technology: "MongoDB", width: "w-9/12" },
  { technology: "Python", secondary: "Django", width: "w-6/12" },
  { technology: "Docker", width: "w-3/12" },
];

const frontendDoughnutData = {
  datasets: [
    {
      data: [55, 35, 8, 3],
      backgroundColor: [
        "rgb(16, 185, 129)",
        "rgb(245,158,11)",
        "rgb(14,165,233)",
        "rgb(139,92,246)",
      ],
    },
  ],
};

const backendDoughnutData = {
  datasets: [
    {
      data: [8, 4],
      backgroundColor: ["rgb(16, 185, 129)", "rgb(229, 231, 235)"],
    },
  ],
};

const Skills = () => {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div>
            {skills.map((skill) => (
              <div
                key={skill.technology}
                className="mt-4 text-left text-gray-600 font-semibold"
              >
                <span>{skill.technology}</span>
                {skill.secondary ? (
                  <span className="text-gray-400 font-normal">
                    {" "}
                    | {skill.secondary}
                  </span>
                ) : null}
                <div className="mt-2 h-2 rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full bg-emerald-500 ${skill.width}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-around mt-12 col-span-2">
            <div className="mx-auto max-w-2xl sm:text-center mb-24">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Technologies
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Specializing in front end development, I focus on creating
                performant, visually appealing and user-friendly interfaces. I
                prioritize staying updated on industry trends to deliver
                high-quality solutions as quickly as possible.
              </p>
            </div>
            <div className="flex flex-col justify-around items-center sm:items-start sm:flex-row">
              <ul
                role="list"
                className="mt-8 space-y-3 leading-6 text-gray-600 font-semibold mb-12 ml-4 self-start sm:mb-0 sm:ml-0"
              >
                <li className="flex gap-x-3 items-center">
                  <span className="h-4 w-4 rounded-full bg-emerald-500" />
                  Frontend
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="h-4 w-4 rounded-full bg-amber-500" />
                  Backend
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="h-4 w-4 rounded-full bg-sky-500" />
                  Design
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="h-4 w-4 rounded-full bg-violet-500" />
                  Dev Ops
                </li>
              </ul>
              <div className="h-72 w-72">
                <Doughnut data={frontendDoughnutData} />
              </div>
            </div>
          </div>
          {/* <div className="h-72 w-72">
            <Doughnut data={backendDoughnutData} />
          </div> */}
        </dl>
      </div>
    </div>
  );
};

export default Skills;
