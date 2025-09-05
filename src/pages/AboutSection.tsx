import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import { Target, Users, Rocket, Globe } from "lucide-react";

const aboutPoints = [
  {
    text: `Founded in Oct 2014 with a clear Vision to Partner with Customers in their Journey of Digital & Business Transformation, with the help of Latest Technologies like CAD, CAM, CAE, PLM, Engineering, IT, ITES, IoT / IIoT, AIML & related Solutions & Services Offerings with our Diligent and Adaptive Support.`,
    icon: <Target className="w-8 h-8 text-red-500" />,
  },
  {
    text: `With a Team of Experienced Management & Technical Professionals, We stand apart from the others & become a Preferred Choice for their Management & Technological Consulting Needs.`,
    icon: <Users className="w-8 h-8 text-blue-400" />,
  },
  {
    text: `Agility & Adaptability are the Key Strengths of VM Intellect Team.`,
    icon: <Rocket className="w-8 h-8 text-green-400" />,
  },
  {
    text: `We have Strategic Partnerships with various leading organizations across the Globe.`,
    icon: <Globe className="w-8 h-8 text-yellow-400" />,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springTransition,
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-black min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Custom About heading with red lines */}
      <div className="flex items-center justify-center mb-12 w-full max-w-4xl relative z-10">
        <div className="flex-grow border-t-2 border-red-600 max-w-xs"></div>
        <h2 className="mx-6 text-5xl sm:text-6xl font-extrabold text-white tracking-wide">
          About
        </h2>
        <div className="flex-grow border-t-2 border-red-600 max-w-xs"></div>
      </div>

      {/* Animated fill + outline text */}
      <motion.span
        className="block mb-12 relative font-extrabold max-w-4xl text-center text-4xl sm:text-5xl z-10"
        initial={{ backgroundPosition: "100% 0" }}
        animate={{ backgroundPosition: "0% 0" }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background:
            "linear-gradient(90deg, #f44336 0%, #f44336 50%, transparent 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative",
          WebkitTextStroke: "1.5px white",
        }}
      >
        Our Journey & Strengths
      </motion.span>

      {/* About Points with Icons */}
      <motion.div
        className="space-y-8 max-w-3xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {aboutPoints.map((point, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white text-lg leading-relaxed shadow-md"
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0px 10px 30px rgba(244,67,54,0.6)",
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
              },
            }}
          >
            {/* Icon with subtle bounce */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            >
              {point.icon}
            </motion.div>

            <p>{point.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutSection;
