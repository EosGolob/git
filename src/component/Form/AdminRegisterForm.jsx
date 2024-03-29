import React, { useState } from 'react';

const AdminRegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement the submission logic here
    try {
      const response = await fetch('http://localhost:5000/api/admins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Admin registration successful', result);
      } else {
        throw new Error('Admin registration failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
      <form onSubmit={handleSubmit} style={{ border: '2px solid blue', padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', width: '400px' }}>
        <h2 style={{ textAlign: 'center', color: 'black' }}>Admin Registration Form</h2>
        <label style={{ color: 'black' }}>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px', width: '100%' }}>Register</button>
      </form>
    </div>
  );
};

export default AdminRegistrationForm;
