"use client";

import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Porfolio from "./components/Porfolio";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <div className="max-w-6x1 mx-auto w-[90%]">
      <NavBar />
      <Hero />
      <Porfolio />
      <About />
      <Resume />
      {/* <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400/70 via-transparent to-transparent animate-[glowline_4s_linear_infinite]"></div>
        <div className="absolute left-2/4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-400/70 via-transparent to-transparent animate-[glowline_6s_linear_infinite]"></div>
        <div className="absolute left-3/4 top-0 h-full w-[2px] bg-gradient-to-b from-pink-400/70 via-transparent to-transparent animate-[glowline_8s_linear_infinite]"></div>
      </div>
      <style>
        {`
  @keyframes glowline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
`}
      </style> */}
    </div>
  );
}
