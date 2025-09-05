import React from "react";
import { motion } from "framer-motion";

const vimanaSteps = [
  {
    title: "VIMANA Connect",
    function:
      "Securely connects and collects data from industrial equipment (CNCs, robots, sensors, etc.).",
    value:
      "Enables legacy equipment to become MTConnect compliant, integrates data for unified shop floor visibility, and ensures future-proof connectivity.",
  },
  {
    title: "VIMANA Elevate",
    function: "Operational excellence tool for smart manufacturing.",
    value:
      "Offers dashboards, predictive analytics, and process automation. It integrates shop floor data with business systems to improve productivity and collaboration.",
  },
  {
    title: "VIMANA Maintain",
    function: "Maintenance and reliability analytics.",
    value:
      "Provides asset health insights, predictive maintenance, and integrates with CMMS systems to prevent downtime and prioritize maintenance activities.",
  },
  {
    title: "VIMANA Field",
    function: "Field service management for connected products.",
    value:
      "Monitors fleets of equipment, predicts failures, and feeds service data back into the design process. Integrates with CRM for customer insights.",
  },
  {
    title: "VIMANA Vision",
    function: "Industrial analytics platform.",
    value:
      "A cloud-agnostic platform that transforms data from industrial assets into actionable insights, supporting flexible deployments (edge, on-premise, cloud).",
  },
];

// ✅ Type fix for CRSN steps
type CrsnStep = {
  title: string;
  description?: string;
  features?: { heading: string; description: string }[];
};

const crsnSteps: CrsnStep[] = [
  {
    title: "Core Platform Features",
    features: [
      {
        heading: "Real-time Operations Management",
        description:
          "Manage real-time operations efficiently to ensure smooth production.",
      },
      {
        heading: "Role-based access control",
        description: "Control user access based on roles for better data security.",
      },
      {
        heading: "AI-based Smart Assistance",
        description:
          "AI-powered assistance to help decision-making and improve productivity.",
      },
      {
        heading: "Workflow Configurator and Activity Designer",
        description: "Design workflows and manage tasks with ease.",
      },
      {
        heading: "KPI Analytics Dashboards",
        description:
          "Monitor key performance indicators through interactive dashboards.",
      },
      {
        heading: "Supplier Database & Verification Tools",
        description: "Verify and manage suppliers for better procurement processes.",
      },
      {
        heading: "Secure Cloud Architecture",
        description: "Store and manage data securely on the cloud.",
      },
      {
        heading: "Contextual Search & Traceability",
        description:
          "Advanced search capabilities for easy access to important information.",
      },
      {
        heading: "APQP / IATF / VDA / AS9100 standards compliance",
        description:
          "Ensure compliance with industry standards like APQP, IATF, VDA, AS9100.",
      },
    ],
  },
  {
    title: "Workflow Modules & Solution Tracks",
    features: [
      {
        heading: "Customer RFQ & Input Management",
        description:
          "From RFQ receipt to PO award, tracking quotation reviews, customer inputs, and risk estimation.",
      },
      {
        heading: "Product Engineering & Sourcing Management",
        description:
          "Covers BOM generation, process planning, sourcing, infra setup, compliance planning.",
      },
      {
        heading: "Program Management",
        description:
          "Program scoping, risk mitigation planning, technical review, KPI monitoring.",
      },
      {
        heading: "Manufacturing Process Management",
        description:
          "PFMEA, Control Plan, Prototype, PPAP validations, Pilot Runs 1 & 2.",
      },
      {
        heading: "Change Management & Continuous Improvement",
        description:
          "Change tracking from requirement to feasibility analysis, implementation, and validation.",
      },
    ],
  },
  {
    title: "Built-in Core Tool Integration (No 3rd Party Needed)",
    features: [
      {
        heading: "FMEA (AIAG & VDA)",
        description:
          "Failure Modes and Effects Analysis for better risk management.",
      },
      {
        heading: "MSA (Measurement Systems Analysis)",
        description: "Evaluate measurement systems to ensure data accuracy.",
      },
      {
        heading: "PPAP (Production Part Approval Process)",
        description:
          "Approval process for production parts to meet quality standards.",
      },
      {
        heading: "SPC (Statistical Process Control)",
        description:
          "Monitor and control processes using statistical methods.",
      },
    ],
  },
  {
    title: "Service Offerings",
    features: [
      {
        heading: "Implementation Support & Workflow Customization",
        description: "Get support with custom workflow implementation.",
      },
      {
        heading: "Supplier Pre-Assessment & Verification Services",
        description: "Verify and assess suppliers before collaboration.",
      },
      {
        heading: "Engineering Change Management Consulting",
        description: "Consulting for better change management processes.",
      },
      {
        heading: "APQP / IATF Readiness & Certification Preparedness",
        description: "Get ready for APQP and IATF certification.",
      },
      {
        heading: "Real-time Monitoring Setup & Analytics Dashboards",
        description:
          "Set up real-time monitoring systems and dashboards for analysis.",
      },
      {
        heading: "Smart AI Assist Enablement for Digital Transformation",
        description: "Leverage AI to drive your digital transformation.",
      },
      {
        heading: "Secure Cloud Hosting, Role-Specific Training",
        description:
          "Ensure secure cloud hosting and role-specific training for your teams.",
      },
    ],
  },
];

