import React from "react";
import { GiFallingStar, GiUpgrade } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";

import { SiDocker, SiMariadb, SiSpringboot, SiCanva } from "react-icons/si";
import { RiJavaFill, RiJavascriptLine } from "react-icons/ri";
import { GrHtml5 } from "react-icons/gr";
import { DiCss3, DiIllustrator, DiPostgresql, DiReact } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";

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
      year: "Jun 2024 - Jan 2025",
      what: "Capstone Project",
      title:
        "Android-based External Disease Identifier for UEP College of Veterinary Medicine Laboratory",
      description:
        "-Developed an Android app to identify external dog diseases using a machine learning model, specifically designed for veterinary laboratory use.",
    },
    {
      year: "March 2025",
      what: (
        <>
          Freelance <br />
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
          -Adding Feature Branch (Cellphone Parts).
          <br />
          -Implement CRUD functionality for managing cellphone parts inventory.
          <br />
          -Create API documentation for all cellphone part endpoints using
          Postman. <br />
          -Document all UI forms and corresponding API responses related to
          Cellphone Parts operations.
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
    { icon: <SiDocker />, name: "Docker" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMariadb />, name: "MariaDB" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  const uiux = [
    { uiuxt: <DiIllustrator />, name: "Adobe Illustrator" },
    { uiuxt: <SiCanva />, name: "Canva" },
  ];

  return (
    <section className="mt-12 pb-8" id="resume">
      {/* header */}
      <div className="text-center">
        <p className="font-semibold inline-flex items-center gap-1 py-1.5 px-3  text-purple-600 mb-4">
          <GiFallingStar className="text-lg" />
          Resume
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Education and Practical
          <br />
          Experience
        </h2>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12">
        {/* education timeline */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-8">Education</h3>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60" />

            {education.map((item, index) => (
              <div
                className="relative flex items-start space-x-6 pb-8"
                key={index}
              >
                {/* timeline dot with icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center">
                    <PiGraduationCap className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium custom-gradient px-2 py-1 rounded mb-2">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-lg opacity-70 font-medium mb-1">
                    {item.instatution}
                  </h4>
                  <p className="opacity-80 mb-1">
                    {item.course || item.gradeLevel}
                  </p>
                  <p className="opacity-70 mb-1">{item.specialization}</p>
                  <p className="opacity-60 italic text-sm">{item.honor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* experience */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-8">Experience</h3>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60" />

            {experience.map((item, index) => (
              <div
                className="relative flex items-start space-x-6 pb-8"
                key={index}
              >
                {/* timeline dot with icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center">
                    <GiUpgrade className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium custom-gradient px-2 py-1 rounded mb-2">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-lg opacity-70 font-medium mb-2">
                    {item.what}
                  </h4>
                  <p className="opacity-80 mb-2">{item.title}</p>
                  <p className="opacity-60 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tech stack */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-5">
        {/* Tech Stack */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-8">Tech Stack</h3>
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((icon, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-2 pb-3"
                >
                  <span className="custom-gradient text-sm md:text-2xl">
                    {icon.icon}
                  </span>
                  <span className="text-sm md:text-sm opacity-70">
                    {icon.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* UI/UX Tools */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-8">UI/UX Tools</h3>
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {uiux.map((uiuxicon, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-2 pb-3"
                >
                  <span className=" custom-gradient text-sm md:text-2xl">
                    {uiuxicon.uiuxt}
                  </span>
                  <span className="text-sm md:text-sm opacity-70">
                    {uiuxicon.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
