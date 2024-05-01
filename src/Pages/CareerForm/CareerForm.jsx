import React, { useState } from 'react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    education: '',
    workExperience: '',
    coverLetter: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      location: '',
      education: '',
      workExperience: '',
      coverLetter: '',
      resume: null,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg mb-8">
       <h3 className="text-2xl p-2 font-semibold text-center mx-auto text-blue-900">Drop Your CV</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Repeat the above pattern for other form fields */}
        {/* Location, Education, Work Experience */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
            Cover Letter
          </label>
          <textarea
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
            Resume
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            name="resume"
            onChange={handleFileChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
