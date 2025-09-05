import React from "react";
import { motion } from "framer-motion";

// Data for the card
const manufacturingTitle = "Manufacturing Facility / Set-up";
const manufacturingDescription =
  "State-of-the-art Machineries and Technologies in Manufacturing Processes helps us to maintain the quality Parameters. Also with Advance Quality Inspection tools and Processes guide us to meet the Customers Quality Requirements.";

const expertisePoints = [
  "CNC & VMC Machining Components & Assemblies",
  "Spare Wheel Assembly",
  "Diesel Suction Pipe Assembly",
  "Diesel Tank Strap Assembly",
  "Filter Flange & M18 and M14 Flange",
  "Sealing Plug",
  "All types of Studs",
  "Tube Bending Components",
  "Sheet Metal Press Parts (With CO2 & TIG fabrication Technology)",
  "Advance Fabrication Jobs (CO2 & TIG Welding)",
];

const ManufacturingFacilityServices = () => {
  return (
    <section id="manufacturing-facility" className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-20">

        {/* Main Title for the Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">
            Manufacturing Facility & Services
          </h1>
        </div>

        {/* Manufacturing Facility Card */}
        <div className="relative group p-6 md:p-8 rounded-xl bg-black shadow-xl border-2 border-white overflow-hidden">
          <h2 className="text-3xl font-semibold text-center mb-6">
            {manufacturingTitle}
          </h2>
          <p className="text-lg text-gray-400 text-center mb-6">
            {manufacturingDescription}
          </p>

          {/* Expertise List */}
          <ul className="list-disc list-inside space-y-3">
            {expertisePoints.map((point, index) => (
              <motion.li
                key={index}
                className="text-lg text-gray-300"
                whileHover={{
                  scale: 1.05,
                  color: "#ff3b3b", // Change color to red when hovered
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ManufacturingFacilityServices;
