import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Best option for personal use & for your next project.",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
  },
  {
    name: "Company",
    price: "$99",
    period: "/month",
    description: "Relevant for multiple users, extended & premium support.",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 10 developers",
      "Premium support: 24 months",
      "Free updates: 24 months",
    ],
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "/month",
    description: "Best for large scale uses and extended redistribution rights.",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 100+ developers",
      "Premium support: 36 months",
      "Free updates: 36 months",
    ],
  },
];

const PriceCard: React.FC = () => {
  return (
    <section id="pricing" className="bg-black text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">
            Flexible plans designed for your business
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At VM Intellect, we provide transparent and scalable pricing options
            tailored to businesses of every size—so you can choose the right
            plan and focus on driving growth without limitations.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0px 20px 40px rgba(255, 0, 0, 0.3)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative flex flex-col p-6 rounded-lg border border-gray-700 bg-black shadow-lg overflow-hidden group"
            >
              {/* Glow border effect */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-red-500 opacity-0 group-hover:opacity-100 blur-md"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              <h3 className="mb-4 text-2xl font-semibold relative z-10">
                {plan.name}
              </h3>
              <p className="font-light text-gray-400 relative z-10">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-8 relative z-10">
                <span className="mr-2 text-5xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-4 text-left relative z-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    {/* Check icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 
                          8a1 1 0 01-1.414 0l-4-4a1 
                          1 0 011.414-1.414L8 12.586l7.293-7.293a1 
                          1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="relative z-10 text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceCard;
