import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./register.css";

function Sign({ SetEmail, SetPass, check, google, toggle }) {
  const navigate = useNavigate(); // Initialize navigate hook

 

  const handleSignIn = async (e) => {
    e.preventDefault();
    await check(e); // Call the provided sign-in function
    navigate("/"); // Redirect to the homepage after successful sign-in
  };

  return (
    <div className="register">
      <div className="containerr">
        <div className="cardr">
          <h1>Sign up</h1>
          <form onSubmit={handleSignIn}>
            <div className="form-groupr">
              <i className="fas fa-enveloper"></i>
              <input
                type="email"
                className="form-controlr"
                id="email"
                onChange={(e) => SetEmail(e.target.value)}
              />
              <label className="form-labelr" htmlFor="email">
                Your Email
              </label>
            </div>
            <div className="form-groupr">
              <i className="fas fa-lockr"></i>
              <input
                type="password"
                className="form-controlr"
                id="password"
                onChange={(e) => SetPass(e.target.value)}
              />
              <label className="form-labelr" htmlFor="password">
                Password
              </label>
            </div>
            <button type="submit" className="btnr">
              Sign In
            </button>
            
            <center>
              <button
                type="button"
                className="btnr"
                style={{ width: "40%", backgroundColor: "red", margin: "4%" }}
                onClick={async () => {
                  try {
                    const isAuthenticated = await google();
                    if (isAuthenticated) navigate("/");
                    else alert("Google Sign-In failed!");
                  } catch (error) {
                    console.error("Google sign-in error:", error);
                  }
                }}
              >
                Google
              </button>
            </center>
            <button onClick={toggle}>Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
