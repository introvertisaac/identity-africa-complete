'use client'
import React, { useState } from 'react';
import { FaMobileAlt, FaBuilding, FaShoppingCart, FaLeaf, FaPlus, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  {
    Icon: FaMobileAlt,
    name: 'Fintech Companies',
    description: 'Empowering fintech startups and established financial institutions with robust KYC and AML compliance solutions, enabling secure and seamless financial transactions.',
  },
  {
    Icon: FaBuilding,
    name: 'Banking Institutions',
    description: 'Providing comprehensive identity verification and compliance solutions to banks, ensuring secure and efficient customer onboarding and transaction monitoring.',
  },
  {
    Icon: FaShoppingCart,
    name: 'E-commerce Platforms',
    description: 'Supporting e-commerce businesses with identity verification and fraud detection solutions to protect against fraudulent activities and ensure safe online transactions.',
  },
  {
    Icon: FaLeaf,
    name: 'Digital Lending',
    description: 'Enabling digital lending platforms with accurate identity verification and compliance solutions, facilitating secure and compliant lending processes.',
  },
];

function IndustryCard({ Icon, name, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-start w-full md:w-[20%] bg-white p-6 relative transition-all duration-500 shadow-lg rounded-lg h-72 mx-2 md:mx-0"
      layout
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            className="flex flex-col items-start w-full h-full justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-[#FFFBF8] rounded-xl flex items-center justify-center mb-4 border border-[#E76C21]">
              <Icon className="text-[#E76C21] text-2xl" />
            </div>
            <p className="font-bold text-2xl mb-2 font-satoshi">{name}</p>
            <div
              className="cursor-pointer absolute bottom-6 right-6"
              onClick={() => setIsExpanded(true)}
            >
              <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center border-2 border-black">
                <FaPlus className="text-gray-50 text-xs" />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="absolute inset-0 bg-[#E76C21] text-white p-6 flex flex-col items-start justify-start rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                <Icon className="text-[#E76C21] text-3xl" />
              </div>
            </motion.div>
            <motion.p 
              className="font-bold mb-2 font-satoshi text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {name}
            </motion.p>
            <motion.p 
              className="text-md font-satoshi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {description}
            </motion.p>
            <div
              className="cursor-pointer absolute bottom-6 right-6"
              onClick={() => setIsExpanded(false)}
            >
              <div className="w-4 h-4 bg-white rounded-full text-2xl font-bold flex items-center justify-center border-2 border-white">
                <FaTimes className="text-[#E76C21] text-xs" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function IndustriesServed() {
  return (
    <section className="px-4 md:px-0 mb-6">
      <h2 className="text-base font-medium font-satoshi text-black md:mb-4 ">WHO WE SERVE</h2>
      <p className="text-3xl md:text-4xl font-semibold mb-16 max-w-4xl font-recoleta">
        Securing digital interactions across diverse industries in Africa
      </p>
      <div className="flex flex-wrap justify-center md:justify-between items-stretch space-y-8 md:space-y-0 md:space-x-2">
        {industries.map(({ Icon, name, description }, index) => (
          <IndustryCard key={index} Icon={Icon} name={name} description={description} />
        ))}
      </div>
    </section>
  );
}