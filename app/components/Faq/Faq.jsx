'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className={`mb-4 ${isOpen ? 'shadow-xs' : ''} transition-shadow duration-300`}>
      <button
        className={`w-full text-left p-6 transition-colors duration-200 flex justify-between items-center ${
          isOpen ? 'bg-[#FAE2D3] text-black' : 'bg-white hover:bg-[#FAE2D3] text-black'
        }`}
        onClick={toggleOpen}
      >
        <span className="font-bold text-base">{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          isOpen ? 'open' : ''
        }`}
      >
        <div className="p-4 bg-white text-base">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How can I get started with Identify Africa?",
      answer: "Simply contact us through our website, email, or phone to learn more about our customer and business verification solutions. Our experts are ready to help you tailor our services to your needs."
    },
    {
      question: "How does your ID verification work?",
      answer: "Our ID verification system instantly verifies government-issued IDs from over 200 countries using state-of-the-art AI technology, ensuring high accuracy and security."
    },
    {
      question: "Who can benefit from your services?",
      answer: "Our solutions are ideal for fintechs, financial institutions, startups, investors, and individual professional or academic researchers looking to understand and validate data within the African continent."
    },
    {
      question: "How do you protect user data?",
      answer: "We implement advanced encryption protocols and secure storage solutions to protect sensitive user information, coupled with real-time monitoring to detect and mitigate potential threats."
    },
    {
      question: "What regulatory standards do you comply with?",
      answer: "Identify Africa ensures compliance with local and international regulations, including GDPR, CCPA, and various industry-specific standards, to meet your KYC/AML requirements."
    },
    {
      question: "What makes Identity Africa different from its competitors?",
      answer: "Our differentiation factor is our unified secure API-based verification, validation, and authentication services, providing seamless and efficient access to crucial data points across Africa."
    }
  ];

  return (
    <div className="md:pt-10  mb-6 w-full px-4 md:px-0">
      <h2 className="text-base font-medium font-satoshi text-black md:mb-4 ">FREQUENTLY ASKED QUESTIONS</h2>
      <p className="text-3xl md:text-4xl font-extrabold mb-6 font-recoleta">Need Help? Find Answers Here</p>
      <div className="space-y-4 bg-white text-lg font-satoshi">
        {faqData.map((item, index) => (
          <FAQItem 
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
