import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Briefcase, Lightbulb, Users, Rocket, ArrowDown } from "lucide-react";

const steps = [
  {
    title: "Select Your Business Focus",
    description:
      "Identify your business needs (Digital transformation, AI solutions, etc.) and select a service.",
    year: "Step 1",
    icon: <Briefcase className="w-10 h-10 text-red-400" />,
    highlight: "Clarity on goals",
  },
  {
    title: "Get a Customized Solution",
    description:
      "Receive a personalized strategy and solution tailored to your business goals.",
    year: "Step 2",
    icon: <Lightbulb className="w-10 h-10 text-yellow-400" />,
    highlight: "Tailored strategies",
  },
  {
    title: "Consultation & Strategy",
    description:
      "Collaborate with our experts to design a detailed strategy for your transformation process.",
    year: "Step 3",
    icon: <Users className="w-10 h-10 text-blue-400" />,
    highlight: "Expert guidance",
  },
  {
    title: "Integrate & Set Up",
    description:
      "We integrate the solutions, set up the systems, and ensure your team is fully ready to operate.",
    year: "Step 4",
    icon: <Rocket className="w-10 h-10 text-green-400" />,
    highlight: "Seamless execution",
  },
];

const PricingSection = () => {
  return (
    <section className="bg-black py-20 text-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Get Started with <span className="text-red-500">VM Intellect</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Follow the steps below to choose the right plan and get your business
          transformation started. Every step brings you closer to innovation,
          growth, and success.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="pb-14"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="p-8 rounded-2xl bg-black shadow-xl text-center border border-gray-800"
              >
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                <p className="mt-4 text-red-400 italic">✨ {step.highlight}</p>
                <p className="mt-6 font-bold text-white">{step.year}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Arrow Section */}
        <div className="mt-20 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg text-gray-300 mb-4"
          >
            Ready to explore? Discover our{" "}
            <span className="text-red-500 font-semibold">Plans</span>
          </motion.p>

          {/* Futuristic AI Arrow */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="relative flex justify-center items-center"
          >
            {/* Arrow Icon */}
            <ArrowDown className="w-14 h-14 text-red-500 drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]" />

            {/* AI Glow Pulse Behind Arrow */}
            <motion.div
              className="absolute w-20 h-20 rounded-full bg-red-500/30 blur-2xl"
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0.1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Rotating AI Halo Ring */}
            <motion.div
              className="absolute w-24 h-24 border-2 border-red-500/40 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default PricingSection;
