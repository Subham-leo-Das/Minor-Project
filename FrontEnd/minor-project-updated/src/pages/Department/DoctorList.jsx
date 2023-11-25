import React from 'react';
import "./DoctorList.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Navbar from '../../components/Navbar/Navbar';

const DoctorList = () => {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Orthopedic Surgeon' },
    { id: 3, name: 'Dr. James Brown', specialty: 'Dermatologist' },
    { id: 4, name: 'Dr. John Doe', specialty: 'Cardiologist' },
    { id: 5, name: 'Dr. Jane Smith', specialty: 'Orthopedic Surgeon' },
    { id: 6, name: 'Dr. James Brown', specialty: 'Dermatologist' },
  ];

  return ( 
    
    <div>
      <Navbar/>
    <MDBContainer>
      <MDBRow>
        {doctors.map((doctor) => (
          <MDBCol key={doctor.id} md="4" className="mb-4">
            <MDBCard alignment='center'>
              <MDBCardBody>
                <MDBCardTitle>{doctor.name}</MDBCardTitle>
                <MDBCardText>Specialty: {doctor.specialty}</MDBCardText>
                <button className='mx-2'>
        Get an Appointment
      </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default DoctorList;
