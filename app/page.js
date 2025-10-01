"use client";

import Script from "next/script";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Porfolio from "./components/Porfolio";
import Resume from "./components/Resume";
import Chatbot from "./Chatbot";

export default function Home() {
  return (
    <div className="max-w-6x1 mx-auto w-[90%]">
      <NavBar />
      <Hero />
      <Porfolio />
      <About />
      <Resume />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
