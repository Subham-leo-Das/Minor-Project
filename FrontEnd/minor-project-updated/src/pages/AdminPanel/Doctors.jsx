import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import './UserTable.css';
import Axios from "axios";

const DoctorTable = () => {
    const [doctorData,setDoctorData]=useState([]);
    const url="http://localhost:8080/doctors";
    const getQuery=`/all`;
    Axios.get(`${url}${getQuery}`)
    .then((res)=>{
      setDoctorData(res.data);
    })
    .catch((error)=>{
      console.error("Error Fetching User:",error);
    });
  
    function onHandleDelete(e){
      const delId=e.id;
      const delQuery=`/delete/${delId}`;
      Axios.delete(`${url}${delQuery}`)
      .then((res)=>{
        alert("Doctor Deleted");
      })
      .catch((error)=>{
        console.error("Error Fetching Doctor:",error);
      });
    };
  

  

  return (
    <>
    <AdminNavbar/>
    <div className="user-table-container">
      <h2>Doctor Table</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th> Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctorData.map(doctor => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.age}</td>
              <td>{doctor.email}</td>
              <td>{doctor.experience}</td>
              
              <td>
                <button onClick={()=>onHandleDelete(doctor)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default DoctorTable;
