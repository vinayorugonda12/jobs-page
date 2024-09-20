// src/pages/ApplyJob.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ApplyJob = () => {
  const { id } = useParams();  // Get the job ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to localStorage with a key based on the job ID
    localStorage.setItem(`jobApplication-${id}`, JSON.stringify(formData));

    // Optionally navigate back to the job list or a confirmation page
    navigate('/');
    alert('Application submitted and saved');
  };

  // Update form state when inputs change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Apply for Job ID: {id}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="resume">Resume:</label><br />
          <input
            type="text"
            name="resume"
            id="resume"
            value={formData.resume}
            onChange={handleChange}
            required
            placeholder="Paste your resume or provide a link"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3f51b5', color: 'white', border: 'none' }}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
