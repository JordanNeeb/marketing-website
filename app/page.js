import { Montserrat } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Stats from "./components/Stats";
import WorkHistory from "./components/WorkHistory";

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const Page = () => {
  return (
    <div className={`${montserrat.className} bg-white`}>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100/20">
        <Header />
        <Hero />
      </div>
      <LogoCloud />
      <Stats />
      <WorkHistory />
    </div>
  );
};

export default Page;
