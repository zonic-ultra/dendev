import React from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
// import { motion } from "framer-motion";
import { FaGithub, FaJava, FaLinkedin } from "react-icons/fa";
// import { SiDocker, SiMariadb, SiSpringboot, SiRender } from "react-icons/si";
// import { RiJavaFill, RiJavascriptLine, RiVercelLine } from "react-icons/ri";
// import { GrHtml5 } from "react-icons/gr";
// import { DiCss3, DiIllustrator, DiPostgresql, DiReact } from "react-icons/di";

const Hero = () => {
  return (
    <section id="#">
      <div className="max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden">
        {/* profile */}
        <div>
          <Image
            src="/assets/DSC09403A.jpg"
            width={150}
            height={150}
            className="rounded-full mb-4 custom-gradient"
            alt="Profile Image"
          />
        </div>
        <h3 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
          I'm Judens Bandal{" "}
          <span className="inline-block animate-wave">👋</span>|<span></span>
          From
          <ReactCountryFlag
            countryCode="PH"
            svg
            style={{ width: "1em", height: "1em" }}
          />
        </h3>
        <h1 className="text-lg md:text-xl font-semibold mb-5">
          Java Developer{" "}
          <FaJava className="inline-block text-lg md:text-2xl font-semibold " />
        </h1>

        {/* icons ani
        <div className="realtive my-6 md:my-8 w-full mask-r-from-50% mask-l-from-50% overflow">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            looping

            {icons.concat(icons).map((icon, index) => (
              <span
                key={index}
                className="flex items-center gap-2 text-white border border-gray-500 rounded-lg p-2"
              >
                <span className="text-3xl md:text-4xl">{icon.icon}</span>
                <span className="text-xs md:text-sm opacity-80">
                  {icon.name}
                </span>
              </span>
            ))}
          </motion.div>
        </div> */}

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-5">
          <a
            href="#portfolio"
            className="w-full md:w-auto py-3 px-8 rounded-full font-semibold flex items-center justify-center gap-2 border border-content/20 hover:border-content/40 hover:shadow-lg transition-colors duration-300 cursor-pointer"
          >
            My Work
          </a>

          <a
            href="/assets/Judens%20Bandal%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto py-3 px-8 rounded-full font-semibold flex items-center justify-center gap-2 border border-content/20 hover:border-content/40 hover:shadow-lg transition-colors duration-300 cursor-pointer"
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-row items-center justify-center gap-3 w-full md:w-auto mt-5">
          <a
            href="https://www.linkedin.com/in/judens-bandal-027185375/"
            className="w-auto py-2 px-4 text-3xl flex items-center justify-center cursor-pointer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/zonic-ultra"
            className="w-auto py-2 px-4 text-3xl flex items-center justify-center cursor-pointer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
