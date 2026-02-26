import React from "react";
import { RiJavaFill, RiNextjsLine } from "react-icons/ri";
import { SiDocker, SiShadcnui, SiSpringboot, SiSqlite } from "react-icons/si";
import { DiIllustrator, DiPostgresql, DiReact } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { GiFallingStar } from "react-icons/gi";
import { motion } from "framer-motion";

const conatainer = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title:
        "Android-based External Disease Identifier for UEP College of Veterinary Medicine Laboratory",
      description: "Capstone Project",
      image: "/assets/capstone_project.png",
      tags: [RiJavaFill, SiTensorflow, SiSqlite, DiIllustrator],
      github:
        "https://github.com/zonic-ultra/Android-based-External-Disease-Identifier", // 🔗 replace with your link
      live: "https://ItsAndroidAppsorry",
    },
    {
      id: 2,
      title: "HireBase",
      description: "Fullstack Project",
      image: "/assets/hirebase_design.png",
      tags: [RiJavaFill, SiSpringboot, SiDocker, DiPostgresql, DiReact],
      github: "https://github.com/zonic-ultra/ems-frontend-react", // 🔗 replace with your link
      live: "https://employee-management-system-blue-five.vercel.app/", // 🔗 replace with your live demo
    },
    {
      id: 3,
      title: "Financial Tracker",
      description: "Fullstack Project",
      image: "/assets/financialtracker.png",
      tags: [
        RiJavaFill,
        SiSpringboot,
        SiDocker,
        DiPostgresql,
        RiNextjsLine,
        SiShadcnui,
      ],
      github: "https://github.com/zonic-ultra/financial-tracker-app", // 🔗 replace with your link
      live: "https://financial-tracker-app-eta.vercel.app/", // 🔗 replace with your live demo
    },
  ];

  return (
    <section className="my-12 px-4 md:px-8 lg:px-16" id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="font-semibold inline-flex items-center gap-2 text-purple-600">
          <GiFallingStar className="text-lg" />
          Portfolio
        </p>
        <h2 className="text-gradient text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          My Featured Projects
        </h2>
      </motion.div>

      {/* Project grid */}
      <motion.div
        variants={conatainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            variants={card}
            whileHover={{ scale: 1.03, rotateY: 3 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            key={project.id}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-black flex flex-col custom-gradient"
          >
            {/* Project Image */}
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden"
            > */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 md:h-72 object-cover rounded-t-2xl p-2"
            />
            {/* </motion.div> */}

            {/* Project Content */}
            <motion.div
              variants={conatainer}
              initial="hidden"
              animate="show"
              className="p-4 flex flex-col flex-1"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((Icon, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 border border-gray-500 text-white text-lg rounded-full flex items-center justify-center"
                  >
                    <Icon />
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-xl font-semibold text-white-900 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white opacity-70 mb-4">
                {project.description}
              </p>

              {/* Buttons (only for HireBase) */}
              {project.github && project.live && (
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-1 text-white text-sm rounded-full hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white text-sm border-1 rounded-full hover:bg-gray-900 transition"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
