import React from "react";
import { motion } from "framer-motion";

const ManagementServicesPortfolio = () => {
  return (
    <div id="management-services" className="bg-black">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
          Management Services Portfolio
        </h1>

        {/* Create a two-column layout for the sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Section 1 - Lead-Spotter */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Lead-Spotter</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>A division of VM Intellect, focused on developing Offshore/Outsourced Inside Sales & Support Centers.</li>
              <li>Leverages market development and best marketing practices to enhance sales/business productivity for corporates.</li>
            </ul>
          </motion.section>

          {/* Section 2 - SFS - Strategic Financial Services */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">SFS - Strategic Financial Services</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Provides new age financial strategies and advice to organizations of all sizes.</li>
              <li>Helps businesses deploy financial controls and systems for long-term business excellence.</li>
              <li>Offers cost-effective financial business advice to SMEs, startups, mid-size organizations, and large enterprises.</li>
            </ul>
          </motion.section>

          {/* Section 3 - VM Intellect – NAMAN HRMS */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">VM Intellect – NAMAN HRMS</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Services HR needs of organizations with advanced HR strategies and advice.</li>
              <li>Helps businesses deploy HR Management Systems for long-term sustainability.</li>
              <li>Provides cost-effective HR services and consultations to businesses of all sizes.</li>
            </ul>
          </motion.section>

          {/* Section 4 - HRMS Services */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">HRMS Services</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Recruitment Services (on payroll & contractual) with Partner Program.</li>
              <li>Recruitment process development, deployment, and management.</li>
              <li>Salary benchmarking, skill gap analysis, and talent pool development.</li>
            </ul>
          </motion.section>

          {/* Section 5 - Employee Satisfaction & Evaluation */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Employee Satisfaction & Evaluation</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Employee, departmental, and organizational satisfaction evaluation and enhancement strategies.</li>
              <li>Performance evaluation and enhancement strategies for employees, departments, and organizations.</li>
              <li>KPI & KRA development, job allocations, and job profile preparation.</li>
            </ul>
          </motion.section>

          {/* Section 6 - Various Management Training Programs */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Various Management Training Programs</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Leadership, Management (Time, Self, People, Boss & Customer), and Strategy Planning.</li>
              <li>Cultural value system & reengineering of organizations, HR & administrative operations.</li>
              <li>Sales & marketing, intrapreneurship attitude development for organizational growth.</li>
            </ul>
          </motion.section>

          {/* Section 7 - Highlights of Our Programs */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Highlights of Our Programs</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Well-researched & customized content with powerful messages in simple language.</li>
              <li>Experiential learning with actions encouraged to ensure skill enhancement.</li>
              <li>Unique 60-day engagement follow-up mechanism for assured effectiveness.</li>
            </ul>
          </motion.section>

          {/* Section 8 - Signature Programs */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Signature Programs</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Ran-Bhoomi se Rang-Bhoomi – Transformation from “Competition to Performance”.</li>
              <li>Improve your Life with Vitamin-M, Lead Like Legends, and more!</li>
            </ul>
          </motion.section>

          {/* Section 9 - Ran-Bhoomi se Rang-Bhoomi */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Ran-Bhoomi se Rang-Bhoomi</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Competitive Mindset – War Room Environment.</li>
              <li>Performance Mindset – Performance Driven Culture.</li>
              <li>Cultural Understanding & Belief System.</li>
              <li>Management by Consequences.</li>
              <li>Inclusion Strategy for Growth.</li>
              <li>Competition to Collaboration.</li>
              <li>Invest and Leverage – Mantra for Success.</li>
            </ul>
          </motion.section>

          {/* Section 10 - Cultural Value System */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Cultural Value System</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Understanding Culture.</li>
              <li>Cultural Understanding & Belief System.</li>
              <li>Cultural Behaviour and Natural Behaviour.</li>
              <li>Driving Change by Inclusion.</li>
              <li>Organizational Culture Development.</li>
              <li>Value-Driven Culture – Success Mantra.</li>
            </ul>
          </motion.section>

          {/* Section 11 - Improve Your Life with Vitamin-M */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Improve Your Life with Vitamin-M</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Understanding of Currency Concept.</li>
              <li>How Do we Transact.</li>
              <li>Awareness of Financial Literacy.</li>
              <li>Understanding Value of Money.</li>
              <li>Sustainable Financial Growth Path.</li>
              <li>Use of Vitamin-M in Difficult Times.</li>
              <li>Financial Knowledge for Healthy & Balanced Life.</li>
            </ul>
          </motion.section>

          {/* Section 12 - Diversity Management */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Diversity Management</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Understanding of Diversity.</li>
              <li>Superficial Diversity vs Deep Understanding of Diversity.</li>
              <li>Workplace Diversity.</li>
              <li>Managing and Handling Differences.</li>
              <li>Agility and Adaptability.</li>
              <li>Empathy – Success for Diversity Management.</li>
              <li>Diversity Management for Growth & Innovation.</li>
            </ul>
          </motion.section>

          {/* Section 13 - Lead Like Legends */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Lead Like Legends</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Situational Leadership.</li>
              <li>Focus & Perspective Management.</li>
              <li>Team Mindset.</li>
              <li>Shared Vision.</li>
              <li>Inspiring & Empowering Team.</li>
              <li>Developing Effective and Performing Teams.</li>
            </ul>
          </motion.section>

          {/* Section 14 - Negotiation Skills */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Negotiation Skills</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Understanding the Transactional Process.</li>
              <li>Buyer-Seller Behaviour.</li>
              <li>Negotiation and its Importance.</li>
              <li>Planning the Negotiation.</li>
              <li>Styles of Negotiation.</li>
              <li>How to Structure Negotiations.</li>
              <li>Conflict Analysis.</li>
              <li>Value Establishment.</li>
              <li>Common Mistakes in Negotiation.</li>
              <li>Negotiating Tactics.</li>
              <li>Dealing with Price (Cost Vs. Value).</li>
              <li>Win-Win Proposition.</li>
            </ul>
          </motion.section>

          {/* Section 15 - Change Management Strategy */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Change Management Strategy</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>"Constant Change" – An Oxymoron.</li>
              <li>Understanding Change Management Process.</li>
              <li>Cultural Understanding & Belief System.</li>
              <li>Understanding Resistance & Root Cause.</li>
              <li>Objection Handling.</li>
              <li>Objective Driven Change & Consequences Driven Change.</li>
              <li>Inclusion & Exclusion Change Management Strategy.</li>
              <li>Agility and Adaptability for Growth.</li>
              <li>Transition Management while Driving Change.</li>
              <li>Indian Way of Managing Change.</li>
            </ul>
          </motion.section>

          {/* Section 16 - Training Programs for Entry Level Professionals */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Training Programs for Entry Level Professionals</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>SWOT Analysis.</li>
              <li>Goal Setting.</li>
              <li>Presentation Skills.</li>
              <li>Listening Skills & Group Discussion.</li>
              <li>Public Speaking.</li>
              <li>Team Activity (Use of Language Laboratory).</li>
              <li>Behavioural Skills.</li>
              <li>Personality Development.</li>
              <li>Stress Management.</li>
              <li>Letter & Application Writing.</li>
              <li>Developing Winning Attitude.</li>
            </ul>
          </motion.section>

          {/* Section 17 - Training Programs for Middle Management Professionals */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Training Programs for Middle Management Professionals</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Vision Building & Goal Setting.</li>
              <li>Importance of Self-belief & Understanding cultural Impact on individual and team belief.</li>
              <li>Developing Winners Mindset / Attitude.</li>
              <li>Winning with Teams / Developing Effective Teams.</li>
              <li>Finding Balance in Professional and Personal life.</li>
              <li>Basic Financial Education.</li>
              <li>Leadership Skill Development Trainings (Different programs for different levels of Managers).</li>
              <li>Play and Learn basics of Management.</li>
            </ul>
          </motion.section>

          {/* Section 18 - Training Programs for Top Management Professionals */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Training Programs for Top Management Professionals</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Vision Building & Goal Setting.</li>
              <li>Winning with Teams / Developing Effective Teams.</li>
              <li>Fix your Problems in Chanakya’s way.</li>
              <li>Grow your Business in Chanakya’s way.</li>
              <li>Importance of Being Focused or Getting your Right Focus.</li>
              <li>Leadership Skill Development Trainings (Different programs for different levels of Managers).</li>
            </ul>
          </motion.section>

          {/* Section 19 - Marketing Skill Development Programs */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Marketing Skill Development Programs</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Effective Lead Generation Techniques or methodology.</li>
              <li>Deploying Effective Inside Sales & Support Team (ISS Team).</li>
              <li>Direct Events and Running Effective Marketing Campaigns.</li>
              <li>Digital Marketing Techniques (Effective usage of Social & Web Marketing).</li>
              <li>Public Relationship Management (PR Strategy Development and Management).</li>
              <li>Tracking value addition & effectiveness of Marketing Activities.</li>
            </ul>
          </motion.section>

          {/* Section 20 - Sales Skill Development Programs */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">Sales Skill Development Programs</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>Prospecting and Different Ways of Prospecting.</li>
              <li>Customer Need Analysis.</li>
              <li>Funnel & Pipeline Development.</li>
              <li>Understanding Customer Buying Behaviour / Cycle.</li>
              <li>How to Open a Call or How to Take a Cold Call.</li>
              <li>Effective Self Introduction & Getting the desired Impact.</li>
              <li>Negotiation Skills.</li>
              <li>Presentation Skills.</li>
              <li>Effective Customer Relationship Management Skills.</li>
              <li>SPIN Selling.</li>
              <li>Key Account Management / Large Account Management.</li>
              <li>Channel Sales Management.</li>
              <li>Value Selling or Taking Consultative Sales Approach.</li>
              <li>Sales Strategy Planning & Effective Execution (For Middle & Top Level Management).</li>
            </ul>
          </motion.section>

          {/* Section 21 - HR Skill Development Programs */}
          <motion.section
            className="border border-white p-6 rounded-lg"
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
            <h2 className="text-3xl font-semibold text-white">HR Skill Development Programs</h2>
            <ul className="list-disc pl-6 mt-4 text-lg text-white space-y-4">
              <li>New Age & Effective Recruitment Process.</li>
              <li>Employee Satisfaction Evaluation & Enhancement – Appraisal.</li>
              <li>KRA & KPI Development.</li>
              <li>Job Allocations & Job Profile Preparation.</li>
            </ul>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default ManagementServicesPortfolio;
