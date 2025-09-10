import React, { useState } from "react";
import { SiChatbot } from "react-icons/si";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Porfolio", href: "#porfolio" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease">
      <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] py-4">
        <a href="#" className="text-2xl md:text-3xl font-bold mr-6">
          DenDev<span className="text-primary text-3xl">.</span>
        </a>

        {/* nav links */}
        <div className="hidden min-[825px]:flex items-center gap-4 bg-base shadow-lg opacity-80 px-8 py-3 rounded-full">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={link.href || index}
              className="text-content text-[15px] font-bold hover:text-content-alter transition-all duration-300 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* desktop */}
        <a
          href="#"
          className="hidden min-[825px]:flex text-[16px] font-semibold custom-gradient py-3 px-8 text-content rounded-full items-center gap-2 hover:opacity-90 transition-opacity"
        >
          AI
          <SiChatbot className="text-lg" />
        </a>

        {/* mobile */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="min-[825px]:hidden p-2 text-content-700 hover:text-content-alter transition-colors"
        >
          {isMenuOpen ? (
            <div>
              <RiCloseLine className="text-2xl" />
            </div>
          ) : (
            <div>
              <RiMenu4Line className="text-2xl" />
            </div>
          )}
        </button>
      </nav>
      {/* mobile menu */}
      {isMenuOpen && (
        <div className="min-[825px]:hidden fixed w-full top-[80px] z-40">
          <div className="bg-base shadow-lg rounded-2xl mx-4 mt-2 p-6">
            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <a
                  onClick={closeMenu}
                  key={link.href || index}
                  href={link.href}
                  className="text-content text-[18px] font-bold hover:text-content-alter py-3 transition-all duration-300 ease-in-out"
                >
                  {link.name}
                </a>
              ))}

              {/* ai assistance */}
              <a
                onClick={closeMenu}
                href="#"
                className="flex text-[18px] font-semibold custom-gradient py-3 px-8 text-content rounded-full items-center gap-2 hover:opacity-90 transition-opacity"
              >
                AI
                <SiChatbot className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
