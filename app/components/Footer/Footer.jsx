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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="text-left md:mr-8">
              {section.logo && <img src={section.logo} alt="Identify Africa" className="h-20 mb-4" />}
              <h3 className="font-semibold mb-3">{section.title}</h3>
              {section.content && section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className={`mt-${pIndex === 0 ? '4' : '2'}`}>
                  {paragraph}
                  {section.link && pIndex === section.content.length - 1 && (
                    <> <a href={section.link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{section.link.text}</a></>
                  )}
                </p>
              ))}
              {section.links && (
                <ul className="space-y-4">
                  {section.links.map((link, lIndex) => (
                    <li key={lIndex}>
                      <a href={link.url} className="hover:underline" target={link.url.startsWith('http') ? "_blank" : "_self"} rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              )}
              {section.email && (
                <p className='mb-2'>Email Address: <a href={`mailto:${section.email}`} className="hover:underline">{section.email}</a></p>
              )}
            </div>
          ))}
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