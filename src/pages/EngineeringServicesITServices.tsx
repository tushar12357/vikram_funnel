import { motion } from "framer-motion";
import { FaCogs, FaRegEye, FaTools, FaPlug, FaChartLine } from "react-icons/fa"; // Removed FaDatabase

// Data for all sections
const section1Title = "Preferred Partner for your Engineering & Reverse Engineering Services";
const section1Points = [
  "3D Scanning",
  "3D Inspection Services",
  "CAD Comparison",
  "Legacy Data Migration",
  "New Product Development",
  "Engineering CAD & CAE Services",
];

const section2Title = "Engineering Services Offerings";
const section2Points = [
  "CAD, CAE and CAM Services",
  "Reverse Engineering and 3D Scanning Services",
  "New Product Development Design & Development Services",
  "Product and Tool Designing and Detailing Services",
  "2D to 3D Conversion Projects (Legacy Data Conversion Projects)",
  "Plastic Injection Molding Flow Simulation Services",
  "CNC & VMC Job Work & Manufacturing",
];

const section3Title = "IT Service Portfolio";
const section3Points = [
  "L1 & L2 Technical Support Services",
  "Business Application Services",
  "Enterprise Solutions & Applications",
  "Enterprise Collaboration Services",
  "Testing and Assurance Services",
  "Functionality & New Features Development",
];

const section4Data = [
  {
    title: "Connect",
    description: "Sensors, Devices, Applications",
    details: "Establishes connectivity for a unified IIoT infrastructure.",
    icon: <FaPlug />,
    additionalDetails: [
      "SSO Configuration",
      "Upgrade / Updates",
      "Performance Tuning",
      "HA Configuration"
    ],
  },
  {
    title: "Build",
    description: "Tools, Applications, and Data Management",
    details: "Develops tools and applications for real-time data processing.",
    icon: <FaTools />,
    additionalDetails: [
      "Dashboard Management",
      "Kepware EX",
      "Windchill Navigate"
    ],
  },
  {
    title: "Analyse",
    description: "Real-time & Complex IoT Data",
    details: "Analyzes real-time data and complex IoT information for insights.",
    icon: <FaChartLine />,
  },
  {
    title: "Manage",
    description: "Control Over Connected Systems",
    details: "Manages connected devices, processes, and systems for better control.",
    icon: <FaCogs />,
    additionalDetails: [
      "Connectivity with DotNet, Java, and C SDKs",
      "Asset Management",
      "Connection Server Management"
    ],
  },
  {
    title: "Experience",
    description: "Digital & AR Interfaces",
    details: "Integrates physical objects and system engagement with human interaction.",
    icon: <FaRegEye />,
    additionalDetails: [
      "ThingWorx Integration with Windchill",
      "ThingWorx Other Enterprise Applications (Like ERP, SCM, CRM)"
    ],
  },
];

const EngineeringServicesITServices = () => {
  return (
    <section id="engineering-services" className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-20">

        {/* Main title for the entire section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">Engineering Services & IT Solutions</h1>
          <p className="text-lg text-gray-400 mt-2">
            A comprehensive approach to engineering, reverse engineering, and IT services for seamless business growth.
          </p>
        </div>

        {/* Section 1 and Section 2 in one row with reduced gap */}
        <div className="flex flex-wrap justify-between gap-4 mb-12">
          {/* Section 1 - Preferred Partner Card */}
          <div className="w-full lg:w-5/12">
            <motion.div
              className="relative group p-6 md:p-8 rounded-xl bg-black shadow-xl border-2 border-white overflow-hidden"
            >
              <h2 className="text-3xl font-semibold text-center mb-6">{section1Title}</h2>
              <ul className="list-disc list-inside space-y-3">
                {section1Points.map((point, index) => (
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
            </motion.div>
          </div>

          {/* Section 2 - Engineering Services Offerings Card */}
          <div className="w-full lg:w-5/12">
            <motion.div
              className="relative group p-6 md:p-8 rounded-xl bg-black shadow-xl border-2 border-white overflow-hidden"
            >
              <h2 className="text-3xl font-semibold text-center mb-6">{section2Title}</h2>
              <ul className="list-disc list-inside space-y-3">
                {section2Points.map((point, index) => (
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
            </motion.div>
          </div>
        </div>

        {/* Section 3 - IT Service Portfolio Card */}
        <div className="mb-12">
          <motion.div
            className="relative group p-6 md:p-8 rounded-xl bg-black shadow-xl border-2 border-white overflow-hidden"
          >
            <h2 className="text-3xl font-semibold text-center mb-6">{section3Title}</h2>
            <ul className="list-disc list-inside space-y-3">
              {section3Points.map((point, index) => (
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
          </motion.div>
        </div>

        {/* Section 4 - IIoT Services Offerings as a Single Large Card */}
        <div className="mb-12">
          <motion.div
            className="relative group p-6 md:p-8 rounded-xl bg-black shadow-xl border-2 border-white overflow-hidden"
          >
            <h2 className="text-4xl font-bold text-center mb-6">IIoT Services Offerings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {section4Data.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-black text-white border-2 border-white p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="text-3xl text-red-500 mr-4"
                      whileHover={{ scale: 1.3, rotate: 15 }} // Icon animation
                    >
                      {step.icon}
                    </motion.div>
                    <h4 className="text-2xl font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-gray-300 mt-2">{step.description}</p>
                  <p className="text-gray-400 mt-2">{step.details}</p>
                  {step.additionalDetails && (
                    <ul className="list-disc list-inside text-gray-400 mt-4">
                      {step.additionalDetails.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          className="text-lg"
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
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringServicesITServices;
