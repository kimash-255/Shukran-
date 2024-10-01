import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaGlobe } from 'react-icons/fa';

const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: {
      customerService: false,
      digitalMarketing: false,
      erpKnowledge: false,
    },
    motivation: '',
    availability: '',
    resume: null,
    coverLetter: null,
    additionalInfo: '',
    socials: '',
  });

  const totalSteps = 7; // Total number of sections in the form
  const filledSteps = Object.values(formData).reduce((acc, value) => {
    if (typeof value === 'string' && value.trim() !== '') {
      return acc + 1;
    }
    if (typeof value === 'object' && value !== null) {
      return acc + Object.values(value).filter(Boolean).length;
    }
    return acc;
  }, 0);
  
  const progressPercentage = (filledSteps / totalSteps) * 100;

  // Load saved form data from local storage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('recruitmentForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save form data to local storage automatically on change
  useEffect(() => {
    localStorage.setItem('recruitmentForm', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        skills: {
          ...prevData.skills,
          [name]: checked,
        },
      }));
    } else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    for (const key in formData) {
      if (key === 'skills') {
        for (const skill in formData.skills) {
          formPayload.append(`skills[${skill}]`, formData.skills[skill]);
        }
      } else {
        formPayload.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      alert('Application submitted successfully!');
      // Clear local storage after submission
      localStorage.removeItem('recruitmentForm');
      setFormData({
        name: '',
        email: '',
        phone: '',
        skills: {
          customerService: false,
          digitalMarketing: false,
          erpKnowledge: false,
        },
        motivation: '',
        availability: '',
        resume: null,
        coverLetter: null,
        additionalInfo: '',
        socials: '',
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-300 to-purple-300 p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Join Softleek!</h2>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">1. Personal Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-purple-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-purple-400 mt-4"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-purple-400 mt-4"
              required
            />
          </div>

          {/* Skills */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm mt-4">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">2. Skills</h3>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="customerService"
                  checked={formData.skills.customerService}
                  onChange={handleChange}
                  className="mr-2"
                />
                Customer Service
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="digitalMarketing"
                  checked={formData.skills.digitalMarketing}
                  onChange={handleChange}
                  className="mr-2"
                />
                Digital Marketing
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="erpKnowledge"
                  checked={formData.skills.erpKnowledge}
                  onChange={handleChange}
                  className="mr-2"
                />
                ERP Knowledge
              </label>
            </div>
          </div>

          {/* Motivation */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm mt-4">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">3. Motivation </h3>
            <textarea
                name="motivation"
                placeholder="Why do you want to join us? (Maximum 100 words)"
                value={formData.motivation}
                onChange={handleChange}
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-purple-400"
                required
            />
            </div>

          {/* Availability */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm mt-4">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">4. Availability</h3>
            <input
              type="text"
              name="availability"
              placeholder="Availability (e.g., Full-time, Part-time)"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-purple-400"
              required
            />
          </div>

          {/* Attachments */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm mt-4">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">5. Attachments</h3>
            <label className="block mb-2">
              Resume (PDF)
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleChange}
                className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-4"
                required
              />
            </label>
            <label className="block mb-2">
              Cover Letter (PDF)
              <input
                type="file"
                name="coverLetter"
                accept=".pdf"
                onChange={handleChange}
                className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-4"
                required
              />
            </label>
          </div>

          {/* Social Links */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm mt-4">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">6. Social Links</h3>
            <input
              type="text"
              name="socials"
              placeholder="Add Social Links (LinkedIn, GitHub, etc.)"
              value={formData.socials}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-purple-400"
            />
            <div className="flex mt-2">
              <FaLinkedin className="text-blue-700 mr-2" />
              <FaGithub className="text-gray-700 mr-2" />
              <FaFacebook className="text-blue-600 mr-2" />
              <FaInstagram className="text-pink-600 mr-2" />
              <FaTwitter className="text-blue-400 mr-2" />
              <FaTiktok className="text-black mr-2" />
              <FaGlobe className="text-gray-600" />
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm mt-4">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">7. Additional Information</h3>
            <textarea
              name="additionalInfo"
              placeholder="Any other information you would like to share?"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-purple-400"
            />
          </div>

          {/* Apply Now Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-200"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruitmentForm;
