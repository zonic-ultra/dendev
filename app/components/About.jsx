import React from "react";
import { HiDownload, HiLocationMarker, HiPhone, HiUser } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { GiFallingStar } from "react-icons/gi";
import { motion } from "framer-motion";

const About = () => {
  const conatainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="mt-12 pb-8" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="font-semibold inline-flex items-center gap-1 py-1.5  text-purple-600 px-3 mb-4">
          <GiFallingStar className="text-lg" />
          About
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          I build reliable server-side logic <br />
          to support today’s digital solutions.
        </h2>
      </motion.div>

      <motion.div
        variants={conatainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {/* <div className="bg-white/10 back-drop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            0+
          </h3>
          <p className="text-white-700 font-medium text-lg opacity-80">
            Happy clients
          </p>
        </div> */}
        <motion.div
          variants={item}
          // whileHover={{ scale: 1.05 }}
          className="custom-gradient bg-white/10 back-drop-blur-sm rounded-3xl p-8 text-center border border-outer"
        >
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            1+
          </h3>
          <p className="text-white-700 font-medium text-lg opacity-80">
            Years of experience
          </p>
        </motion.div>
        <motion.div
          variants={item}
          // whileHover={{ scale: 1.05 }}
          className="custom-gradient bg-white/10  back-drop-blur-sm rounded-3xl p-8 text-center border border-outer"
        >
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            4+
          </h3>
          <p className="text-white-700 font-medium text-lg opacity-80">
            Projects done
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
      >
        <div className="lg:col-span-2 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white-600 text-sm leading-relaxed opacity-70"
          >
            I am an aspiring Java Developer with BS Information Technology from
            University of Eastern Philippines. I specialize in building scalable
            backend systems, RESTful APIs and microservices using Spring Boot,
            Hibernate, JPA and JSON handling. Skilled in API testing with
            Postman and Swagger. Proficient in PostgreSQL, MariaDB, Firebase,
            GitHub, GitLab, and frontend integration with ReactJS & Next.js.
            Experienced in AI automation: Airtable AI Agents, n8n custom
            chatbots, chatbot integrations, SQL AI Agents. I communicate closely
            with teams and leaders to understand project needs and vision. I am
            eager to deliver reliable, efficient software solutions.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            href="/assets/Judens%20Bandal%20-%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className=" custom-gradient py-4 px-8 rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300 "
          >
            Download Resume
            <HiDownload className="text-lg" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="lg:col-span-1 space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium mb-1">
              <HiUser className="inline-block text-lg" />
              <span className="ml-2">Name</span>
            </p>
            <p className="text-xl font-semibold opacity-70">Judens Bandal</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium mb-1">
              <HiPhone className="inline-block text-lg" />
              <span className="ml-2">Phone</span>
            </p>
            <p className="text-xl font-semibold opacity-70">+63 9516240293</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium mb-1">
              <HiEnvelope className="inline-block text-lg" />
              <span className="ml-2">Email</span>
            </p>
            <p className="text-xl font-semibold opacity-70">
              judensbandal@gmail.com
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium mb-1">
              <HiLocationMarker className="inline-block text-lg" />
              <span className="ml-2">Location</span>
            </p>
            <p className="text-xl font-semibold opacity-70">
              Tanauan City Batangas
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
