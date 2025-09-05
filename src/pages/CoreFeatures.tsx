import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import { Cpu, Brain, Network, Sparkles } from "lucide-react"; // AI-style icons

const aboutPoints = [
  "Digital Transformation & Industry 4.0",
  "Engineering & Product Development",
  "IIoT & AI Platforms",
  "Innovation & Research (VIA)",
  "Manufacturing Services",
  "Human Resources (NAMAN)",
  "Strategic Financial Services (SFS)",
  "Skill Development Programs",
  "Market Development (Lead-Spotter)",
  "AI Voice Agent Solutions",
  "24/7 Technical Support",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 12,
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

const icons = [Cpu, Brain, Network, Sparkles];

const CoreFeatures = () => {
  return (
    <section
    id="features"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-black relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/blob-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating glowing shapes in background */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full opacity-20 blur-2xl"
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-12 w-full relative z-10">
        <div className="flex items-center w-full justify-center">
          <div className="flex-grow border-t-2 border-red-600 max-w-xs"></div>
          <h2 className="mx-6 text-4xl sm:text-5xl font-extrabold text-white tracking-wide text-center">
            Features
          </h2>
          <div className="flex-grow border-t-2 border-red-600 max-w-xs"></div>
        </div>
        <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl">
          Discover how <span className="text-red-500 font-semibold">VM Intellect</span> 
          brings innovation, AI, and strategy together to fuel your growth.
        </p>
      </div>

      {/* Features + Video */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 relative z-10">
        {/* Left - Features */}
        <div className="w-full max-w-3xl">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {aboutPoints.map((point, index) => {
              const Icon = icons[index % icons.length]; // Rotate icons
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center justify-start p-5 bg-gray-900/70 border-2 border-white rounded-xl text-lg leading-relaxed text-white hover:border-red-600 hover:shadow-red-600 hover:shadow-md relative overflow-hidden"
                  whileHover={{
                    scale: 1.07,
                    y: -5,
                  }}
                >
                  {/* Floating glowing AI icon */}
                  <motion.div
                    className="mr-4 text-red-500 text-3xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Icon size={26} />
                  </motion.div>
                  <p>{point}</p>
                  {/* Glow effect overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-red-600 opacity-0"
                    whileHover={{ opacity: 0.1 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right - Video */}
        <motion.div
          className="w-full max-w-md relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <div className="bg-white rounded-xl p-1 shadow-lg relative overflow-hidden">
            {/* Glowing border animation */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-red-500"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <video
              className="max-w-full rounded-lg relative z-10"
              loop
              autoPlay
              muted
              playsInline
            >
              <source src="/videos/ai-human-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center mt-4 text-gray-300 text-sm">
            Experience the power of AI-driven human collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeatures;
