import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    if (email !== null) {
      setIsLoggedIn(true);
      setUserEmail(email);
    } else {
      setIsLoggedIn(false);
      setUserEmail("");
    }
  }, []);

  

  const handleLogout = () => {
    // Add logic to clear the session and perform logout actions
    sessionStorage.removeItem("email");
    setIsLoggedIn(false);
    setUserEmail("");
    // Add additional logic for logout if needed
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand nav-link disabled">{props.name}</div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
          <li className="nav-item">
            <img src="" />
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
              <li><a class="dropdown-item" href="/DoctorList?speciality=Dermatology">Dermatology</a></li>
              <li><a class="dropdown-item" href="/DoctorList?speciality=Orthopedics">Orthopedics</a></li>

              <li><a class="dropdown-item" href="/DoctorList?speciality=General Medicine">General Medicine</a></li>
              <li><a class="dropdown-item" href="/DoctorList?speciality=Cardiology">Cardiology</a></li>
              <li><a class="dropdown-item" href="/DoctorList?speciality=Neurology">Neurology</a></li>
            </ul>
          </li>

          <li className="nav-item">
        <a className="nav-link" href="footer" onClick={props.onContactUsClick}>
          Contact us
        </a>
      </li>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            {isLoggedIn ? (
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userEmail}
                </a>
                <ul className="dropdown-menu">
                  {/* Add additional user-related dropdown items if needed */}
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (

              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/UserLogin">
                      Login as patient
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/DoctorLogin">
                      Login as doctor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/AdminLogin">
                      Login as Admin
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          </ul>
      </div>
    </nav>
  );
}

