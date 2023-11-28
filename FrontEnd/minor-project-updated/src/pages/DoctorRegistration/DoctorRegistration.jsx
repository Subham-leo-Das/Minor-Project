import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Registration.css';
import Navbar from "../../components/Navbar/Navbar";

const DoctorRegistration = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    age: '',
    specialization: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);

    
    navigate('/'); 
  };

  return (
    <>
    <Navbar/>

    <div className="background-container">
    <div className='DoctorRegistration'>
    <form className='RegForm' onSubmit={handleSubmit}>
      <div className='Header'><h2>Doctor Registration</h2></div> 
      
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <div className='row'>
      <div className='col-md-6 mb-4'>
      <label>
        Experience:
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
      </label>
      </div>
      <div className='col-md-6 mb-4'>
      <label>
        Age:
        <input type="text" name="age" value={formData.age} onChange={handleChange} required />
      </label>
      </div>
      </div>
      <label>
        Specialization:
        <select name="specialization" value={formData.specialization} onChange={handleChange} required>
          <option value="">Select Specialization</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="General Medicine">General Medicine</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
         
        </select>
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    </>
    
    
  );
};

export default DoctorRegistration;