import React from 'react'
import "../../../css/jobseeker/HrpingPopup.css"

export default function HrpingPopup({ Ping, email }) {
  return (
    <div className="hrpingPP_container">
      <div className="hrping_container">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              Ping(false);
            }}
          >
            X
          </button>
        </div>
        <div className="ping_containerr">
          <div className="ping-content">
            <h3>If you want to connect to
              hr please send mail at
            </h3>
            <p>{email}</p>
          </div>
          <div className="ping_img">
            <img src="jobseeker/pinghr.png" alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}
