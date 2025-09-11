import React from "react";
import { RiJavaFill } from "react-icons/ri";
import { SiDocker, SiSpringboot, SiSqlite } from "react-icons/si";
import { DiIllustrator, DiPostgresql, DiReact } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { GiFallingStar } from "react-icons/gi";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Android-based External Disease Identifier",
      description: "Capstone Project",
      image: "/assets/capstone_project.png",
      tags: [RiJavaFill, SiTensorflow, SiSqlite, DiIllustrator],
      github: "https://github.com/yourusername/hirebase", // 🔗 replace with your link
      live: "https://hirebase-demo.com",
    },
    {
      id: 2,
      title: "HireBase",
      description: "Fullstack Project",
      image: "/assets/hirebase_design.png",
      tags: [RiJavaFill, SiSpringboot, SiDocker, DiPostgresql, DiReact],
      github: "https://github.com/yourusername/hirebase", // 🔗 replace with your link
      live: "https://hirebase-demo.com", // 🔗 replace with your live demo
    },
  ];

  return (
    <section className="my-12 px-4 md:px-8 lg:px-16" id="portfolio">
      <div className="text-center mb-10">
        <p className="font-semibold inline-flex items-center gap-2 text-purple-600">
          <GiFallingStar className="text-lg" />
          Portfolio
        </p>
        <h2 className="text-gradient text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          My Featured Projects
        </h2>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-black flex flex-col custom-gradient"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 md:h-72 object-cover rounded-t-2xl"
            />

            {/* Project Content */}
            <div className="p-4 flex flex-col flex-1">
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
              <h3 className="text-lg md:text-xl font-semibold text-white-900 mb-2">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
