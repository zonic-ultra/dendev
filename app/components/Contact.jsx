import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending......");
    const formData = new FormData(event.target);

    formData.append("access_key", "916989e0-3878-4d70-849d-7af1ae698ff6");

    // const object = Object.fromEntries(formData);
    // const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();

      // remove message after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
        onSubmit={onSubmit}
        className="max-w-4xl max-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-xl font-semibold mb-5"
      >
        <div className="text-sm md:text-lg flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your name"
            required
            className="border-b-1 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
            className="border-b-1 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          />
        </div>

        {/* right side */}
        <div className="text-sm md:text-lg flex flex-col space-y-6 p-">
          <input
            type="text"
            name="Campany"
            id=""
            placeholder="Company name"
            required
            className="border-b-1 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          />
          <input
            type="tel"
            name="Phone"
            id=""
            placeholder="Phon number"
            required
            className="border-b-1 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          />
        </div>
        {/* text area */}

        <div className="md:col-span-2">
          <textarea
            name="message"
            id=""
            placeholder="Few words"
            required
            className=" text-sm md:text-lg w-full border-b-1 border-outer bg-transparent focus:outline-none focus:border-green-400 py-3"
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="text-sm md:text-lg mt-6 custom-gradient border rounded-full border-green-300 py-3 px-6 flex items-center gap-2 hover:text-green-400"
          >
            Send Message
            <FaPaperPlane className="text-green-400 inline-block" />
          </button>
        </div>
      </form>
      <span className="max-w-4xl max-auto  p-5 items-center justify-center ">
        {result}
      </span>
    </section>
  );
};

export default Contact;
