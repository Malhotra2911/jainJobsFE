import React from "react";
import "../../../css/jobseeker/HowtoApply.css";
export default function HowtoApply() {
  return (
    <div className="HowtoApply">
      <h3 className="apply_main_heading">How to apply</h3>
      <h4 className="apply_main_sub_heading" >Account creating and applying process <br /> sign up via your credentials.</h4>
      <div className="howtoapply">
        <div className="applay_content">
          <div className="applay_img_container">
            <h3 className="loginiget">LOGIN</h3>
            <img className="apply_inside_img"
              src="jobseeker/applaylogin.png"
              alt=""
            />
          </div>
          <div className="applay_img_container">
            <h3 className="dashboardiget">Dashboard</h3>

            <img className="apply_inside_img"
              src="jobseeker/applaydashboard.png"
              alt=""
            />
          </div>
          <div className="applay_img_container">
            <h3 className="applyiget">Apply Job</h3>

            <img className="apply_inside_img"
              src="jobseeker/applayapplayjob.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
