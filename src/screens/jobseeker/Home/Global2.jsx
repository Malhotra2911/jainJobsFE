import React from "react";
import "../../../css/jobseeker/DreamJob.css";

export default function Global() {
  return (
    <>
      <div className="Dream_Container">
        <div  className="Dream_Content">
          <div className="telegram_img"></div>
          <div className="dreamjob_heading_main">
          <h1 className="dream_job_heading">
            Global Opportunities for You to{" "}
            <span style={{ color: "#F7701D" }}>Thrive</span>
            {/* <br /> Easy And Fast */}
          </h1>

          </div>
          {/* <h1 className="dream_job_heading">
            Global <span style={{ color: "#F7701D" }}>Openings</span>
          </h1>
          <p className="dreamjob_para">or</p>
          <h1 className="dream_job_heading">
            Global Opportunities for You to{" "}
            <span style={{ color: "#F7701D" }}>Thrive</span>
          </h1> */}
          <h3 className="dream_job_content">
            Explore a wealth of opportunities globally<br/> to create a career that
            you desire. We encourage you to lead your values and passion.
          </h3>
          {/* <h1 className="freelancer_job_heading">
          Get Registered as <span style={{color: "#F7701D"}}>freelancer</span><br /> and start hiring
         </h1>
         <h3 className="freelancer_job_content">
          Develope your existing skills with FMN <br /> specialised services.
         </h3> */}
        </div>
        <div   className="Dream_Img">
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