// ✅ FieldMI Steps
const fieldMISteps = [
  {
    title: "Sales Automation",
    description:
      "We offer mobile-based unique solution for Sales Automation (SFA) powered with AI & ML.",
  },
  {
    title: "Service Management",
    description:
      "Achieve Customer Tickets to Customer Delight using our mobile-based service management software.",
  },
  {
    title: "Distribution Management",
    description:
      "Manage entire supply chain on our easy, adoptable, and agile DMS Software.",
  },
  {
    title: "Expense Management",
    description:
      "Manage entire expense workflow with rule-based, GPS-enabled mobile app tool.",
  },
  {
    title: "Sales Order Management",
    description:
      "Geo-tagged, time-stamped order and sales return tracking. Real-time order acceptance based on distributor inventory.",
  },
  {
    title: "Schemes & Discount",
    description: "Run various types of schemes and discounts to retailers.",
  },
  {
    title: "Intelligent Order Suggestions",
    description:
      "Innovative algorithms to sell smarter via suggested orders, highlighted focus SKUs, and more.",
  },
  {
    title: "Field Force Management",
    description:
      "Geo-tagged, time-stamped order and sales return tracking. Real-time order acceptance based on distributor inventory.",
  },
  {
    title: "Customer 360 Degree",
    description:
      "Audit opening and closing stock at distributor and retail outlets.",
  },
  {
    title: "Task Management",
    description:
      "Innovative algorithms to sell smarter via suggested orders, highlighted focus SKUs, and more.",
  },
  {
    title: "Retail Merchandising",
    description:
      "Geo-tagged, time-stamped order and sales return tracking. Real-time order acceptance based on distributor inventory.",
  },
  {
    title: "Leads & Opportunity",
    description:
      "Audit opening and closing stock at distributor and retail outlets.",
  },
  {
    title: "VAN Sales",
    description: "Run various types of schemes and discounts to retailers.",
  },
  {
    title: "MIS Reports",
    description:
      "Innovative algorithms to sell smarter via suggested orders, highlighted focus SKUs, and more.",
  },
];

const TechnologySolutionsSalesServices = () => {
  return (
    <section id="technology-solutions" className="bg-black py-20 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Technology Solutions Sales & Services
        </h2>

        {/* VIMANA Unified Card */}
        <div className="relative group p-6 rounded-xl bg-black shadow-xl border-2 border-white overflow-hidden mb-12">
          <h3 className="text-3xl font-semibold text-center mb-6">VIMANA</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {vimanaSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start p-6 rounded-xl bg-gray-900 border-2 border-white text-white hover:border-red-600"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
              >
                <h4 className="text-2xl font-semibold">{step.title}</h4>
                <p className="text-gray-300 mt-2">{step.function}</p>
                <p className="text-gray-400 mt-2">{step.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CRSN Unified Card */}
        <div className="relative group p-6 rounded-xl bg-black shadow-xl border-2 border-white overflow-hidden mb-12">
          <h3 className="text-3xl font-semibold text-center mb-6">CRSN</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {crsnSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start p-6 rounded-xl bg-gray-900 border-2 border-white text-white hover:border-red-600"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
              >
                <h4 className="text-2xl font-semibold">{step.title}</h4>
                {step.description && (
                  <p className="text-gray-300 mt-2">{step.description}</p>
                )}
                {step.features && (
                  <ul className="text-gray-400 mt-2 list-disc list-inside">
                    {step.features.map((feature, i) => (
                      <li key={i} className="text-white">
                        <strong>{feature.heading}</strong>:{" "}
                        {feature.description}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* FieldMI Unified Card */}
        <div className="relative group p-6 rounded-xl bg-black shadow-xl border-2 border-white overflow-hidden">
          <h3 className="text-3xl font-semibold text-center mb-6">FieldMI</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {fieldMISteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start p-6 rounded-xl bg-gray-900 border-2 border-white text-white hover:border-red-600"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
              >
                <h4 className="text-2xl font-semibold">{step.title}</h4>
                <p className="text-gray-300 mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySolutionsSalesServices;
