import React from 'react'
import './Login.css'
export default function Login(){
  return (
    <div className="loginBox">
    <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"/>
    <h3>Sign in here</h3>
    <form action="" method="post">
        <div className="inputBox">
            <input id="uname" type="text" name="Username" placeHolder="Username"/>
            <input id="pass" type="password" name="Password" placeHolder="Password"/>
        </div>
        <div className="submit-button">
        <a href='/AdminHome'>Submit</a>
        </div>
    </form>
    <a className='forget-pass' href="/">Forgot Password<br/> </a>
    <div className="register">
        <a href="/AdminRegistration">Register</a>
    </div>
</div>
  )
}
