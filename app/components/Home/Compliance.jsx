import { FaLock, FaShieldAlt } from 'react-icons/fa';
import { IoShieldCheckmark } from "react-icons/io5";

const SecurityCompliance = () => {
  return (
    <div className="mb-6 px-4 md:px-0">
      <p className="text-3xl md:text-4xl font-bold mb-4 font-recoleta">Security & Compliance</p>

      <p className="mb-8 text-base">
        At Identify Africa, we prioritize the highest standards of security and compliance to safeguard your operations and protect user data. Our robust measures ensure adherence to global regulatory frameworks, providing peace of mind in an ever-evolving digital landscape.
      </p>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row  bg-white p-6 shadow-md rounded-lg">
          <div className=''>
            <div className="w-16 h-16 flex-shrink-0 bg-[#FFFBF8] rounded-xl flex items-center justify-center mb-4 sm:mb-0 border border-[#E76C21]">
              <FaLock className="text-[#E76C21] text-2xl" />
            </div>
          </div>
          <div className="sm:ml-4 text-left">
            <h2 className="text-2xl font-bold font-satoshi mb-2">Regulatory Adherence</h2>
            <p className='text-base'>Stay compliant with stringent international and local regulations, including GDPR, CCPA, and industry-specific standards.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row  bg-white p-6 shadow-md rounded-lg">
          <div>
            <div className="w-16 h-16 flex-shrink-0 bg-[#FFFBF8] rounded-xl flex items-center justify-center mb-4 sm:mb-0 border border-[#E76C21]">
              <IoShieldCheckmark className="text-[#E76C21] text-2xl" />
            </div>
          </div>

          <div className="sm:ml-4 ">
            <h2 className="text-2xl font-bold font-satoshi mb-2">Data Protection</h2>
            <p className='text-base'>Implement advanced encryption protocols and secure storage solutions to protect sensitive user information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCompliance;