import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                
                 
                
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Appointment Registration Form</h3>

                    


                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m1">Mother's name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example8">Address</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" for="otherGender">Other</label>   
                  </div>

                </div>   

                <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">State</option>
                      <option value="2">Andhra Pradesh</option>
                      <option value="3">Arunachal Pradesh</option>
                      <option value="4">Assam</option>
                      <option value="5">Bihar</option>
                      <option value="6">Chhattisgarh</option>
                      <option value="7">Goa</option>
                      <option value="8">Gujrat</option>
                      <option value="9">Hariyana</option>
                      <option value="10">Himachal Pradesh</option>
                      <option value="11">Jharkhand</option>
                      <option value="12">Karnataka</option>
                      <option value="13">Kerala</option>
                      <option value="14">Madhya Pradesh</option>
                      <option value="15">Maharashtra</option>
                      <option value="16">Manipur</option>
                      <option value="17">Meghalaya</option>
                      <option value="18">Mizoram</option>
                      <option value="19">Nagaland</option>
                      <option value="20">Odisha</option>
                      <option value="21">Punjub</option>
                      <option value="22">Rajasthan</option>
                      <option value="23">Sikkim</option>
                      <option value="24">Tamil Nadu</option>
                      <option value="25">Telengana</option>
                      <option value="26">Tripura</option>
                      <option value="27">Uttar Pradesh</option>
                      <option value="28">Uttarakhand</option>
                      <option value="29">West Bengal</option>

                    </select>

                  </div>
                  <div className="form-outline mb-4">
                  <input type="text" id="form3Example9" className="form-control form-control-lg"
                  ></input> 
                  <label className="form-label" for="form3Example9">City </label>
                  
                </div>
                  
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example9" className="form-control form-control-lg"  placeholder="DD/MM/YYYY"></input> 
                  <label className="form-label" for="form3Example9">DOB </label>
                  
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example90" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example90">Pincode</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example99">Phone No.</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example97">Email ID</label>
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">Reset all</button>
                  <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>    
    );   
}

