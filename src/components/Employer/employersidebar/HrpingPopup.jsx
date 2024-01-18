import React from 'react'
import PINGHR from "../assets/pinghr.png"
import "./HrpingPopup.css"

export default function HrpingPopup({Ping}) {
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
<p>hr@techjainit.com</p>
          </div>
          <div className="ping_img">
              <img src={PINGHR} alt=""  />
          </div>

</div>
      </div>
    </div>
  )
}
