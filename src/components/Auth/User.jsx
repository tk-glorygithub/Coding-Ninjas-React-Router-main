import React from 'react'
import './App.css'
import {NavLink } from  "react-router-dom";


function User({user,signouthandle}) {
  return (
    <>
    <center style={{margin:'auto',padding:'13%',}}>
    
    
    <h1><span id='user'>{user.email}</span> </h1>
    <br/>

    <h2>About Skill Tracker! </h2>
    <br/>
    <div className="box">
      <p id='loginpara'>🚀Unloack your ultimate platform to monitor and enhance your technical expertise a tech enthusiast, or a professional aiming to stay ahead, Skill Tracker is designed to empower your learning journey. 
<br />

<br/>
Why Choose Skill Tracker?
📚 Comprehensive Skill Coverage
Dive into an extensive library of topics ranging from programming fundamentals to cutting-edge technologies, curated for all levels—beginner to expert.

💡 Interactive Dashboard
Track your progress with a user-friendly interface that visualizes your achievements, highlights your strengths, and identifies areas to improve.

🎓 Tailored Learning Paths
Access personalized content recommendations and skill-building exercises based on your interests and goals.

🌍 Community Engagement
Connect with peers and mentors. Collaborate on projects, participate in discussions, and find inspiration from others’ success stories.

🔗 Exclusive Features
Leverage advanced tools, including mock interview simulations, coding challenges, and performance analytics, to stay ahead in your career.

Your Growth Partner in Tech Excellence
At Skill Tracker, we believe that consistent learning and self-improvement are keys to success in the ever-evolving tech world. Our platform doesn’t just track your skills; it transforms the way you grow.

🌟 Monitor. Learn. Excel.
Take charge of your learning with tools that provide insights into your growth journey, helping you achieve your dreams with confidence.

Let’s learn, grow, and succeed—together with Skill Tracker.

Call-to-Action
🔗 Ready to get started?
Join now and explore the endless possibilities that await you on your path to tech mastery.

[Sign Up Today]



Let's code, learn, and grow together with ComboCoding. Happy coding! 🎉</p>
   </div>
    <button className='logout' onClick={signouthandle}>Logout</button>
    <button 
  style={{ 
    backgroundColor: 'red', 
    color: 'white', 
    border: '3px solid white', 
    borderRadius: '15px', /* Increased for rounder corners */
    padding: '10px 20px', 
    marginLeft: '20px', /* Move button slightly to the right */
    cursor: 'pointer',
    display: 'inline-block' /* Ensures proper alignment */
  }}
>
  <NavLink to="/courses" style={{ textDecoration: 'none', color: 'inherit' }}>
    {({ isActive }) => (isActive ? "On Courses" : "Go To Courses")}
  </NavLink>
</button>


    </center>
    <h3 style={{color:'rgb(255, 214, 9)'}}>Happy Coding</h3>
 
    </>
  )
}

export default User