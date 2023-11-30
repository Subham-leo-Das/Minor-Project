import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import './UserTable.css';
import Axios  from "axios";

const UserTable = () => {
  const [userData,setUserData]=useState([]);
  const url="http://localhost:8080/users";
  const getQuery=`/all`;
  Axios.get(`${url}${getQuery}`)
  .then((res)=>{
    setUserData(res.data);
  })
  .catch((error)=>{
    console.error("Error Fetching User:",error);
  });

  function onHandleDelete(e){
    const delId=e.id;
    const delQuery=`/delete/${delId}`;
    Axios.delete(`${url}${delQuery}`)
    .then((res)=>{
      alert("User Deleted");
    })
    .catch((error)=>{
      console.error("Error Fetching User:",error);
    });
  };

  

  
    
  

  return (
    <>
    <AdminNavbar/>
    <div className="user-table-container">
      <h2>User Table</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={()=>onHandleDelete(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default UserTable;
