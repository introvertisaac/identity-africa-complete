"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import "../../styles/fonts.css"
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  const router = useRouter();
  const handleGetStartedClick = () => {
    router.push('/developers');
  };
  const handleLearnMoreClick = () => {
    router.push('/products');
  };

  return (
    <div className="bg-white md:px-8 py-2 w-full shadow-lg rounded-2xl mt-12 md:mt-4 ">
      <div className="flex flex-col py-4 md:py-12 md:flex-row items-center md:items-start justify-between mb-10 px-4">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-block mb-6">
            <div className="bg-[#FAE2D3] text-[#B9561A] px-3 py-1 rounded-full inline-block">
              <p className='text-base px-4 py-2 font-satoshi font-bold'>THE CONTINENT OF AFRICA</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 font-recoleta items-start text-left">
            Empowering Africa with Secure Identity Verification
          </h1>
          <p className="text-gray-600 mb-6 md:mt-2 font-satoshi leading-tight text-base  text-left items-start">
            Effortlessly verify identities with cutting-edge technology tailored for the African market.
          </p>
          <div className="flex flex-row space-x-4 mb-8 md:mt-4 font-semibold w-full md:w-auto justify-center md:justify-start">
            <button
              className="bg-[#E76C21] text-base flex items-center justify-center text-white px-6 py-2 rounded-full flex-1 md:flex-initial"
              onClick={handleGetStartedClick}
            >
              Get Started <FaArrowRight className='ml-2' style={{ width: '10px', height: '14px' }} />
            </button>
            <button
              className="border text-base border-[#E76C21] text-[#E76C21] px-6 py-2 rounded-full flex-1 md:flex-initial"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </div>

          <div className="mt-6  w-5/6 md:w-auto">
            <div className="bg-white rounded-full p-2 items-center space-x-4 max-w-xl border border-[#FAE2D3] shadow-md flex flex-col md:flex-row">
              <div className="w-40 md:w-64 lg:w-80 h-auto">
                <Image
                  src="/People.svg"
                  alt="User Avatars"
                  width={300}
                  height={120}
                  className="rounded-full w-full h-auto"
                />
              </div>
              <div className="text-gray-700 pr-6 w-full  md:w-2/3 flex-col items-center justify-center text-center">
                <span className="font-bold text-xl md:text-2xl text-[#E76C21]">300M+</span>
                <p className="text-black text-sm md:text-base px-8 md:px-2 font-recoleta">verifications completed under 2 secs API response time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative mt-8 md:mt-0">
          <Image
            src="/map.svg"
            alt="Africa Map with Verification Icons"
            width={600}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}