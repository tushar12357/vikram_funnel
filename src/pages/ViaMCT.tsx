import React from "react";
import { motion } from "framer-motion";

const ViaMCT = () => {
  return (
    <div id="via-mct" className="bg-black">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Main Title */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-2 tracking-wide">
          VIA-MCT
        </h1>
        
        {/* Subtitle below the main title */}
        <h2 className="text-xl font-semibold text-center text-white mb-12">
          (Various Integrated and Applied Management Concepts and Techniques)
        </h2>

        {/* Section 1 - Various Integrated and Applied - VIA Management Concepts and Techniques */}
        <motion.section
          className="mb-12 border border-white p-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            y: -10,
            boxShadow: "0px 20px 40px rgba(255,0,0,0.3)",
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <h2 className="text-3xl font-semibold text-white">Various Integrated and Applied - VIA Management Concepts and Techniques</h2>
          <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
            <li>A division of VM Intellect, founded with a clear Vision to develop an Innovation & Research Centers in the Field of Management & Engineering.</li>
            <li>Purpose of this Establishment is to bridge the Knowledge GAP between Industry & Academia, And to Develop Future Professionals.</li>
          </ul>
        </motion.section>

        {/* Section 2 - VMI - GET-P (Graduate Engineering Training Programs) */}
        <motion.section
          className="mb-12 border border-white p-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            y: -10,
            boxShadow: "0px 20px 40px rgba(255,0,0,0.3)",
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <h2 className="text-3xl font-semibold text-white">VMI - GET-P (Graduate Engineering Training Programs)</h2>
          <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
            <li>To develop Job Ready Future Professionals (Skill Development Programs for Budding Engineers & Intrapreneurs to be Job ready with Industry Required Skills).</li>
            <li>Purpose of this Program is to provide ready-to-hire Manpower to the Industries & open up employment opportunities for Engineering & Management Freshers.</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default ViaMCT;
