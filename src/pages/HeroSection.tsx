import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// StatsPanel component with glassmorphism and animated red glow
const StatsPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
      className="relative max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm text-white rounded-2xl border border-white/40 backdrop-blur-md p-6 shadow-lg"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    >
      {/* Subtle red glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-2xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(239, 68, 68, 0.4), transparent 70%)",
          zIndex: -1,
        }}
        animate={{
          x: ["-10%", "10%", "-10%"],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div>
        <div className="text-red-400 text-xl font-bold">25%</div>
        Cost Reduction Achieved
      </div>
      <div>
        <div className="text-blue-400 text-xl font-bold">40%</div>
        Defect Rate Reduced
      </div>
      <div>
        <div className="text-green-400 text-xl font-bold">35%</div>
        Faster Time-to-Market
      </div>
      <div>
        <div className="text-yellow-400 text-xl font-bold">24/7</div>
        AI Voice Engagement
      </div>
    </motion.div>
  );
};

// Arrow SVG component
const ArrowIcon = () => (
  <svg
    className="w-5 h-5 text-red-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
  </svg>
);

// Testimonial Component
const Testimonial = () => (
  <motion.blockquote
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.6 }}
    className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mt-16 text-gray-200 italic shadow-xl mb-12"
  >
    <p className="text-lg leading-relaxed mb-4">
      &ldquo;VM Intellect helped us reduce costs by 25% and accelerated our
      production timelines — a true game changer for our business.&rdquo;
    </p>
    <footer className="text-sm font-semibold text-red-500">
      — CEO, Leading Manufacturing Firm
    </footer>
  </motion.blockquote>
);

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%"],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex flex-col items-center text-white relative overflow-hidden pt-20 sm:pt-28 px-4">
      {/* Subtle glowing blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto text-center w-full z-10">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-red-600/80 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 shadow-md"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Trusted by Enterprises Across Industries
        </motion.span>

        {/* Futuristic Glitch + Typewriter Heading */}
        <motion.h1
          animate={controls}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent"
          style={{ backgroundSize: "200% 100%" }}
        >
          Business Transformation, Delivered.
        </motion.h1>

        <TypeAnimation
          sequence={[
            "🚀 Empowering Businesses with AI & Innovation...",
            2000,
            "🤖 Driving Digital Transformation since 2014...",
            2000,
            "🌐 Building a Future of Intelligent Solutions...",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="block text-lg sm:text-xl md:text-2xl font-mono text-red-400 tracking-wide mb-8 glitch"
          repeat={Infinity}
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-10"
        >
          VM Intellect helps you streamline operations, boost profitability, and
          accelerate innovation — from Industry 4.0 readiness to AI-driven
          customer engagement.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center flex-wrap gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="#start-trial"
            className="relative overflow-hidden bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Start Your Free Trial
            <motion.span
              className="inline-block"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowIcon />
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-14 relative z-10">
          <StatsPanel />
        </div>

        {/* Testimonial */}
        <Testimonial />
      </div>
    </section>
  );
};

export default HeroSection;
