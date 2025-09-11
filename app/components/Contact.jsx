import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";

const Contact = () => {
  return (
    <section className="mt-12 pb-8" id="contact">
      <div className="text-center mb-10">
        <p className="font-semibold inline-flex items-center gap-2 text-purple-600">
          <GiFallingStar className="text-lg" />
          Contact
        </p>
        <h2 className="text-gradient text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Let’s turn ideas <br /> into reality
        </h2>
      </div>
      {/* conatct form */}
      <form
        action=""
        className="max-w-4xl max-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-xl font-semibold"
      >
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your name"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          />
        </div>

        {/* right side */}
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Company name"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          />
          <input
            type="tel"
            name=""
            id=""
            placeholder="Phon number"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          />
        </div>
        {/* text area */}

        <div className="md:col-span-2">
          <textarea
            name=""
            id=""
            placeholder="🙂"
            required
            className="w-full border-b-2 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          ></textarea>
        </div>
        <button className="border rounded-full border-green-300 p-2 hover:text-green-400">
          Send Message <FaPaperPlane className="text-green-400 inline-block " />
        </button>
      </form>
    </section>
  );
};

export default Contact;
