import React from "react";
import { HiDownload, HiLocationMarker, HiPhone, HiUser } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";

const About = () => {
  return (
    <section className="mt-12 pb-8" id="about">
      <div className="text-center">
        <p className="font-semibold inline-flex items-center gap-1 py-1.5  text-purple-600 px-3 mb-4">
          <GiFallingStar className="text-lg" />
          About
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Server-side <br />
          Logic
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/10 back-drop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            0+
          </h3>
          <p className="text-white-700 font-medium text-lg opacity-80">
            Happy clients
          </p>
        </div>
        <div className="bg-white/10 back-drop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            1+
          </h3>
          <p className="text-white-700 font-medium text-lg opacity-80">
            Years of experience
          </p>
        </div>
        <div className="bg-white/10 back-drop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            4+
          </h3>
          <p className="text-white-700 font-medium text-lg opacity-80">
            Projects done
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-white-600 text-sm leading-relaxed opacity-70">
            I am a Java developer with a Bachelor of Science in Information
            Technology from the University of Eastern Philippines. I have
            experience in web development and API integration using frameworks
            such as Spring Boot, Hibernate, JPA, and REST. I also have
            experience with databases such as PostgreSQL, MariaDB, MySQL, and
            Firebase, a NoSQL database, along with working with APIs and
            handling JSON. I use Postman for testing APIs and have experience
            using GitHub for my projects, as well as front-end technologies such
            as ReactJS, Bootstrap.
          </p>
          <p className="text-white-600 text-sm leading-relaxed opacity-70">
            I have experience in building microservices architectures using
            Spring Boot and Eureka Server for service discovery. In addition, I
            have experience in machine learning development, including image
            recognition using TensorFlow.
          </p>
          <p className="text-white-600 text-sm leading-relaxed opacity-70">
            When working on a project, enhancement, or modification, I like to
            communicate with my leaders and team to gain a clear understanding
            of their needs and the project’s vision. Thank you in advance for
            your time and consideration. I look forward to the opportunity to
            work with you.
          </p>
          <a
            href="/assets/Judens%20Bandal%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className=" custom-gradient py-4 px-8 rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300 "
          >
            Download Resume
            <HiDownload className="text-lg" />
          </a>
        </div>
        <div className="lg:col-span-1 space-y-4">
          <div>
            <p className="text-sm font-medium mb-1">
              <HiUser className="inline-block text-lg" />
              <span className="ml-2">Name</span>
            </p>
            <p className="text-xl font-semibold opacity-70">Judens Bandal</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">
              <HiPhone className="inline-block text-lg" />
              <span className="ml-2">Phone</span>
            </p>
            <p className="text-xl font-semibold opacity-70">+63 9516240293</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">
              <FaLinkedin className="inline-block text-lg" />
              <span className="ml-2">LinkedIn</span>
            </p>
            <p className="text-xl font-semibold opacity-70">Judens bandal</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">
              <HiEnvelope className="inline-block text-lg" />
              <span className="ml-2">Email</span>
            </p>
            <p className="text-xl font-semibold opacity-70">
              judensbandal@gmail.com
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">
              <HiLocationMarker className="inline-block text-lg" />
              <span className="ml-2">Location</span>
            </p>
            <p className="text-xl font-semibold opacity-70">
              Tanauan City Batangas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
