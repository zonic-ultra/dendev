import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaVoicemail,
} from "react-icons/fa";
import {
  HiLocationMarker,
  HiOutlineMail,
  HiOutlineMailOpen,
  HiPhone,
} from "react-icons/hi";

const Footer = () => {
  const sociaIcons = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
    { icon: FaFacebook, href: "https://www.facebook.com/" },
    { icon: FaInstagram, href: "https://www.instagram.com/" },
  ];
  return (
    <footer className="py-12 px-4 text-center">
      <div className="flex justify-center gap-3 md:gap-6 mb-8">
        {sociaIcons.map((social, index) => {
          const IconComp = social.icon;
          return (
            <a
              href={social.href}
              key={index}
              className="p-4 rounded-2xl border border-content/20  hover:bg-primary/10 transition-all"
            >
              <IconComp />
            </a>
          );
        })}
      </div>
      <p className="text-xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8">
        Feel free to reach out for projects, collaborations, or ideas.
      </p>
      <hr className=" border-content/20 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-md text-content">
        <div>
          <p className="font-semibold">
            <HiLocationMarker className="inline-flex" />
            <span className="ml-2">Location</span>
          </p>
          <p>Batangas City</p>
        </div>
        <div>
          <p className="font-semibold">
            <HiPhone className="inline-flex" />
            <span className="ml-2">Phone</span>
          </p>
          <p>+63 9516240293</p>
        </div>
        <div className="gap-2">
          <p className="font-semibold">
            <HiOutlineMail className="inline-block" />
            <span className="ml-2">Email</span>
          </p>
          <p>bandaljudens@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
