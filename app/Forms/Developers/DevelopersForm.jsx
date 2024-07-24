'use client';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const DevelopersForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    jobTitle: '',
    companyWebsite: '',
    industry: '',
    companySize: '',
    projectName: '',
    projectDescription: '',
    apisOfInterest: '',
    expectedVolume: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    
    const loadingToast = toast.loading('Sending your message...');
    
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
     
      
      if (response.ok) {
        toast.success('Message sent successfully!', { id: loadingToast });
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          jobTitle: '',
          companyWebsite: '',
          industry: '',
          companySize: '',
          projectName: '',
          projectDescription: '',
          apisOfInterest: '',
          expectedVolume: '',
          comments: '',
        });
      } else {
        toast.error(`Error: ${data.message}`, { id: loadingToast });
      }
    } catch (error) {
     
      toast.error('An error occurred while sending the message', { id: loadingToast });
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#FFFBF8] p-4 w-full max-w-full font-satoshi">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[93%]">
        <h2 className="text-2xl font-bold font-satoshi uppercase mb-6 p-2">Personal Information</h2>
        <div className="font-satoshi grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-black mb-2 text-base font-semibold">Full Name<span className="text-red-500">*</span></label>
            <input
              className="border focus:border-none outline-none p-4 bg-gray-50 rounded w-full"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Please enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-black mb-2 text-base font-semibold">Phone Number<span className="text-red-500">*</span></label>
            <input
              className="border focus:border-none outline-none p-4 bg-gray-50 rounded w-full"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Please enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-black mb-2 text-base font-semibold">Email Address<span className="text-red-500">*</span></label>
            <input
              className="border focus:border-none outline-none p-4 bg-gray-50 rounded w-full"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Please enter your email address"
              required
            />
          </div>
          <div>
            <label className="block text-black mb-2 text-base font-semibold">Job Title</label>
            <input
              className="border focus:border-none outline-none p-4 bg-gray-50 rounded w-full"
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Please enter your job title"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-black mb-2 text-base font-semibold">Company Website<span className="text-red-500">*</span></label>
            <input
              className="border p-4 focus:border-none outline-none bg-gray-50 rounded w-full"
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="Please enter your company website"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-black mb-2 text-base font-semibold">Industry<span className="text-red-500">*</span></label>
            <select
              className="border p-4 bg-gray-50 rounded w-full pr-8 focus:border-none outline-none appearance-none"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            >
              <option value="">Please select the industry</option>
              <option value="technology">Banks</option>
              <option value="finance">Fintech</option>
              <option value="healthcare">Gaming</option>
              <option value="education">Real Estate</option>
              <option value="media">Ecommerce</option>
              <option value="legal">Education</option>
              <option value="other">Insurance</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-6 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.59 7.41L10 11.83l4.41-4.42L16 9l-6 6-6-6z" />
              </svg>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-base font-semibold">Company Size<span className="text-red-500">*</span></label>
            <input
              className="border p-4 bg-gray-50 rounded focus:border-none outline-none w-full"
              type="text"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              placeholder="Please enter your company size"
              required
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Project Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-2 text-base font-semibold">Project Name</label>
            <input
              className="border p-4 bg-gray-50 focus:border-none outline-none rounded w-full"
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Please enter your project name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-base font-semibold">Project Description</label>
            <input
              className="border p-4 bg-gray-50 focus:border-none outline-none rounded w-full"
              type="text"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Please enter your project description"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 text-base font-semibold">Expected Volume</label>
            <input
              className="border p-4 bg-gray-50 focus:border-none outline-none rounded w-full"
              type="text"
              name="expectedVolume"
              value={formData.expectedVolume}
              onChange={handleChange}
              placeholder="Please enter your expected volume"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 text-base font-semibold">Comments</label>
          <textarea
            className="border p-4 bg-gray-50 focus:border-none outline-none rounded w-full"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Please enter your comments"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#FF725E] text-white text-xl py-2 px-6 rounded-md hover:bg-[#E76C21] transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default DevelopersForm;