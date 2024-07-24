import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { IoMdDocument, IoIosWallet, IoMdPerson } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaCheckCircle, FaChartBar, FaIdCard, FaUsers, FaClipboardList, FaFileAlt, FaUser, FaFile } from 'react-icons/fa';

const specialties = [
    {
        icon: <IoMdPerson className="text-[#E76C21] text-2xl" />,
        title: "Customer KYC Verification",
        description: "Our KYC service satisfies KYC compliance requirements so that you can focus on securing other important areas of your business. Identify and verify customer IDs in seconds to improve the overall customer onboarding experience."
    },
    {
        icon: <HiBuildingOffice2 className="text-[#E76C21] text-2xl" />,
        title: "Business KYC Verification",
        description: "Leverage our Know Your Business solution to uncover hidden threats to your business early in the relationship. Perform registry, customers, board and ultimate beneficial owners (UBOs) screening on our robust KYB solution."
    },
    {
        icon: <IoIosWallet className="text-[#E76C21] text-2xl" />,
        title: "Transactional Details Validation",
        description: "Ensuring the accuracy and authenticity of transactional data."
    },
    {
        icon: <IoMdDocument className="text-[#E76C21] text-2xl" />,
        title: "Document Authentication",
        description: "Validating various documents to ensure their authenticity and reliability."
    }
];

const teamMembers = [
    {
        name: "Winnie Chira",
        role: "Founder - CEO",
        image: "/winnie.png"
    },
    {
        name: "Gary Schwartz",
        role: "Advisor",
        image: "/gary.png"
    },
    {
        name: "Teresina Kamau",
        role: "Customer Success Lead",
        image: "/teresina.png"
    },
    {
        name: "Janice Malu",
        role: "Head of Marketing",
        image: "/janice.png"
    },
    {
        name: "Alex Kariuki",
        role: "Technical Lead",
        image: "/alex.png"
    }
];

const testimonials = [
    {
        quote: "With Identify Africa, we reduced our onboarding time by 60% and significantly enhanced our security measures. Their solutions have been integral to our growth.",
        author: "FinTech Innovator ABC"
    },
    {
        quote: "The comprehensive verification tools from Identify Africa have enabled us to stay compliant and secure while scaling our operations globally.",
        author: "Global FinTech Leader XYZ"
    }
];

