// src/pages/RegisterCourse.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RegisterCourse = () => {
  const { id } = useParams();  // Get the course ID from URL parameters
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    collegeName: '',
    email: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to localStorage with a key based on the course ID
    localStorage.setItem(`courseRegistration-${id}`, JSON.stringify(formData));

    // Optionally navigate back to the course list or a confirmation page
    navigate('/');
    alert('Registration submitted and saved');
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
      <h2>Register for Course ID: {id}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="firstName">First Name:</label><br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="lastName">Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="collegeName">College Name:</label><br />
          <input
            type="text"
            name="collegeName"
            id="collegeName"
            value={formData.collegeName}
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
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3f51b5', color: 'white', border: 'none' }}>
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default RegisterCourse;
