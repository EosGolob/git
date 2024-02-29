import React, { useState } from 'react';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    password:'',
    interviewDate:'',
    jobProfile:'',
    qualification:'',
    phoneNo:'',
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
      const response = await fetch('http://localhost:5000/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });  
      if (response.ok) {
        const result = await response.json();
        console.log('Submission successful', result);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
      <form onSubmit={handleSubmit} style={{ border: '2px solid red', padding: '20px', borderRadius: '10px', backgroundColor: 'lightgray', width: '400px' }}>
        <h2 style={{ textAlign: 'center', color: 'black' }}>Employee Register Form</h2>
        <label style={{ color: 'black' }}>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Middle Name:
          <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Interview Date:
          <input type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Job Profile:
          <textarea name="jobProfile" value={formData.jobProfile} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Qualification:
          <textarea name="qualification" value={formData.qualification} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Phone No:
          <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <label style={{ color: 'black' }}>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ display: 'block', margin: '10px 0', padding: '5px', borderRadius: '5px', width: '100%' }} />
        </label>
        <button type="submit" style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px', width: '100%' }}>Submit</button>
      </form>
    </div>
  );
};

export default SubmissionForm;
