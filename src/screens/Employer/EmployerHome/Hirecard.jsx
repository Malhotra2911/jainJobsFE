import React from 'react'
import "../../../css/Employer/Hirecard.css";
import { Link } from 'react-router-dom';

export default function Hirecard() {
  return (
    <div className='hire_container'>
      <div className="hirecard_container">
        <div className="hire_left">
          <h4>Top tech talent has many options today</h4>
          <h5>Ready to hire them the way it works in 2022?</h5>
          <Link to="/Signuplogin" style={{ listStyle: "none", textDecoration: "none",width:"100%" }}>
            <button className='hirehome'>Hire</button>
          </Link>
        </div>
        <div className="hire_right">
          <img
            src="employer/hiringhome.png"
            alt=""
          />
        </div>
      </div>

    </div>
  )
}
