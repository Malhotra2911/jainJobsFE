import React from 'react'
import "../../../css/Employer/StartHiring.css"

export default function StartHiring() {
  return (
    <div className="starthiring_container">
      <div className="starthiring_content">
          <div className="starthiring_left">
              <h3>Top tech talent has many options today</h3>
              <h2>Ready to hire them the way it works in 2022?</h2>
              <div className="starthiring_btn">
              <button className="hiring">Start Hiring</button>
          </div>

          </div>
          <div className="starthiring_right">
              <img src="employer/hiring.png" alt=""  />
          </div>
      </div>
    </div>
  )
}
