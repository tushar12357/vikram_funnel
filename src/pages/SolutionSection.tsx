import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if clicked again
    } else {
      setActiveIndex(index); // Open the clicked section
    }
  };

  const sections = [
    {
      title: "VIMANA Solutions",
      content: [
        "Connect: Bridges the gap between legacy equipment and modern systems by enabling MTConnect compliance, ensuring future-proof connectivity across industrial setups.",
        "Elevate: Offers dashboards, predictive analytics, and process automation to boost productivity and collaboration in smart manufacturing environments.",
        "Maintain: Focuses on predictive maintenance, asset health insights, and integration with CMMS to avoid downtime and optimize maintenance schedules.",
        "Field: A field service management solution for connected products, which monitors equipment fleets and predicts failures, integrating with CRM for customer insights.",
        "Vision: A cloud-agnostic industrial analytics platform transforming data from industrial assets into actionable insights, with flexible deployment options."
      ],
    },
    {
      title: "Vikshana (AI-Powered Platform)",
      content: [
        "Real-time operations management with AI-driven smart assistance and KPI analytics dashboards.",
        "Supports compliance with industry standards like APQP, IATF, VDA, and AS9100.",
        "Integration with core tools like FMEA, MSA, PPAP, and SPC for manufacturing excellence."
      ],
    },
    {
      title: "Strategic Partnerships",
      content: [
        "Partners with Moldex3D for plastic injection molding solutions, Andrew Additive for 3D printing, and Hexagon MSC Software for production software.",
        "Provides advanced CAD solutions through partnerships with Graebert CAD and FieldMI Technologies."
      ],
    },
    {
      title: "Human Resources Management Services (NAMAN)",
      content: [
        "Offers comprehensive HR services like recruitment, salary benchmarking, talent pool development, and performance evaluation.",
        "Focuses on employee satisfaction, organizational performance, and KPI development."
      ],
    },
    {
      title: "Skill Development Programs",
      content: [
        "Programs for leadership, strategic planning, negotiation skills, and sales strategies.",
        "Customized programs for entry-level to top management professionals, focusing on skills like goal setting, public speaking, and negotiation tactics."
      ],
    },
    {
      title: "Engineering & IT Services",
      content: [
        "Provides CAD, CAM, CAE services, and reverse engineering.",
        "Offers IT services such as business application services, technical support, enterprise solutions, and IIoT services."
      ],
    },
  ];

  return (
    <div id="solution" className="bg-black text-white p-6 relative">
      {/* Title Section */}
      <div className="flex items-center justify-center py-4 w-full max-w-4xl mx-auto">
        <div className="flex-grow border-t-2 border-red-600 max-w-xs"></div>
        <h2 className="mx-6 text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
          Solutions
        </h2>
        <div className="flex-grow border-t-2 border-red-600 max-w-xs"></div>
      </div>

      {/* Accordion Sections */}
      <div className="max-w-4xl mx-auto space-y-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer flex justify-between items-center p-4 text-lg font-bold hover:text-red-500"
            >
              <span>{section.title}</span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                &#9660;
              </motion.span>
            </div>

            {/* Smooth Accordion Transition */}
            <motion.div
              className={`p-4 ${activeIndex === index ? 'block' : 'hidden'} bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg shadow-md transition-all duration-300 ease-out ${activeIndex === index ? 'border-2 border-red-100' : ''}`}
              initial={{ height: 0 }}
              animate={{
                height: activeIndex === index ? 'auto' : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              style={{ overflow: 'hidden' }}
            >
              <ul className="space-y-4">
                {section.content.map((item, idx) => (
                  <motion.li
                    className="leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    key={idx}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
