'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="mt-10 md:ml-0 mb-6 px-4 md:px-0">
      <h2 className="text-base font-medium font-satoshi text-black md:mb-4">WHAT SETS US APART</h2>

      <p className="text-3xl md:text-4xl font-bold mb-12 max-w-5xl font-recoleta">
        Secure, compliant, and efficient identity verification solutions
      </p>

      <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-4`}>
        <Card
          src="/id.gif"
          alt="Digital Driver's License"
          title="Accurate Verification"
          text="Leverage our state-of-the-art technology, which is specially designed for African faces, ensuring a 99.8% accuracy rate in identity verification."
        />
        <Card
          src="/verification.gif"
          alt="Compliance Letter"
          title="Compliance at Scale"
          text="Stay ahead with our comprehensive solutions that meet local & international regulatory requirements, ensuring seamless KYC/AML compliance."
        />
        <Card
          src="/detection.gif"
          alt="Fraud Detection"
          title="Fraud Detection"
          text="Protect your business with advanced fraud detection techniques, including government checks to prevent identity theft and fraud."
        />
      </div>
    </section>
  );
}

function Card({ src, alt, title, text }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-lg mb-4 flex flex-col h-auto md:h-96">
      <div className="rounded-lg overflow-hidden flex-grow">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover md:h-72"
        />
      </div>
      <div className="p-4 flex flex-col justify-end flex-grow">
        <h3 className="text-2xl font-satoshi font-extrabold mb-2">{title}</h3>
        <p className="text-black font-satoshi text-base font-bold">
          {text}
        </p>
      </div>
    </div>
  );
}
