import React from 'react';

const footerSections = [
  {
    title: null,
    content: [
      "We aim to establish a global benchmark in secure identity verification and data validation, enhancing trust and security across digital interactions and empowering businesses to thrive in the African market, one verification at a time.",
      "Licensed by ODPC"
    ],
    logo: "/white-logo.png",
    link: {
      text: "ODPC",
      url: "https://odpc.go.ke"
    }
  },
  {
    title: "Quick Links",
    links: [
      { text: "About Us", url: "/about" },
      { text: "Products & Solutions", url: "/products" },
      { text: "Developers", url: "/developers" },
      { text: "Get in touch", url: "/developers" }
    ]
  },
  {
    title: "Connect With Us",
    links: [
      { text: "LinkedIn", url: "https://linkedin.com/identityafrica" }
    ]
  },
  {
    title: "Contact",
    content: [
      "Email Address: info@identifyafrica.io",
      "Phone Number: +254 722 273 324",
      "Physical Address: The Address, Muthangari Drive, Nairobi, Kenya"
    ],
    email: "info@identifyafrica.io"
  }
];

const bottomLinks = [
  { text: "Terms & Conditions", url: "#terms" },
  { text: "Privacy Policy", url: "/privacy" }
];

const Footer = () => {
  return (
    <footer className="bg-[#2E1607] text-white w-full md:mt-10 font-satoshi">
      <div className="px-6 md:px-20 py-8 md:mr-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 text-left md:mr-8">
            <img src="/white-logo.png" alt="Identify Africa" className="h-20 mb-4" />
            <p className="mt-4 text-base">
              We aim to establish a global benchmark in secure identity verification and data validation, enhancing trust and security across digital interactions and empowering businesses to thrive in the African market, one verification at a time.
            </p>
            <p className="mt-4">
              Licensed by <a href="https://odpc.go.ke" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ODPC</a>
            </p>
          </div>
          <div className="md:col-span-2 text-left md:mr-2">
            <h3 className="font-extrabold mb-5">Quick Links</h3>
            <ul className="space-y-6">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/products" className="hover:underline">Products & Solutions</a></li>
              <li><a href="/developers" className="hover:underline">Developers</a></li>
              <li><a href="/developers" className="hover:underline">Get in touch</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 text-left md:mr-8 md:-mr-8">
            <h3 className="font-extrabold mb-3">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com/identityafrica" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="md:col-span-4 md:pl-20 md:-pr-14 text-left">
            <h3 className="font-extrabold mb-3">Contact</h3>
            <div className='space-y-6'>
              <p>Email Address: <br/> <a href="mailto:info@identifyafrica.io" className="hover:underline">info@identifyafrica.io</a></p>
              <p>Phone Number:<br/>  +254 722 273 324</p>
              <p>Physical Address: <br/> The Address, Muthangari Drive, Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-white text-black w-full">
        <div className="px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between text-sm">
          <p className="mb-2 md:mb-0 text-left">&copy; Copyright 2024. Identify Africa</p>
          <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">
            {bottomLinks.map((link, index) => (
              <a key={index} href={link.url} className="hover:underline">{link.text}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
