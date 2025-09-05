import React from "react";
import { motion } from "framer-motion";

const DigitalTransformationConsultingServices = () => {
  return (
    <div id="digital-transformation" className="bg-black">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* ✅ Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
          Digital Transformation Consulting Services
        </h1>

        {/* Section 1 */}
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
          <div className="flex flex-col lg:flex-row items-center gap-8 text-white">
            <div className="lg:w-1/2">
              <motion.h2 className="text-3xl font-semibold">
                Your Strategic Partner in Industrial Digital Transformation
              </motion.h2>
              <motion.p className="text-lg mt-4">
                At Digital Manufacturing Solutions, we bridge the gap between
                shop-floor realities and boardroom strategy, delivering
                measurable ROI through targeted technology implementation.
              </motion.p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-red-600">Expertise</h3>
                <p className="text-lg mt-2">
                  Led by Dr. Vikramsinh Desai, with 20+ years of leadership
                  experience and a doctorate specializing in Industrial IoT, AI
                  & ML Adoption Strategies for manufacturing excellence.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-red-600">Impact</h3>
                <p className="text-lg mt-2">
                  Our unique combination of deep technology knowledge and
                  manufacturing domain expertise ensures practical, impactful
                  outcomes that drive operational excellence and competitive
                  advantage.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="w-full max-w-[480px] h-[350px] mx-auto rounded-lg overflow-hidden">
                <img
                  src="/images/dtcs-img-1.jpg"
                  alt="Manufacturing Transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          className="mb-12 border border-white p-6 rounded-lg bg-black text-white"
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
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold">
                Accelerating Your Manufacturing Excellence
              </h2>
              <ul className="list-disc pl-6 mt-4 text-lg space-y-4">
                <li>
                  <strong>Digital Transformation Consulting</strong>: Industry 4.0
                  readiness assessments and roadmap creation.
                </li>
                <li>
                  <strong>Smart Manufacturing Solutions</strong>: Real-time
                  monitoring, predictive analytics, and digital twins.
                </li>
                <li>
                  <strong>Manufacturing Intelligence</strong>: KPI dashboards and
                  data-driven insights for improvement.
                </li>
                <li>
                  <strong>Enterprise Integration</strong>: Seamless PLM, ERP, MES,
                  CRM synchronization.
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2">
              <div className="w-full max-w-[480px] h-[350px] mx-auto rounded-lg overflow-hidden">
                <img
                  src="/images/dtcs-img-2.jpg"
                  alt="Manufacturing Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Business Impact */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Our Business Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Faster Time-to-Market",
                  desc: "Reduce product development cycles by up to 35% with automation.",
                },
                {
                  title: "Cost Reduction",
                  desc: "Achieve 15–25% cost savings via lean processes & analytics.",
                },
                {
                  title: "Quality Excellence",
                  desc: "Decrease defects by 40% using real-time monitoring & predictive QC.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-orange-200 rounded-lg border border-white"
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                >
                  <h4 className="text-xl font-bold text-red-600">{item.title}</h4>
                  <p className="text-black mt-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3 */}
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
          <div className="flex flex-col lg:flex-row items-center gap-8 text-white">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold">
                Manufacturing Transformation Consultancy
              </h2>
              <p className="text-lg mt-4 font-bold">
                Turning Vision into Measurable Results
              </p>
              <p className="text-lg mt-2">
                Our consultancy team specializes in translating strategy into
                digital implementation that delivers measurable outcomes.
              </p>
            </div>

            <div className="lg:w-1/2">
              <div className="w-full max-w-[480px] h-[350px] mx-auto rounded-lg overflow-hidden">
                <img
                  src="/images/dtcs-img-3.jpg"
                  alt="Consultancy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4 */}
        <motion.section
          className="border border-white p-6 rounded-lg bg-black text-white"
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
          <h2 className="text-3xl font-semibold text-center mb-8">
            Manufacturing Transformation Consultancy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Assessment & Strategy",
                desc: "Evaluation of operations & technology landscape to create roadmaps.",
              },
              {
                title: "Implementation & Integration",
                desc: "Deploying solutions seamlessly with existing systems.",
              },
              {
                title: "Optimization & Scale",
                desc: "Continuous improvements for maximum ROI and scalable growth.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-orange-200 rounded-lg border border-white"
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
              >
                <h3 className="text-2xl font-bold text-red-600">{item.title}</h3>
                <p className="text-black mt-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DigitalTransformationConsultingServices;
