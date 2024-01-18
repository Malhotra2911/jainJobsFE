import React from "react";
import "../../../css/jobseeker/DreamJob.css";

export default function Boost() {
  return (
    <>
      <div className="Dream_Container">
        <div className="Dream_Content">
          <div className="telegram_img"></div>
          <div className="dreamjob_heading_main">


          <h1 className="dream_job_heading">
            Increase Your Resume{" "}
            <span style={{ color: "#F7701D" }}>Visibility</span>
            {/* <br /> Easy And Fast */}
          </h1>
          </div>
          <h3 className="dream_job_content">
             Develop desired skills
            and <br/>live meaningful experiences with JAIN. Market yourself with the
            right skillset and increase resume visibility.
          </h3>
        </div>
        <div className="Dream_Img">
          <div className="rectangle_img">
            <div className="circle_img">
              <div className="subcircle_img">
                <div className="main_freelancing_img">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
