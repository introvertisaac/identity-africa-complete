'use client';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Toaster, toast } from 'react-hot-toast';

const GetInTouchModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    contactMethod: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
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
          contactMethod: '',
          message: '',
        });
        onClose(); // Close modal after successful submission
      } else {
        toast.error(`Error: ${data.message}`, { id: loadingToast });
      }
    } catch (error) {
      
      toast.error('An error occurred while sending the message', { id: loadingToast });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 font-satoshi flex items-center justify-center bg-black bg-opacity-50">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white w-full md:max-w-4xl relative rounded-3xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FiX className="text-2xl" />
        </button>
        <h2 className="bg-[#E76C21] text-white p-10 rounded-t-3xl text-xl md:text-2xl font-semibold mb-6">
          GET IN TOUCH WITH US
        </h2>
        <form className="space-y-6 p-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-black font-bold items-center" htmlFor="fullName">
                Full Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 p-4 block w-full rounded-md border pl-4 bg-gray-50 border-gray-300 shadow-sm focus:border-none outline-none"
                placeholder="Please enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-black font-bold items-center" htmlFor="phoneNumber">
                Phone Number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-4 block w-full rounded-md bg-gray-50 border border-gray-300 shadow-sm focus:border-none outline-none"
                placeholder="Please enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-black font-bold items-center" htmlFor="email">
                Email Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-4 block w-full rounded-md bg-gray-50 border border-gray-300 shadow-sm focus:border-none outline-none"
                placeholder="Please enter your email address"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-black font-bold items-center" htmlFor="contactMethod">
                Preferred Contact Method
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="mt-1 p-4 block w-full rounded-md bg-gray-50 border border-gray-300 shadow-sm focus:border-none outline-none"
                required
              >
                <option value="">Please select your preferred contact method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-black font-bold" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-4 rounded-md bg-gray-50 border border-gray-300 shadow-sm focus:border-none outline-none"
              placeholder="Please enter your message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-[#E76C21] text-white px-8 py-4 rounded-full hover:bg-orange-600">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouchModal;