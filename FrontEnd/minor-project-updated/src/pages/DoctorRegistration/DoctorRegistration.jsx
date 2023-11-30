import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Registration.css";
import Navbar from "../../components/Navbar/Navbar";

const DoctorRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    age: "",
    specialization: { id: "" },
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const newData = { ...formData };
    if (e.target.name === "specialization") {
      newData.specialization = { id: e.target.value };
    } else {
      newData[e.target.name] = e.target.value;
    }
    setFormData(newData);
    console.log(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await Axios.post("http://localhost:8080/doctors/add", formData);
      console.log("Doctor added successfully:", response.data);
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="background-container">
        <div className="DoctorRegistration">
          <form className="RegForm" onSubmit={handleSubmit}>
            <div className="Header">
              <h2>Doctor Registration</h2>
            </div>

            <label>
              Name:
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <div className="row">
              <div className="col-md-6 mb-4">
                <label>
                  Experience:
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="col-md-6 mb-4">
                <label>
                  Age:
                  <input
                    id="age"
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>
            <label>
              Specialization:
              <select
                id="specialization"
                name="specialization"
                value={formData.specialization.id}
                onChange={handleChange}
                required
              >
                <option value="">Select Specialization</option>
                <option value="1">Dermatology</option>
                <option value="2">Orthopedics</option>
                <option value="3">General Medicine</option>
                <option value="4">Cardiology</option>
                <option value="5">Neurology</option>   
              </select>
            </label>
            <br />

            <label>
              Email:
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label>
              Password:
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
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
