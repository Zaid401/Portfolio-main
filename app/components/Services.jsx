import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";

export default function Services() {

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 90,
      },
    },
  };

  return (
    <div className="w-full px-[12%] py-16 scroll-mt-20 bg-[#f9fafb] text-gray-900">
      <motion.h2
        id="services"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center text-5xl font-bold mb-4"
      >
        Services
      </motion.h2>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center text-gray-600 mt-2 mb-12 text-lg max-w-3xl mx-auto"
      >
        I help brands and individuals build modern, high-performance web applications — combining clean design with powerful functionality.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="p-8 cursor-pointer bg-white rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
        >
          <div className="flex justify-center mb-4">
            <FaCode className="text-blue-600 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">Web Development</h3>
          <p className="text-gray-600 leading-relaxed">
            I build fast, responsive, and interactive websites using modern tools like React, Tailwind CSS, and Node.js — optimized for all devices.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="p-8 cursor-pointer bg-white rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
        >
          <div className="flex justify-center mb-4">
            <FaPaintBrush className="text-pink-500 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">UI/UX Design</h3>
          <p className="text-gray-600 leading-relaxed">
            I design clean, minimal, and user-focused interfaces that deliver smooth user experiences and visually engaging layouts.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.4 }}
          className="p-8 cursor-pointer bg-white rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
        >
          <div className="flex justify-center mb-4">
            <FaServer className="text-green-600 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">Backend Solutions</h3>
          <p className="text-gray-600 leading-relaxed">
            I create secure and scalable backend systems with Node.js and Express, integrating APIs and databases to power modern applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
