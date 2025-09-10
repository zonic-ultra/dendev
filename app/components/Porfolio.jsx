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
    },
    {
      id: 2,
      title: "HireBase",
      description: "Fullstack Project",
      image: "/assets/hirebase_design.png",
      tags: [RiJavaFill, SiSpringboot, SiDocker, DiPostgresql, DiReact],
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
        <p className="text-white-600 max-w-xl mx-auto">
          Here are some of the projects I have worked on using different
          technologies.
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border custom-gradient flex flex-col"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 md:h-72 object-cover rounded-t-2xl"
            />

            {/* Project Content */}
            <div className="p-3 flex flex-col flex-1">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((Icon, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-black opacity-80 text-xl rounded-full border border-gray-300 flex items-center justify-center"
                  >
                    <Icon />
                  </span>
                ))}
              </div>

              {/* Title + Button */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
