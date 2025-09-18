import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";
import { motion } from "framer-motion";

const conatiner = {
  hidden: {},
  show: { transition: { staggerChidren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  const sociaIcons = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
    { icon: FaFacebook, href: "https://www.facebook.com/" },
    { icon: FaInstagram, href: "https://www.instagram.com/" },
  ];
  return (
    <footer className="py-12 px-4 text-center">
      <motion.div
        variants={conatiner}
        initial="hidden"
        whileInView="show"
        className="flex justify-center gap-3 md:gap-6 mb-8"
      >
        {sociaIcons.map((social, index) => {
          const IconComp = social.icon;
          return (
            <motion.a
              variants={item}
              whileHover={{ scale: 1.02, rotate: 5 }}
              whileTap={{ sacle: 0.9 }}
              href={social.href}
              key={index}
              className="p-4 rounded-2xl border border-content/20  hover:bg-primary/10 transition-all"
            >
              <IconComp />
            </motion.a>
          );
        })}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8"
      >
        Feel free to reach out for projects, collaborations, or ideas.
      </motion.p>
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className=" border-content/20 mb-8"
      />
      <motion.div
        variants={conatiner}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-md text-content"
      >
        <motion.div variants={item}>
          <p className="font-semibold">
            <HiLocationMarker className="inline-flex" />
            <span className="ml-2">Location</span>
          </p>
          <p>Batangas City</p>
        </motion.div>
        <motion.div variants={item}>
          <p className="font-semibold">
            <HiPhone className="inline-flex" />
            <span className="ml-2">Phone</span>
          </p>
          <p>+63 9516240293</p>
        </motion.div>
        <motion.div variants={item} className="gap-2">
          <p className="font-semibold">
            <HiOutlineMail className="inline-block" />
            <span className="ml-2">Email</span>
          </p>
          <p>bandaljudens@gmail.com</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
