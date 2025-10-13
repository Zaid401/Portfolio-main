import { FaPaperPlane } from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "f4a0177a-0208-487a-9e9e-0c92234d207c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0"
    >
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section */}
            <motion.div
              className="p-6 mr-2 bg-gray-100 sm:rounded-lg"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight"
              >
                Get in touch
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-lg text-gray-600 mt-2"
              >
                Let's connect! Whether it's a project, idea, or just a friendly
                hello — I’d love to hear from you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-center mt-8 text-gray-600"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                  />
                </svg>
                <div className="ml-4 font-semibold text-md w-40">
                  +91 8302654527
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-center mt-4 text-gray-600"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 font-semibold text-md w-40">
                  <a href="mailto:zaidkhan45664@gmail.com">
                    zaidkhan45664@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex gap-7 text-gray-500 mt-4"
              >
                <a
                  href="https://www.instagram.com/_zaid_401/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="size-7 cursor-pointer hover:text-gray-700 hover:-translate-y-1 duration-300" />
                </a>

                <a href="https://x.com/" target="blank">
                  <RiTwitterXFill className="size-7 cursor-pointer hover:text-gray-700 hover:-translate-y-1 duration-300" />
                </a>

                <a href="https://github.com/Zaid401" target="blank">
                  <FaGithub className="size-7 cursor-pointer hover:text-gray-700 hover:-translate-y-1 duration-300" />
                </a>

                <a
                  href="https://www.linkedin.com/in/zaid-khan-6094ba283/"
                  target="blank"
                >
                  <FaLinkedinIn className="size-7 cursor-pointer hover:text-gray-700 hover:-translate-y-1 duration-300" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.form
              onSubmit={onSubmit}
              className="p-6 flex flex-col justify-center"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-black focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-black focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-black focus:outline-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 md:w-40 bg-white text-black font-bold py-2 px-4 rounded-lg mt-4 border border-black hover:bg-black hover:text-white transition duration-300"
              >
                <FaPaperPlane className="text-lg" />
                Send Now
              </motion.button>
              <p className="mt-4">{result}</p>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
