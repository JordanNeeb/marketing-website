"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Stats from "./components/Stats";
import WorkHistory from "./components/WorkHistory";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
// import Loading from "./components/Loading";
import { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100/20">
        <Header />
        <Hero setLoading={setLoading} />
      </div>
      <LogoCloud />
      <Stats />
      <WorkHistory />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
