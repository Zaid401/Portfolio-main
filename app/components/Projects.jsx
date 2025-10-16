"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLaptopCode, FaClock } from "react-icons/fa";

import Image from "next/image";

export default function Projects() {
  return (
    <>
    <div className="w-full px-[12%] py-16 scroll-mt-20 bg-gray-50 text-gray-800">
      <motion.h2
        id="projects"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center text-5xl font-bold mb-10"
      >
        Proof of Work
      </motion.h2>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center text-gray-600 mt-3 mb-10 text-lg max-w-3xl mx-auto"
      >
        From frontend design to backend logic — I build complete, scalable, and
        modern web solutions tailored to your needs.
      </motion.p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* ------------------------------------------------------------------------ */}

        {/* Project 1 */}
       
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.03]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 rounded-lg">
              <Image
                src="/images/logo1.png"
                width={70}
                height={70}
                alt="Quicktory Logo"
                className="w-full rounded-lg"
              />
            </div>

            <h3 className="text-xl font-semibold">Quicktory</h3>
          </div>

          <p className="text-gray-600 mb-4">
            A history-based app that displays major events for any selected
            date.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "React",
              "Tailwind",
              "Material UI",
              "Node.js",
              "OpenAI API",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://quicktory-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/Zaid401/Quicktory-Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

{/* ------------------------------------------------------------------ */}

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.03]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-black text-green-600 rounded-xl">
              <Image
                src="/images/styli.png"
                width={65}
                height={65}
                alt="StyliQue Logo"
                className="w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">StyliQue</h3>
          </div>

          <p className="text-gray-600 mb-4">
           Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "React",
              "MUI",
              "Tailwind CSS",
              "Razorpay",
              "Nodemailer",
              "React Charts",
              "Node.js",
              "Express.js",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://stylique-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/Zaid401/StyliQue"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-600 text-green-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 hover:text-white transition-colors flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

{/* --------------------------------------------------------------------- */}
        {/* Project 3 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.03]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <i className="fa-solid fa-database text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold">QuickShort</h3>
          </div>

          <p className="text-gray-600 mb-4">
            QuickShort is an AI-powered tool that instantly generates unique and trending YouTube Shorts ideas tailored to your niche — perfect for creators who never want to run out of ideas.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {["React", "Express", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
            <div
      id="experience"
      className="w-full px-[12%] py-20 bg-[#f9fafb] text-gray-900 scroll-mt-20"
    >
      {/* Heading with Animation */}
      <motion.h2
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Here’s what I’ve been working on — real-world projects that helped me grow as a developer.
      </motion.p>

      {/* Experience Card */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto border border-gray-200"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-4">
          <FaLaptopCode className="text-blue-600 text-4xl" />
          <div>
            <h3 className="text-2xl font-semibold">Freelance Web Developer</h3>
            <p className="text-gray-600">Self-employed</p>
          </div>
        </div>

        <div className="flex items-center text-gray-500 gap-2 mb-4">
          <FaClock />
          <p>Jan 2023 - Present</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Worked with multiple clients as a freelance developer to build responsive, 
          modern websites and web apps using React, Tailwind CSS, and Node.js. 
          Focused on delivering high-quality, user-friendly digital experiences 
          that combine aesthetics with performance.
        </p>
      </motion.div>
    </div>
    </>
    
  );
}