const AboutUs = () => {
    return (
        <div className=" px-4 py-8 bg-[#FFFBF8]   max-w-full  md:px-20 ">
            <section className='pt-24 w-full flex flex-col items-center bg-[#FFFBF8]'>
                <div className='text-center min-w-full md:max-w-[60%] lg:max-w-[80%] mb-8 flex justify-center items-center align-middle '>
                    <h2 className="text-4xl font-extrabold max-w-6xl font-recoleta">
                        We are here to ensure <span className="text-[#E76C21]">secure</span> and<span className="text-[#E76C21]"> seamless </span>digital interactions for your business
                    </h2>
                </div>
            </section>

            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4  mb-4 md:mb-12">
                    <img src="/collage1.png" alt="Identify Africa team working" className="w-full  h-40 md:h-64 object-cover rounded-lg md:col-span-3" />
                    <img src="/collage2.png" alt="Digital identity verification process" className="w-full h-40 md:h-64 object-cover rounded-lg md:col-span-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
                    <img src="/collage3.png" alt="Secure data processing" className="w-full h-40 md:h-64 object-cover rounded-lg md:col-span-2" />
                    <img src="/collage4.png" alt="African business landscape" className="w-full h-40 md:h-64 object-cover rounded-lg md:col-span-3" />
                </div>
            </section>

            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    <div className="md:col-span-4 flex flex-col">
                        <div className="mb-8 md:mb-0 flex-grow">
                            <h2 className="text-base font-medium font-satoshi text-black md:mb-4 ">OUR STORY</h2>
                            <h3 className="text-4xl font-semibold mb-4 font-recoleta">Who We Are</h3>
                            <p className="text-base leading-relaxed mb-4 font-satoshi">
                                Founded in 2023, Identify Africa is a female-founded fintech company leveraging strategic partnerships to distribute our services and drive growth. We pride ourselves on streamlining access to African markets through unified, secure APIs, helping companies and developers connect to crucial services and datasets that fully identify and understand the region&apos;s people and assets.
                            </p>
                        </div>
                        <div className="mb-8 md:mb-0 flex-grow">
                            <h3 className="text-4xl font-semibold mb-4 font-recoleta">Our Mission</h3>
                            <p className="text-baseleading-relaxed mb-4 font-satoshi">
                                At Identify Africa, we pride ourselves in streamlining access to Africa through unified secure APIs. We help companies and developers connect to services and datasets that are crucial to fully identify and understand the African markets, its people, and assets.
                            </p>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-4xl font-semibold mb-4 font-recoleta">Why Choose Us</h3>
                            <p className="text-base leading-relaxed font-satoshi">
                                Identify Africa stands out for its unified secure API-based verification, validation, and authentication services, providing seamless access to crucial data points across Africa. Our dedicated support team is always available to assist with any challenges or questions you may have, ensuring you get the most out of our solutions.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-2 flex flex-col justify-between items-end space-y-4">
                        <div className="bg-[#B9561A] md:w-10/12 text-white p-4 rounded-2xl shadow-md flex-grow flex flex-col justify-center items-center text-center">
                            <h4 className="text-4xl = mb-2 font-recoleta">95%</h4>
                            <p className='font-satoshi'>Compliance rate with international and local regulatory standards</p>
                        </div>
                        <div className="bg-[#B9561A] md:w-10/12 text-white p-4 rounded-2xl shadow-md flex-grow flex flex-col justify-center items-center text-center">
                            <h4 className="text-4xl mb-2 font-recoleta">80%</h4>
                            <p className='font-satoshi'>Reduction in onboarding time for clients using our APIs</p>
                        </div>
                        <div className="bg-[#B9561A] md:w-10/12 text-white p-4 rounded-2xl shadow-md flex-grow flex flex-col justify-center items-center text-center">
                            <h4 className="text-4xl mb-2 font-recoleta">99.9%</h4>
                            <p className='font-satoshi'>Accuracy in identity verification across over 20 government ID databases</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <h2 className="text-base font-medium font-satoshi text-black md:mb-4">OUR SPECIALTIES</h2>
                <h3 className="text-4xl font-semibold mb-4 font-recoleta">What We Do</h3>
                <p className='text-base leading-relaxed font-satoshi'>We offer a comprehensive suite of verification solutions tailored to meet the unique needs of businesses and customers in the African fintech landscape. Our services include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-satoshi">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="p-6 bg-white shadow rounded-lg flex flex-col md:flex-row items-start h-full">
                            <div className="w-16 h-16 bg-[#FFFBF8] rounded-xl flex items-center justify-center mb-4 md:mb-0 md:mr-4 border border-[#E76C21] flex-shrink-0">
                                {specialty.icon}
                            </div>
                            <div className="flex-grow text-left">
                                <h4 className="text-2xl font-bold font-satoshi mb-2">{specialty.title}</h4>
                                <p className="text-base leading-relaxed font-satoshi">{specialty.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mb-12">
                <h2 className="text-base font-medium font-satoshi text-black md:mb-4">OUR TEAM</h2>
                <h3 className="text-4xl font-semibold mb-4 font-recoleta">Meet the dedicated team behind Identify Africa&apos;s success</h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-satoshi">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="p-4 bg-white shadow rounded-lg ">
                            <img src={member.image} alt={`${member.name} - ${member.role} at Identify Africa`} className="w-full h-72 mx-auto mb-2 rounded object-cover" />
                            <h4 className="text-2xl font-satoshi font-bold mb-2">{member.name}</h4>
                            <p className="font-satoshi">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-base font-medium font-satoshi text-black md:mb-4">SUCCESS STORIES</h2>
                <h3 className="text-4xl font-semibold mb-4 font-recoleta">How Identify Africa transforms the digital space</h3>
                <div className="flex flex-col md:flex-row gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-10 bg-white shadow rounded-lg relative ">
                            <ImQuotesLeft className="absolute top-2 md:mb-4 left-2 text-[#FAE2D3] text-xl" />
                            <p className="mb-4 mt-4 text-base leading-relaxed font-satoshi">&ldquo;{testimonial.quote}&ldquo;</p>
                            <p className="font-bold text-base italic font-satoshi">~ {testimonial.author}</p>
                            <ImQuotesRight className="absolute bottom-2 right-2 text-[#FAE2D3] text-xl" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;