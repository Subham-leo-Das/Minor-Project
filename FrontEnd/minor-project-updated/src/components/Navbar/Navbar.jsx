import React from "react";
import "./Navbar.css";
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand nav-link disabled">{props.name}</div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
        <li className="nav-item">
          <img src= ""/>
         </li>
          <li className="nav-item">
            <a href="/" className="nav-link" aria-current="page">
              Home
            </a>
          </li>
          
          
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Departments
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/DoctorList">Dentist</a></li>
            <li><a class="dropdown-item" href="/DoctorList">Eye Specialist</a></li>
            
            <li><a class="dropdown-item" href="/DoctorList">Gynocologist</a></li>
            <li><a class="dropdown-item" href="/DoctorList">Cardiologists</a></li>
            <li><a class="dropdown-item" href="/DoctorList">Psychiatrist</a></li>
            <li><a class="dropdown-item" href="/DoctorList">Medicine specialist</a></li>
            <li><a class="dropdown-item" href="/DoctorList">Child specialist</a></li>
          </ul>
        </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Login">
              Login
            </a>
          </li>
        </ul>
        
        
      </div>
    </nav>
  );
}
