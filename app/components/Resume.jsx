import React from "react";
import { GiFallingStar, GiUpgrade } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";

import {
  SiMariadb,
  SiSpringboot,
  SiCanva,
  SiOllama,
  SiN8N,
  SiFigma,
  SiAsana,
  SiClickup,
  SiGitlab,
  SiGithub,
} from "react-icons/si";
import { RiJavaFill, RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { GrHtml5 } from "react-icons/gr";
import { DiCss3, DiIllustrator, DiPostgresql, DiReact } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { motion } from "framer-motion";

const Resume = () => {
  const education = [
    {
      year: "2021-2025",
      instatution: "UNIVERSITY OF EASTERN PHILIPPINES",
      course: "Bachelor of Science in Information Technology",
      honor: "Cum Laude",
    },
    {
      year: "2019-2021",
      instatution: "CAPUL AGRO INDUSTRIAL SCHOOL",
      gradeLevel: "Senior High School",
      specialization: "General Academic Strand",
      honor: "With Honor",
    },
    {
      year: "2015-2019",
      instatution: "CAPUL AGRO INDUSTRIAL SCHOOL",
      gradeLevel: "Junior High School",
      specialization: "Computer Hardware Servicing",
      honor: "With Honor",
    },
  ];

  const experience = [
    {
      year: "Dec 2026",
      what: (
        <>
          Planet Marketing <br />
          Upwork Freelancer{" "}
        </>
      ),
      title: <>Lead Generation with AI Automation</>,
      description: (
        <>
          -Build an AI Agent in Airtable to automatically extract, enrich, and
          validate business owner names/emails, processing 2,000 plus leads to
          complete missing owner name for each business record.
        </>
      ),
      title2: <>Website Content Updating</>,
      description2: (
        <>-Updating website content into French and Spanish language</>
      ),
    },
    {
      year: "March 2025",
      what: (
        <>
          Project Collaboration
          <br />
          Full Stack Java Developer
        </>
      ),
      title: (
        <>
          Computer and Cellphone Repair Shop <br />
          Inventory Management System
        </>
      ),
      description: (
        <>
          -Setting their database using XAMPP .<br />
          Developed and implemented a feature branch for cellphone parts,
          integrating it into the main codebase after rigorous testing.
          <br />
          -Implement CRUD functionality for managing cellphone parts inventory.
          <br />
          -Document all UI forms and corresponding API responses related to
          Cellphone Parts operations.
        </>
      ),
    },
    {
      year: "Jun 2024 - Jan 2025",
      what: "Capstone Project",
      title:
        "Android-based External Disease Identifier for UEP College of Veterinary Medicine Laboratory",
      description: (
        <>
          -Developed an Android app to identify external dog diseases. <br />
          -Trained a machine learning model for disease identification or
          detection. <br />
          Improved disease detection accuracy by 98%.
          <br />
          -Implement real-time image input via camera and gallery for disease
          detection. <br />
          -Implement logic to automatically display treatment suggestions based
          on the model's disease prediction.
        </>
      ),
    },
  ];

  const techStack = [
    { icon: <GrHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
    { icon: <RiJavascriptLine />, name: "JavaScript" },
    { icon: <RiJavaFill />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <DiReact />, name: "React" },
    { icon: <RiNextjsLine />, name: "Nextjs" },
    { icon: <RiTailwindCssFill />, name: "Tailwind" },
    { icon: <DiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMariadb />, name: "MariaDB" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiOllama />, name: "Ollama" },
    { icon: <SiN8N />, name: "N8N" },
  ];

  const uiux = [
    { uiuxt: <SiFigma />, name: "Figma" },
    { uiuxt: <DiIllustrator />, name: "Adobe Illustrator" },
    { uiuxt: <SiCanva />, name: "Canva" },
  ];

  const project_managment = [
    { project_managment: <SiAsana />, name: "Asana" },
    { project_managment: <SiClickup />, name: "Clickup" },
    { project_managment: <SiGitlab />, name: "Gitlab" },
    { project_managment: <SiGithub />, name: "Github" },
  ];

  // const conatiner = {
  //   hidden: {},
  //   show: { transition: { staggerChidren: 0.2 } },
  // };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section className="mt-12 pb-8" id="resume">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="font-semibold inline-flex items-center gap-1 py-1.5 px-3  text-purple-600 mb-4">
          <GiFallingStar className="text-lg" />
          Resume
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Education and Practical
          <br />
          Experience
        </h2>
      </motion.div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12">
        {/* education timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-8">Education</h3>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60" />

            {education.map((item, index) => (
              <motion.div
                className="relative flex items-start space-x-6 pb-8"
                key={index}
                varients={item}
                whileHover={{ x: 10 }}
              >
                {/* timeline dot with icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center"
                  >
                    <PiGraduationCap className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-1 min-w-0"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-sm font-medium custom-gradient px-2 py-1 rounded mb-2"
                    >
                      {item.year}
                    </motion.span>
                  </div>
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-lg opacity-70 font-medium mb-1"
                  >
                    {item.instatution}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="opacity-80 mb-1"
                  >
                    {item.course || item.gradeLevel}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="opacity-70 mb-1"
                  >
                    {item.specialization}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="opacity-60 italic text-sm"
                  >
                    {item.honor}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-8">Experience</h3>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60" />

            {experience.map((item, index) => (
              <motion.div
                className="relative flex items-start space-x-6 pb-8"
                key={index}
                variants={item}
                whileHover={{ x: 10 }}
              >
                {/* timeline dot with icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center"
                  >
                    <GiUpgrade className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-1 min-w-0"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-sm font-medium custom-gradient px-2 py-1 rounded mb-2"
                    >
                      {item.year}
                    </motion.span>
                  </div>
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-lg opacity-70 font-medium mb-2"
                  >
                    {item.what}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="opacity-80 mb-2"
                  >
                    {item.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="opacity-60 text-sm mb-3"
                  >
                    {item.description}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="opacity-80 mb-2"
                  >
                    {item.title2}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="opacity-60 text-sm"
                  >
                    {item.description2}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* tech stack */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-5"
      >
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-8"
          >
            Tech Stack
          </motion.h3>
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((icon, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ x: 10 }}
                  className="relative flex items-start space-x-2 pb-3"
                >
                  <span className="custom-gradient text-sm md:text-2xl">
                    {icon.icon}
                  </span>
                  <span className="text-sm md:text-sm opacity-70">
                    {icon.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* UI/UX Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-8"
          >
            UI/UX Tools
          </motion.h3>
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {uiux.map((uiuxicon, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ x: 10 }}
                  className="relative flex items-start space-x-2 pb-3"
                >
                  <span className=" custom-gradient text-sm md:text-2xl">
                    {uiuxicon.uiuxt}
                  </span>
                  <span className="text-sm md:text-sm opacity-70">
                    {uiuxicon.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-8"
          >
            Project Management
          </motion.h3>
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {project_managment.map((uiuxicon, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ x: 10 }}
                  className="relative flex items-start space-x-2 pb-3"
                >
                  <span className=" custom-gradient text-sm md:text-2xl">
                    {uiuxicon.project_managment}
                  </span>
                  <span className="text-sm md:text-sm opacity-70">
                    {uiuxicon.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
